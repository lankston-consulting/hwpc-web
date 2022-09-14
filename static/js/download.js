// function download_files() {
//   //see which checkboxes are checked

//   //if any checkbox is checked then download files
//   //if not then do nothing and return a message
var canvas = document.createElement("canvas");
canvas.width = 1000;
canvas.height = 1000;
var ctx = canvas.getContext("2d");

d3.select("#download")
.on('click', function(){
  // console.log(document.getElementById("end_use"));
  //   saveSvgAsPng(document.getElementById("end_use"), "plot.png", {backgroundColor: "#FFFFFF", width: 1300, height: 700});

  $(".dl-files").children().each(function () {
    tempChk = $(this).children()[0];
    console.log(tempChk);
    if(tempChk.checked) {
      console.log(tempChk.value);
      // saveSvgAsPng(document.getElementById(tempChk.value+"1"), tempChk.value +".png", {backgroundColor: "#FFFFFF", width: 1300, height: 700});
      var serializer = new XMLSerializer(),
      svgString = serializer.serializeToString(document.getElementById(tempChk.value+ "1"));

      var svg = new Blob([svgString], {type: "image/svg+xml;charset=utf-8"});
      var url = URL.createObjectURL(svg);
      var img = new Image();
      img.onload = function() {
        // draw the svg to a canvas
  
        ctx.drawImage(img, 0, 0);
        URL.revokeObjectURL(url);
        canvas.toBlob(function (blob) { // <-- convert the canvas to a png (in a blob)

          var zip = new JSZip();
          // zip.file("abc.csv", CSV); 
          zip.file(tempChk.value + ".png", blob); // <-- JSZip v3 accepts blob

          content = zip.generateAsync({type:"blob"}).then(function (blob) {
            saveAs(blob, "result.zip"); // <-- trigger the download
          }, function (e) {
            console.error(e)
          });
        }, "image/png");
      };
      img.src = url; 
    } else {
      // return document.getElementById("result").innerHTML = "Please select at least one file to download.";
      console.log("No files to download.");
    }
  })
  
})

