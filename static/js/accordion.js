var headers = ["H1","H2","H3","H4","H5","H6"]; //We only use h1 and h2

// $(".required-alert").hide();

function toggleAccordion(e,edit_mode=false) {
  if(e.type != undefined){
    var target = e.target,
    name = target.nodeName.toUpperCase();
  }
  else{
    var target = e
    name = target.nodeName.toUpperCase();
  }

if($.inArray(name,headers) > -1) {
  var subItem = $(target).next();
  
  //slideUp all elements (except target) at current depth or greater
  if(edit_mode == false){
  var depth = $(subItem).parents().length;
  var allAtDepth = $(".accordion div").filter(function() {
    if($(this).parents().length >= depth && this !== subItem.get(0)) {
      return true; 
    }
  });
  $(allAtDepth).slideUp("fast");
}
  //slideToggle target content and adjust bottom border if necessary
  subItem.slideToggle("fast",function() {
    $(".accordion :visible:last");
  });
  // $(target).css({"border-bottom-right-radius":"0", "border-bottom-left-radius":"0"});
}
}

$(".acc-h1, .acc-h2").click(function(e) {
  $("#default-mode").prop("checked", true)

  console.log($("#"+e.target.id).offset().top)
    toggleAccordion(e);
    if(e.target.id == "acc-07"){
      toggleAccordion($("#acc-01")[0],true)
      toggleAccordion($("#acc-02")[0],true)
      toggleAccordion($("#acc-04")[0],true)
      toggleAccordion($("#acc-05")[0],true)
      toggleAccordion($("#acc-06")[0], true)
      
      // $(".required-alert").show();
    }
});

$(".acc-h1, .acc-h2").keydown(function (event) {
    if (event.which === 32 || event.which === 13) { //32 is Space and 13 is Enter
        toggleAccordion(event);
    }
});



$(".nextbtn").click(function (e) {
    class_list = $(e.target).attr("class").split(/\s+/)
        id_split = class_list[1].split("-")
        toggleAccordion($("#"+class_list[1])[0])
        toggleAccordion($("#" + id_split[0] + "-0" + (parseInt(id_split[1]) + 1))[0],true)
});

$(".backbtn").click(function (e) {
    class_list = $(e.target).attr("class").split(/\s+/)
    id_split = class_list[1].split("-")
    toggleAccordion($("#"+class_list[1])[0])
    toggleAccordion($("#" + id_split[0] + "-0" + (parseInt(id_split[1]) - 1))[0],true)
});

$("#edit-mode").change(function(e){
  for(i=0;i<$(".acc-h1").length;i++){
    if($(".acc-h1")[i].nextSibling.nextSibling.style.display != "block"){
      toggleAccordion($(".acc-h1")[i],true)
    }
  }
})

$("#default-mode").change(function(e){
  for(i=0;i<$(".acc-h1").length;i++){
    if($(".acc-h1")[i].nextSibling.nextSibling.style.display == "block"){
      toggleAccordion($(".acc-h1")[i],true)
    }
  }
})

$(".edit-mode").keydown(function (event) {
  if (event.which === 32 || event.which === 13) { //32 is Space and 13 is Enter
    $("#edit-mode").prop("checked", true);
    for(i=0;i<$(".acc-h1").length;i++){
      if($(".acc-h1")[i].nextSibling.nextSibling.style.display != "block"){
        toggleAccordion($(".acc-h1")[i],true)
      }
    }
  }
});
$(".default-mode").keydown(function (event) {
  if (event.which === 32 || event.which === 13) { //32 is Space and 13 is Enter
    $("#default-mode").prop("checked", true);
    for(i=0;i<$(".acc-h1").length;i++){
      if($(".acc-h1")[i].nextSibling.nextSibling.style.display == "block"){
        toggleAccordion($(".acc-h1")[i],true)
      }
    }
  }
});
//mbf to ccf toggle
$(document).ready(function () {
  $('input[type="radio"]').click(function() {
      if($(this).attr('id') == 'mbf') {
           $('#mbftoccf-custom-fu').show();           
      }

      else {
           $('#mbftoccf-custom-fu').hide();   
      }
  });
});

$(document).ready(function () {
    $('input[type="radio"]').click(function() {
        if($(this).attr('id') == 'customRatio') {
             $('#custom-file-upload').show();           
        }
        else {
             $('#custom-file-upload').hide();   
        }
    });
});

$("#ccf-label").keydown(function (event) {
  if (event.which === 32 || event.which === 13) {
    $("#ccf").prop("checked", true);
      $('#mbftoccf-custom-fu').hide();           
  }
})

