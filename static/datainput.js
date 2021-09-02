// Run button
getdata = document.getElementById("getdata");

// Optional inputs button
options = document.getElementById('options');


// Event that processes all available input data into JSON format
getdata.addEventListener("click", (e) => {

    // Variable that pulls the entire form input from the user interface
    const formElement = document.querySelector('form#forms')

    // This code iterates through every input of the form to parse the data, assigning the data with a key (input name) and a value (input data).
    const getFormJSON = (form) => {
      const data = new FormData(form);
      return Array.from(data.keys()).reduce((result, key) => {
        result[key] = data.get(key);
        return result;
      }, {});
    };

    const valid = formElement.reportValidity();
    // This code takes the parsed data and formats it into json form. Empty values can be pushed in order to check for default values later.
    if (valid) {
        const result = getFormJSON(formElement);
        const yearlyharvestinput = [result.yearlyharvestinput].flat().filter((file) => !!file.name);
        const yearlytimberproductratios = [result.yearlytimberproductratios].flat().filter((file) => !!file.name);
        const output = 
            {
            ...result,
            yearlyharvestinput,
            yearlytimberproductratios
            }
        test = "Test"
          $.get("/upload",
            {
                data: JSON.stringify(output),
                dataType: 'json',
                processData: false
            },
            function()
            {
            console.log("done")
            })
          console.log(output);
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
