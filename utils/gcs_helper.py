from google.cloud import storage
import tempfile
import datetime
import json

from .storage_helper import StorageHelper


class GcsHelper(StorageHelper):
    """
    Singleton object for working with GCS objects.
    """

    _client = None
    _instance = None

    def __new__(cls, *args, **kwargs):
        """
        Singleton catcher. Can optionally pass a kwarg or "use_service_account" with a value of
        {'keyfile'=path_to_json_keyfile} to authenticate as a service account
        :param args:
        :param kwargs:
        """
        if cls._instance is None:
            cls._instance = super(GcsHelper, cls).__new__(cls)

            if "use_service_account" in kwargs:
                gcs_account = kwargs["use_service_account"]
                cls._client = storage.Client.from_service_account_json(
                    gcs_account["keyfile"]
                )
            else:
                cls._client = storage.Client()
        return cls._instance

    @staticmethod
    def check_file_exists_on_cloud(bucket, filename):
        """
        Pass a bucket and a filename (including any prefix path
        and return whether it exists on cloud storage
        :param bucket: Bucket name
        :param filename: A path and filename to the file in the bucket
        :return: Boolean, exists or not
        """
        bucket = GcsHelper._client.bucket(bucket)
        stats = storage.Blob(bucket=bucket, name=filename).exists(GcsHelper._client)
        return stats

    @staticmethod
    def list_blobs(bucket_name, p=""):
        """
        Return a list of all object blobs in the given bucket matching the optional prefix p
        :param bucket_name:
        :param p:
        :return:
        """
        blobs = GcsHelper._client.list_blobs(bucket_name, prefix=p)
        return blobs

    @staticmethod
    def list_blobs_names(bucket_name, p=""):
        """
        Return a list of all blob names in the given bucket matching the optional prefix p
        :param bucket_name:
        :param p:
        :return:
        """
        blobs = GcsHelper._client.list_blobs(bucket_name, prefix=p)
        blobnames = [x.name for x in blobs]
        return blobnames

    @staticmethod
    def download_temp(bucket, remote_path):
        """
        Download a file from GCS and write it to a temporary file on disk. Return the named
        temporary file.
        :param bucket:
        :param remote_path:
        :return:
        """
        bucket = GcsHelper._client.bucket(bucket)
        blob = bucket.blob(remote_path)

        fp = tempfile.NamedTemporaryFile()

        GcsHelper._client.download_blob_to_file(blob, fp)
        fp.seek(0)
        return fp

    @staticmethod
    def download_blob(bucket, remote_path, local_path):
        """
        Download a file from GCS and write it to disk.
        :param bucket:
        :param remote_path:
        :return:
        """
        bucket = GcsHelper._client.bucket(bucket)
        blob = bucket.blob(remote_path)

        blob.download_to_filename(local_path)
        return

    @staticmethod
    def upload_temp(bucket_name, source_file_obj, destination_blob_name):
        """
        Upload a file object from disk. Works with temp files, should also work with "real" files as long
        as they're open as a file object. TODO test real files
        :param bucket_name: Bucket to upload file to
        :param source_file_obj: An active file object to upload
        :param destination_blob_name: A name, including any "subdirectories", to upload the blob to (but not bucket)
        :return:
        """
        bucket = GcsHelper._client.bucket(bucket_name)
        blob = bucket.blob(destination_blob_name)

        blob.upload_from_file(source_file_obj)
        # We return the blob object in order to make the temporary file public for download in main.py
        return blob

    @staticmethod
    def delete_blob(bucket_name, blob_name):
        """Deletes a blob from the bucket."""
        # bucket_name = "your-bucket-name"
        # blob_name = "your-object-name"

        bucket = GcsHelper._client.bucket(bucket_name)
        blob = bucket.blob(blob_name)
        blob.delete()

        print("Blob {} deleted.".format(blob_name))
        return

    @staticmethod
    def move_blob(source_bucket, source_blob_name, dest_bucket, dest_blob_name):
        """

        :param source_bucket:
        :param source_blob_name:
        :param dest_bucket:
        :param dest_blob_name:
        :return:
        """
        source_bucket = GcsHelper._client.bucket(source_bucket)
        source_blob = source_bucket.blob(source_blob_name)
        dest_bucket = GcsHelper._client.bucket(dest_bucket)

        new_blob = source_bucket.copy_blob(source_blob, dest_bucket, dest_blob_name)
        source_blob.delete()
        print("File moved from {} to {}".format(source_blob_name, dest_blob_name))

    @staticmethod
    def upload_input_group(bucket_name, source_file_name, data, data_type):
        """[summary]

        Args:
            bucket_name ([type]): [description]
            source_file_name ([type]): [description]
            data ([type]): [description]
            data_type ([type]): [description]
        """

        data_json = {}
        # Code parses through data pulled from web
        for key, value in data.items():
            # If the input type is not a file type, it will write a text file with information and push it up to cloud storage
            if type(value) != data_type:
                # If the input is not empty, it will make the file and upload. If it is empty, it will be skipped and save memory.
                if value != "":
                    path = source_file_name + key
                    temp = value.encode()
                    temp_file = tempfile.TemporaryFile()
                    temp_file.write(temp)
                    temp_file.seek(0)
                    data_json[key] = path
                    GcsHelper().upload_temp(bucket_name, temp_file, path)
                    temp_file.close()
            # If it is a file type, it will directly upload the file instead
            else:
                # If the input is not empty, it will make the file and upload. If it is empty, it will be skipped and save memory.
                if value.headers["Content-Type"] != "application/octet-stream":
                    path = source_file_name + key
                    data_json[key] = path
                    GcsHelper().upload_temp(bucket_name, value, path)

        # The json of all the file paths is converted into a string then to bytes to be uploaded as a temp file for use in the worker.
        data_json = json.dumps(data_json)
        data_json = data_json.encode()
        user_file = tempfile.TemporaryFile()
        user_file.write(data_json)
        user_file.seek(0)
        GcsHelper().upload_temp(
            bucket_name, user_file, source_file_name + "user_input.json"
        )
        user_file.close()
        return
