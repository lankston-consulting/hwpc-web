downloaddata = document.getElementById('downloaddata');

downloaddata.addEventListener("click", (e) => {
    if ($('#forms')[0].checkValidity()){
      document.getElementById('overlay').classList.toggle("is-hidden");
    }
  });