$("#mbf-label").keydown(function (event) {
  if (event.which === 32 || event.which === 13) {
    $("#mbf").prop("checked", true);
      $('#mbftoccf-custom-fu').show();           
  }
})




// trigger upload on space & enter
// = standard button functionality
$('#buttonlabel span[role=button]').bind('keypress keyup', function(e) {
  if(e.which === 32 || e.which === 13){
    e.preventDefault();
    $('.fileupload').click();
  }    
});

// return chosen filename to additional input
$('.fileupload').change(function (e) {
  class_list = $(e.target).attr("class").split(/\s+/)
  id = class_list[1]
  var filename = $('.'+id).val().split('\\').pop();
  $("#"+id).val(filename);
  $("#"+id).attr('placeholder', filename);
  $("#"+id).focus();
  if(class_list[1]=="filename4"){
    $('#regionselection').val("Custom").change()
  }
});

// Set upload file input to null if user clicks on the delete btn

// document.getElementById("myInputFileID").value=null; 
$(".cancel-upload-btn").click(function (e){
  $(e.target)[0].previousElementSibling.previousElementSibling.previousElementSibling.value=null
  $(e.target)[0].previousElementSibling.value = null
  $(e.target)[0].previousElementSibling.placeholder = "no file uploaded"
  $('#regionselection').val("North Central").change()
});

$('#email-address').on('input', function() {
	var input=$(this);
	var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	var is_email=re.test(input.val());
	if(is_email){input.removeClass("invalid").addClass("valid");}
	else{input.removeClass("valid").addClass("invalid");}
});

$('.info-circle').click(function (e){
  $("#modal").css("display", "block")
  $(".close").focus()
  $("#modal-content").html(modal_dict[e.target.id])
})

$(".info-circle").keydown(function (event) {
  console.log(event.target);
  if (event.which === 32 || event.which === 13) { //32 is Space and 13 is Enter
    $("#modal").css("display", "block")
    $(".close").focus()
    $("#modal-content").html(modal_dict[event.target.lastChild.id])
  }
});

$(".close").click(function (e){
  $(".modal").css("display", "none")

});

$(".close").keydown(function (event) {
  if (event.which === 32 || event.which === 13) { //32 is Space and 13 is Enter
    $(".modal").css("display", "none")
    $(".info-circle").focus()
  }
});


// $(".modal").click(function (e){
//   $(".modal").css("display","none")
// });



