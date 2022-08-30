output={}
total_landfills_carbon_co2e = ""
total_landfills_carbon_mgc = ""
total_landfills_carbon_emitted = ""
annual_harvests_output = ""
products_in_use_mgc = ""
burned_wo_energy_capture_emit = ""
total_in_use = ""
total_dumps_carbon_co2e = ""
total_dumps_carbon_emitted = ""
total_dumps_carbon_mgc = ""
products_in_use_co2e = ""
swds_mgc = ""
swds_co2e = ""
total_end_use_products = ""
total_fuelwood_carbon_emitted = ""
harvest_data = ""
total_composted_carbon_emitted = ""
burned_w_energy_capture_emitted = ""


output.initialize = function(input_json) {
    data_json=input_json;
    data_json = data_json.replace(/\n/g, '\\n')
    final_json = JSON.parse(data_json)

    total_landfills_carbon_co2e = final_json.total_landfills_carbon_co2e
    total_landfills_carbon_mgc = final_json.total_landfills_carbon_mgc
    total_landfills_carbon_emitted = final_json.total_landfills_carbon_emitted
    annual_harvests_output = final_json.annual_harvests_output
    products_in_use_mgc = final_json.products_in_use_mgc
    burned_wo_energy_capture_emit = final_json.burned_wo_energy_capture_emit
    total_in_use = final_json.total_in_use
    total_dumps_carbon_co2e = final_json.total_dumps_carbon_co2e
    total_dumps_carbon_emitted = final_json.total_dumps_carbon_emitted
    total_dumps_carbon_mgc = final_json.total_dumps_carbon_mgc
    products_in_use_co2e = final_json.products_in_use_co2e
    swds_mgc = final_json.swds_mgc
    swds_co2e = final_json.swds_co2e
    total_end_use_products = final_json.total_end_use_products
    total_fuelwood_carbon_emitted = final_json.total_fuelwood_carbon_emitted
    harvest_data = final_json.harvest_data
    total_composted_carbon_emitted = final_json.total_composted_carbon_emitted
    burned_w_energy_capture_emitted = final_json.burned_w_energy_capture_emitted


    generate_graph(harvest_data,"defaultOpen",true,1300,800)
    generate_graph(total_end_use_products,"end_use",false,400,300)  
    
}

$("#defaultOpen").click(function(e){
    generate_graph(harvest_data,"defaultOpen",true,1300,800)
    generate_graph(total_end_use_products,"end_use",false,400,300)
})
$("#burned").click(function(e){
    generate_graph(burned_wo_energy_capture_emit,"burned",true,1300,800) 
})
$("#swds").click(function(e){
    generate_graph(swds_co2e,"swds",true,1300,800) 
})

$(".graph").click(function(e){
    if (e.target.classList.contains("active-graph") == false){
        this_graph = e.target
        active_graph = $(".active-graph")[0]
        active_graph.classList.remove("active-graph")
        this_graph.classList.add("active-graph")
        swapElements(this_graph,active_graph)

    }
    
})

generate_graph = function(json_data, graph_class, is_active=false, w, h){
    console.log(json_data)
    if(is_active == false){
        $("."+graph_class).html("")
        const margin = {top: 30, right: 60, bottom: 30, left: 60},
        width = w - margin.left - margin.right,
        height = h - margin.top - margin.bottom;
        const svg = d3.select("."+graph_class)
        .append("svg")
        .attr("class",graph_class)
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .attr("pointer-events", "none")
        .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);
        
        const data = d3.csvParse(json_data,
            function(d){
                console.log(Object.keys(d)[0])
                    return { date : d3.timeParse("%Y")(d[Object.keys(d)[0]]), value : d[Object.keys(d)[1]]}
                    })
            console.log(data)
            console.log("min",data[0].date)
            console.log("max",data[data.length-1].date)
                // Now I can use this dataset:
            // Add X axis --> it is a date format
            const x = d3.scaleTime()
                .domain(d3.extent(data, function(d) { return d.date; }))
                .range([ 0, width ]);
            svg.append("g")
                .attr("transform", `translate(0, ${height})`)
                .call(d3.axisBottom(x));
        
            // Add Y axis
            const y = d3.scaleLinear()
                .domain([0, d3.max(data, function(d) { return +d.value; })])
                .range([ height, 0 ]);
            svg.append("g")
                .call(d3.axisLeft(y));
        
            // Add the line
            svg.append("path")
                .datum(data)
                .attr("fill", "none")
                .attr("stroke", "steelblue")
                .attr("stroke-width", 1.5)
                .attr("d", d3.line()
                .x(function(d) { return x(d.date) })
                .y(function(d) { return y(d.value) })
                )
        
            svg.append("text")
                .attr("class", "x label")
                .attr("text-anchor", "center")
                .attr("x", width/2)
                .attr("y", height +20)
                .text("Years");
            
            svg.append("text")
                .attr("class", "y label")
                .attr("text-anchor", "center")
                .attr("y", 6)
                .attr("dy", ".75em")
                .attr("transform", "rotate(-90)")
                .text("Co2e");
    }
    else{
        $("."+graph_class).html("")
        const margin = {top: 30, right: 60, bottom: 30, left: 60},
        width = w - margin.left - margin.right,
        height = h - margin.top - margin.bottom;
        const  svg = d3.select("."+graph_class)
        .append("svg")
        .attr("class",graph_class)
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .attr("pointer-events", "none")
        .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        const data = d3.csvParse(json_data,
            function(d){
                console.log(Object.keys(d)[0])
                    return { date : d3.timeParse("%Y")(d[Object.keys(d)[0]]), value : d[Object.keys(d)[1]]}
                    })
            console.log(data)
            console.log("min",data[0].date)
            console.log("max",data[data.length-1].date)
                // Now I can use this dataset:
            // Add X axis --> it is a date format
            const x = d3.scaleTime()
                .domain(d3.extent(data, function(d) { return d.date; }))
                .range([ 0, width ]);
            svg.append("g")
                .attr("transform", `translate(0, ${height})`)
                .call(d3.axisBottom(x));
        
            // Add Y axis
            const y = d3.scaleLinear()
                .domain([0, d3.max(data, function(d) { return +d.value; })])
                .range([ height, 0 ]);
            svg.append("g")
                .call(d3.axisLeft(y));
        
            // Add the line
            svg.append("path")
                .datum(data)
                .attr("fill", "none")
                .attr("stroke", "steelblue")
                .attr("stroke-width", 1.5)
                .attr("d", d3.line()
                .x(function(d) { return x(d.date) })
                .y(function(d) { return y(d.value) })
                )
        
            svg.append("text")
                .attr("class", "x label")
                .attr("text-anchor", "center")
                .attr("x", width/2)
                .attr("y", height +20)
                .text("Years");
            
            svg.append("text")
                .attr("class", "y label")
                .attr("text-anchor", "center")
                .attr("y", 6)
                .attr("dy", ".75em")
                .attr("transform", "rotate(-90)")
                .text("Co2e");
    }
}

function swapElements(el1, el2) {
    let prev1 = el1.previousSibling;
    let prev2 = el2.previousSibling;
    first_graph = el1.firstChild;
    first_graph.setAttribute("width","1300");
    first_graph.setAttribute("height","800");
    second_graph = el1.firstChild;
    second_graph.setAttribute("width","400");
    second_graph.setAttribute("height","300");
    prev1.after(el2);
    prev2.after(el1);
}