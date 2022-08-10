var drawConnector = function () {
    var divA = document.querySelector("#calculator-graphic");
    var divB = document.querySelector("#recycled");

    var arrowcurve = document.querySelector("#arrowcurve");
    var posnALeft = {
        x: divA.offsetLeft - 8,
        y: divA.offsetTop  + divA.offsetHeight / 2
    };
    
      var posnBLeft = {
        x: divB.offsetLeft - 8,
        y: divB.offsetTop  + divB.offsetHeight / 2
      };
      var dStrLeft =
          "M" +
          (posnALeft.x      ) + "," + (posnALeft.y) + " " +
          "C" +
          (posnALeft.x - 100) + "," + (posnALeft.y) + " " +
          (posnBLeft.x - 100) + "," + (posnBLeft.y) + " " +
          (posnBLeft.x      ) + "," + (posnBLeft.y);
    arrowcurve.setAttribute("d", dStrLeft);
    
    console.log(arrowcurve)
};


drawConnector();