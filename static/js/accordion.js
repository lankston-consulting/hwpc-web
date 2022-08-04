var headers = ["H1","H2","H3","H4","H5","H6"];


function toggleAccordion(e) {
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
  var depth = $(subItem).parents().length;
  var allAtDepth = $(".accordion div").filter(function() {
    if($(this).parents().length >= depth && this !== subItem.get(0)) {
      return true; 
    }
  });
  $(allAtDepth).slideUp("fast");
  
  //slideToggle target content and adjust bottom border if necessary
  subItem.slideToggle("fast",function() {
      $(".accordion :visible:last").css("border-radius","0 0 10px 10px");
  });
  $(target).css({"border-bottom-right-radius":"0", "border-bottom-left-radius":"0"});
}
}

$(".accordion").click(function(e) {
  // console.log(e.target)
    toggleAccordion(e);
});

$(".accordion").keydown(function (event) {
    if (event.which === 32 || event.which === 13) { //32 is Space and 13 is Enter
        toggleAccordion(event);
    }
});

$(".nextbtn").click(function (e) {
    class_list = $(e.target).attr("class").split(/\s+/)
        id_split = class_list[1].split("-")
        toggleAccordion($("#"+class_list[1])[0])
        toggleAccordion($("#" + id_split[0] + "-0" + (parseInt(id_split[1]) + 1))[0])
});

$(".backbtn").click(function (e) {
    class_list = $(e.target).attr("class").split(/\s+/)
    id_split = class_list[1].split("-")
    toggleAccordion($("#"+class_list[1])[0])
    toggleAccordion($("#" + id_split[0] + "-0" + (parseInt(id_split[1]) - 1))[0])
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
  console.log(id)
  var filename = $('.'+id).val().split('\\').pop();
  $("#"+id).val(filename);
  $("#"+id).attr('placeholder', filename);
  $("#"+id).focus();
});

