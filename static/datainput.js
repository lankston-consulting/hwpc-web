// Optional inputs button
options = document.getElementById('options');

options.addEventListener("click", (e) => {
    temp=document.getElementsByClassName("optional");
    for (let i = 0; i < temp.length; i++) {
        temp[i].classList.toggle("is-hidden");
      }
      body_height = document.getElementById("wrapper").scrollHeight + 'px';
      window.parent.postMessage(body_height, "*"); 
});
