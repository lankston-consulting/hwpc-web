output={}
output.initialize = function(input_json) {
    data_json=input_json;
    console.log(typeof(data_json))
    console.log(data_json)
    data_json = data_json.replace(/\n/g, '')
    JSON.parse(data_json)
}