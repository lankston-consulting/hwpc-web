// Run button
getdata = document.getElementById("getdata");

// Optional inputs button
options = document.getElementById('options');

customregion = document.getElementById('customregion');
regionselection = document.getElementById('regionselection');
customfileinput = document.getElementById('customfileinput');

customregion.addEventListener('click', (e) => {
  regionselection.value="";
  customfileinput.setAttribute('required','true');

});

customfileinput.addEventListener('click', (e) => {
  regionselection.value="";
  customregion.setAttribute('required','true');

});

getdata.addEventListener("click", (e) => {
  if ($('#forms')[0].checkValidity()){
    document.getElementById('overlay').classList.toggle("is-hidden");
  }
});

options.addEventListener("click", (e) => {
    temp=document.getElementsByClassName("optional");
    for (let i = 0; i < temp.length; i++) {
        temp[i].classList.toggle("is-hidden");
      }
      body_height = document.getElementById("wrapper").scrollHeight + 'px';
      window.parent.postMessage(body_height, "*"); 
});


