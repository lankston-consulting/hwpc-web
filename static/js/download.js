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
  var tables = document.getElementsByClassName('table');
  for (var i = 0; i < tables.length; i++) {
    Plotly.downloadImage(tables[i], { format: 'png' });

  }
  //save pngs as pdfs

  //export pdfs as zip
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

     
      export_plots();
      // export_tables();
      // export_csv();

      

    });


      // image_array = [];
      // var zip = new JSZip();
      // prime_count = 0
      // new_count = 0;
      // $(".dl-files").children().each(function () {
      //   tempChk = $(this).children()[0];
      //   if (tempChk.checked) { 
      //     prime_count += 1;
      //   }
      // })
    //   return new Promise((resolve, reject) => {

    //     
    
              // $("#hidden-graphs").append("img");
              // var img = $('<img/>')
              // img.attr("src", dataUrl)
              // img.attr("class", "hidden-graph")
              // img.appendTo("#hidden-graphs");
              // src='" + dataUrl + "' class='hidden-graph'>
              // img_png.attr("src", dataUrl);
         

              // new_image = saveAs(dataUrl, tempChk.value.slice(0, -7) +".png");
        
        
          //     zip.file(tempChk.value.slice(0, -7) + ".png", urlToPromise(dataUrl), { binary: true });
          //   })
          
          // });


        
  


    


//       //reach here regardless
//       // {status: "fulfilled", value: 33}
//    });
    