$('#previewbtn').click(function (e){
  input_harvest = $("[name='yearlyharvestinput']").val()
  if(input_harvest != ""){
    input_harvest = input_harvest.split("\\")
    input_harvest = input_harvest[input_harvest.length-1]
    harvest = "<p class=\"modal-input-data acc-01\">Annual Harvest Data: " + input_harvest + "</p><br>"
  }
  else{
    harvest = "<p class=\"modal-input-data acc-01\">Annual Harvest Data: MISSING REQUIRED DATA</p><br>"
  }

  input_mbf_to_ccf = $("[name='MbfToCcfFilename']").val()
  if(input_mbf_to_ccf != ""){
    input_mbf_to_ccf = input_mbf_to_ccf.split("\\")
    input_mbf_to_ccf = input_mbf_to_ccf[input_mbf_to_ccf.length-1]
    mbf_to_ccf = "<p class=\"modal-input-data acc-01\">MBF to CCF Ratios: " + input_mbf_to_ccf + "</p><br>"
  }
  else{
    mbf_to_ccf = "<p class=\"modal-input-data acc-01\">MBF to CCF Ratios: Using Default</p><br>"
  }

  input_timber_product_ratios = $("[name='yearlytimberproductratios']").val()
  if(input_timber_product_ratios != ""){
    input_timber_product_ratios = input_timber_product_ratios.split("\\")
    input_timber_product_ratios = input_timber_product_ratios[input_timber_product_ratios.length-1]
    timber_product_ratios = "<p class=\"modal-input-data acc-02\">Timber Product Ratios: " + input_timber_product_ratios + "</p><br>"
  }
  else{
    timber_product_ratios = "<p class=\"modal-input-data acc-02\">Timber Product Ratios: Using Default</p><br>"
  }

  region_input = $("[name='regionselection']").val()
  if(region_input != "Custom"){
    // region_input = region_input.split("\\")
    // region_input = region_input[region_input.length-1]
    region = "<p class=\"modal-input-data acc-03\">Primary Products Region Selected: " + region_input + "</p><br>"
  }
  else{
    custom_region_input = $("[name='customregion']").val()
    if(custom_region_input != ""){
      custom_region_input = custom_region_input .split("\\")
      custom_region_input = custom_region_input [custom_region_input.length-1]
      region = "<p class=\"modal-input-data acc-03\">Primary Products Custom Region Selected: "+ custom_region_input + "</p><br>"
    }
    else{
      region = "<p class=\"modal-input-data acc-03\">Primary Products Custom Region Selected: MISSING REQUIRED DATA</p><br>"
    }
  }

  input_end_use_ratios = $("[name='EndUseRatiosFilename']").val()
  if(input_end_use_ratios != ""){
    input_end_use_ratios = input_end_use_ratios.split("\\")
    input_end_use_ratios = input_end_use_ratios[input_end_use_ratios.length-1]
    end_use_ratios = "<p class=\"modal-input-data acc-04\">End Use Ratios: " + input_end_use_ratios + "</p><br>"
  }
  else{
    end_use_ratios = "<p class=\"modal-input-data acc-04\">End Use Ratios: Using Default</p><br>"
  }

  input_discard_dispostions = $("[name='DispositionsFilename']").val()
  if(input_discard_dispostions != ""){
    input_discard_dispostions = input_discard_dispostions.split("\\")
    input_discard_dispostions = input_discard_dispostions[input_discard_dispostions.length-1]
    discard_dispostions = "<p class=\"modal-input-data acc-04\">Discard Dispositions: " + input_discard_dispostions + "</p><br>"
  }
  else{
    discard_dispostions = "<p class=\"modal-input-data acc-04\">Discard Dispositions: Using Default</p><br>"
  }

  input_discard_dispostions_half_lives = $("[name='DispositionHalfLivesFilename']").val()
  if(input_discard_dispostions_half_lives != ""){
    input_discard_dispostions_half_lives = input_discard_dispostions_half_lives.split("\\")
    input_discard_dispostions_half_lives = input_discard_dispostions_half_lives[input_discard_dispostions_half_lives.length-1]
    discard_dispostions_half_lives = "<p class=\"modal-input-data acc-04\">Discard Dispositions Half-lives Ratios: " + input_discard_dispostions_half_lives + "</p><br>"
  }
  else{
    discard_dispostions_half_lives = "<p class=\"modal-input-data acc-04\">Discard Dispositions Half-lives Ratios: Using Default</p><br>"
  }


  input_burned = $("[name='BurnedRatiosFilename']").val()
  if(input_burned != ""){
    input_burned = input_burned.split("\\")
    input_burned = input_burned[input_burned.length-1]
    burned = "<p class=\"modal-input-data acc-04\">Burned Ratios: " + input_burned + "</p><br>"
  }
  else{
    burned = "<p class=\"modal-input-data acc-04\">Burned Ratios: Using Default</p><br>"
  }

  // input_ccf_to_mgc = $("[name='CcfToMgcFilename']").val()
  // if(input_ccf_to_mgc != ""){
  //   input_ccf_to_mgc = input_ccf_to_mgc.split("\\")
  //   input_ccf_to_mgc = input_ccf_to_mgc[input_ccf_to_mgc.length-1]
  //   ccf_to_mgc = "<p class=\"modal-input-data acc-04\">CCF to MGC Ratios: " + input_ccf_to_mgc + "</p><br>"
  // }
  // else{
  //   ccf_to_mgc = "<p class=\"modal-input-data acc-04\">CCF to MGC Ratios: Using Default</p><br>"
  // }

  input_loss_factor = $("[name='lossfactor']").val()
  if(input_loss_factor != ""){
    input_loss_factor = input_loss_factor.split("\\")
    input_loss_factor = input_loss_factor[input_loss_factor.length-1]
    loss_factor = "<p class=\"modal-input-data acc-05\">Loss Factor: " + input_loss_factor + "</p><br>"
  }
  else{
    loss_factor = "<p class=\"modal-input-data acc-05\">Loss Factor: MISSING REQUIRED DATA</p><br>"
  }

  input_iterations = $("[name='iterations']").val()
  if(input_iterations != ""){
    input_iterations = input_iterations.split("\\")
    input_iterations = input_iterations[input_iterations.length-1]
    iterations = "<p class=\"modal-input-data acc-06\">Number of Monte Carlo Iterations: " + input_iterations + "</p><br>"
  }
  else{
    iterations = "<p class=\"modal-input-data acc-06\">Number of Monte Carlo Iterations: MISSING REQUIRED DATA</p><br>"
  }

  input_distribution = $("[name='DistributionDataFilename']").val()
  if(input_distribution != ""){
    input_distribution = input_distribution.split("\\")
    input_distribution = input_distribution[input_distribution.length-1]
    distribution = "<p class=\"modal-input-data acc-04\">Distribution Data: " + input_distribution + "</p><br>"
  }
  else{
    distribution = "<p class=\"modal-input-data acc-04\">Distribution Data: Using Default</p><br>"
  }

  input_email = $("[name='email']").val()
  if(input_email != ""){
    input_email = input_email.split("\\")
    input_email = input_email[input_email.length-1]
    email = "<p class=\"modal-input-data acc-07\">Email: " + input_email + "</p><br>"
  }
  else{
    email = "<p class=\"modal-input-data acc-07\">Email: MISSING REQUIRED DATA</p><br>"
  }

  input_runname = $("[name='runname']").val()
  if(input_runname != ""){
    input_runname = input_runname.split("\\")
    input_runname = input_runname[input_runname.length-1]
    runname = "<p class=\"modal-input-data acc-08\">Run Name: " + input_runname + "</p><br>"
  }
  else{
    runname = "<p class=\"modal-input-data acc-08\">Run Name: MISSING REQUIRED DATA</p><br>"
  }

  
  
  $("#preview-modal").css("display","block")
  $("#preview-modal-content").html(harvest + mbf_to_ccf + timber_product_ratios + region + end_use_ratios + discard_dispostions + discard_dispostions_half_lives + distribution + burned + loss_factor + iterations + email + runname)
  $(".modal-input-data").click(function (e) {
    class_list = $(e.target).attr("class").split(/\s+/)
    $("#preview-modal").css("display","none")
    $("#"+class_list[1]).get(0).scrollIntoView({behavior: "smooth", block: "center"});
    toggleAccordion($("#"+class_list[1])[0])
    if(class_list[1]=="acc-01" || class_list[1] == "acc-05" || class_list[1]=="acc-06" || class_list[1]=="acc-07"){
      toggleAccordion($("#"+class_list[1])[0])
    }
  });
  
})


