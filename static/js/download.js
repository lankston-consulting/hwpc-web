// function download_files() {
//   //see which checkboxes are checked

//   //if any checkbox is checked then download files
//   //if not then do nothing and return a message
// var canvas = document.createElement("canvas");
// canvas.width = 1000;
// canvas.height = 1000;
// var ctx = canvas.getContext("2d");

     
var img_png = d3.select('#png-export');

d3.select("#download")
  .on('click', function () {
    // console.log(document.getElementById("end_use"));

    //   saveSvgAsPng(document.getElementById("end_use"), "plot.png", {backgroundColor: "#FFFFFF", width: 1300, height: 700});
    image_array = [];
    $(".dl-files").children().each(function () {
      tempChk = $(this).children()[0];

      if (tempChk.checked) {
        // console.log(tempChk.value);
        Plotly.toImage(document.getElementsByClassName(tempChk.value)[0], { format: 'png', width: 1300, height: 700 }).then(function (dataUrl) {
      
          $("#hidden-graphs").append("<img src='" + dataUrl + "' class='hidden-graph'>");
          img_png.attr("src", dataUrl);
          image_array[tempChk.value] = img_png;
          console.log(image_array[tempChk.value]);

      
      })
        
        

        //export all csv files
        // var csv = document.getElementsByClassName("csv")[0];
        // var csvData = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        // var csvURL = window.URL.createObjectURL(csvData);
        // var tempLink = document.createElement('a');
        // tempLink.href = csvURL;
        // tempLink.setAttribute('download', 'data.csv');
        // tempLink.click();
      }

      // zip all plotly downloadImages as a zip file and download
   
     

      //     // saveSvgAsPng(document.getElementById(tempChk.value+"1"), tempChk.value +".png", {backgroundColor: "#FFFFFF", width: 1300, height: 700});
      //     var serializer = new XMLSerializer(),
      //     svgString = serializer.serializeToString(document.getElementById(tempChk.value+ "1"));

      //     var svg = new Blob([svgString], {type: "image/svg+xml;charset=utf-8"});
      //     var url = URL.createObjectURL(svg);
      //     var img = new Image();
      //     img.onload = function() {
      //       // draw the svg to a canvas
  
      //       ctx.drawImage(img, 0, 0);
      //       URL.revokeObjectURL(url);
      //       canvas.toBlob(function (blob) { // <-- convert the canvas to a png (in a blob)

      //         var zip = new JSZip();
      //         // zip.file("abc.csv", CSV); 
      //         zip.file(tempChk.value + ".png", blob); // <-- JSZip v3 accepts blob

      //         content = zip.generateAsync({type:"blob"}).then(function (blob) {
      //           saveAs(blob, "result.zip"); // <-- trigger the download
      //         }, function (e) {
      //           console.error(e)
      //         });
      //       }, "image/png");
      //     };
      //     img.src = url; 
      //   } else {
      //     // return document.getElementById("result").innerHTML = "Please select at least one file to download.";
      //     console.log("No files to download.");
    
    });
    console.log(image_array);
     var zip = new JSZip();
    for (var key in image_array){
      console.log(key.slice(0,-7))
      console.log(image_array[key])
      zip.file(key.slice(0,-7)+".png",image_array[key])
    }
    // for (i = 0; i < image_array.length; i++) {
    //   
      
    // }
   
    // img.file("plot.png", imgData, { base64: true });
    zip.generateAsync({ type: "blob" })
      .then(function (content) {
        // see FileSaver.js
        saveAs(content, "example.zip");
      });
  

  });


