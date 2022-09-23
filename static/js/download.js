// function download_files() {
//   //see which checkboxes are checked

//   //if any checkbox is checked then download files
//   //if not then do nothing and return a message
// var canvas = document.createElement("canvas");
// canvas.width = 1000;
// canvas.height = 1000;
// var ctx = canvas.getContext("2d");

     
var img_png = d3.select('#png-export');
let zip = new JSZip();


function export_tables() {
  //export plotly tables as pngs

  var tables = document.getElementsByClassName('graph table');
  
  for (var i = 0; i < tables.length; i++) {
    // Plotly.toImage(tables[i], { format: 'png' });
    console.log(tables[i]);
    generate_tables(tables[i], { format: 'png' }, i + ".png");


  }


}

async function generate_tables(div, options,file_name) {
  url = await Plotly.toImage(div, options);
  
  // var doc = new PDFDocument({ size: 'LETTER', margin: 50 });
  //   const stream = doc.pipe(blobStream());
  //   doc.image(Buffer.from(url, 'base64'), 100, 100);
  //   doc.end();


  // const PDFurl = stream.toBlobURL("application/pdf");
 
  
  await zip.file(file_name, PDFurl, { binary: true })

  // console.log(big_count)
  // console.log(small_count)
  // small_count +=1;
  // if(small_count == big_count){
  //   zip.generateAsync({ type: "blob" }).then(function callback(content) {
  //     // see FileSaver.js
  //     console.log(content)
  //     saveAs(content, "example.zip");});
  // }
  
}
 

big_count = 0
small_count = 0
$(".dl-files").children().each(function () {
  tempChk = $(this).children()[0];
  if (tempChk.checked) {
    big_count +=1
  }});



function export_plots() {
  var image_array = [];
  
  $(".dl-files").children().each(function () {
    tempChk = $(this).children()[0];
    if (tempChk.checked) {
      // console.log(tempChk.value);
      png_options = { format: 'png', width: 1300, height: 700 };
       //push plotly to image_array
      
      // 

      console.log(document.getElementsByClassName(tempChk.value)[0])
       gen = generate_image(document.getElementsByClassName(tempChk.value)[0], png_options,tempChk.value.slice(0, -7) + ".png")
       
    }
  })
  console.log(zip)
  
}

async function generate_image(div, options,file_name) {
  url = await Plotly.toImage(div, options);
  await zip.file(file_name, urlToPromise(url), { binary: true })
  console.log(big_count)
  console.log(small_count)
  small_count +=1;
  if(small_count == big_count){
    zip.generateAsync({ type: "blob" }).then(function callback(content) {
      // see FileSaver.js
      console.log(content)
      saveAs(content, "example.zip");});
  }
  
 }

function export_csv() {
  //export csv files
}


function urlToPromise(url) {
  return new Promise(function(resolve, reject) {
    JSZipUtils.getBinaryContent(url, function (err, data) {
          if(err) {
              reject(err);
          } else {
              resolve(data);
          }
      });
  });
  }


  d3.select("#download")
    .on('click', function () {

      // export_csv();
      export_tables();
      export_plots();
    });