var modal_dict = {
  modal1 : "A .csv file containing the yearly harvest amount per year in units of ccf (hundred cubic feet).<br />Should be formatted as follows:<br /><table><tr><th>Year,</th><th>ccf</th></tr><tr><th>X</th><th>X</th></tr><tr><th>X</th><th>X</th></tr></table>",
  modal2 : "A .csv file containing the ratios which harvested wood is converted into timber products.<br />Should be formatted as follows:<br /><table><tr><th>TimberProductID,</th><th>Year,</th><th>Ratio</th></tr><tr><th>X</th><th>X</th><th>X</th></tr><tr><th>X</th><th>X</th><th>X</th></tr></table>",
  modal3 : "A .csv file containing the ratios which a region converts timber products into primary products. Either select a defined region in the drop down, or define a custom region by selecting Custom and inputing a .csv file.<br />Should be formatted as follows:<br /><table><tr><th>PrimaryProductID,</th><th>Year,</th><th>Ratio</th></tr><tr><th>X</th><th>X</th><th>X</th></tr><tr><th>X</th><th>X</th><th>X</th></tr></table>",
  modal4 : "A .csv file for each end use, this gives the rate at which material is discarded. Default rate is in half-life but can alsoo use the Chi parameter.",
  modal5: "A .csv file containing the ratios which primary products are converted to end use products.<br />Should be formatted as follows:<br /><table><tr><th>EndUseID,</th><th>Year,</th><th>Ratio</th></tr><tr><th>X</th><th>X</th><th>X</th></tr><tr><th>X</th><th>X</th><th>X</th></tr></table>",
  modal6 : "A .csv file containing the ratios in which products are discarded into their destination dispositions.<br />Should be formatted as follows:<br /><table><tr><th>DiscardTypeID,</th><th>DiscardDestinationID,</th><th>Year,</th><th>DiscardDestinationRatio</th></tr><tr><th>X</th><th>X</th><th>X</th><th>X</th></tr><tr><th>X</th><th>X</th><th>X</th><th>X</th></tr></table>",
  modal7 : "A .csv file containing the half-life decay ratios of the discarded disposition destinations. ",
  modal8 : "A .csv file containing the proportions for burned with energy capture.",
  modal9 : "Enter a number between 0 and 1 of how much wood product end-use loss.",
  modal10 : "Enter a number of Monte Carlo Simulations between 1000 and 5000 runs.<br /> A .csv file containing the distribution parameters.",
  modal11 : "Email is required to send you the zip file and link of simulation once complete.",
  modal12 : "Name of Run to label zip file."
}

$("#getdata").click(function(e){ 
  $(".required-alert").each(function() {
    temp_alert = $(this)
    $(this).siblings().each(function(){ 
      if($(this).is("input") == true){
        if($(this)[0].validity.valid == false && $(this)[0].required == true ){
          temp_alert.show();
        }else if($(this)[0].validity.valid == true && $(this)[0].required == true ){
          temp_alert.hide();
        }
      }
    })   
  });
})

