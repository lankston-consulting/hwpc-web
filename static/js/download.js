// function download_files() {
//   //see which checkboxes are checked

//   //if any checkbox is checked then download files
//   //if not then do nothing and return a message

//   var chk1 = document.getElementById("annual_harvests_output_chk");
//   var chk2 = document.getElementById("end_use_chk");
//   var chk3 = document.getElementById("annual_net_change_carbon_stocks_chk");
//   var chk4 = document.getElementById("burned_wo_energy_capture_emitted_chk");
//   var chk5 = document.getElementById("burned_w_energy_capture_emitted_chk");
//   var chk6 = document.getElementById("total_fuelwood_carbon_emitted_chk");
//   var chk7 = document.getElementById("total_cumulative_carbon_stocks_co2e_chk");
//   var chk8 = document.getElementById("total_dumps_carbon_co2e_chk");
//   var chk9 = document.getElementById("total_landfills_carbon_emitted_chk");
//   var chk10 = document.getElementById("total_dumps_carbon_emitted_chk");
//   var chk11 = document.getElementById("total_composted_carbon_emitted_chk");
//   var chk12 = document.getElementById("total_landfills_carbon_emitted_chk");

//   var filesChecked = '';

//   if (chk1.checked == true) {
//     chkVal1 = chk1.value;
//     console.log(chkVal1);
//   } else if (chk1.checked == true) {
//     chkVal2

//   }
  
//   else {
//     return document.getElementById("result").innerHTML = "Please select at least one file to download.";
//   }


//     if (document.getElementById('download_files').checked) {
//         document.getElementById('download_files_form').submit();
//   }
  

// }





d3.select("#download")
.on('click', function(){
  // console.log(document.getElementById("end_use"));
  //   saveSvgAsPng(document.getElementById("end_use"), "plot.png", {backgroundColor: "#FFFFFF", width: 1300, height: 700});

  $(".dl-files").children().each(function () {
    tempChk = $(this).children()[0];
    console.log(tempChk);
    if(tempChk.checked) {
      console.log(tempChk.value);
      saveSvgAsPng(document.getElementById(tempChk.value+"1"), tempChk.value +".png", {backgroundColor: "#FFFFFF", width: 1300, height: 700});
    } else {
      // return document.getElementById("result").innerHTML = "Please select at least one file to download.";
      console.log("No files to download.");
    }
  })
  
})

