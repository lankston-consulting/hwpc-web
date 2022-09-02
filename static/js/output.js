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
minDateYear = ""
maxDateYear = ""


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

}

$("#defaultOpen").click(function(e){
    generate_graph(harvest_data,"annual_harvest",true,"Annual Harvest Output",1300,700, "line")
    generate_graph(total_end_use_products, "end_use", false,"Annual Net Change Carbon Stocks", 400, 250, "bar")
    generate_graph(total_end_use_products, "end_use", false, "Total End Use Products", 400, 250, "line")

})
$("#burned").click(function(e){
    generate_graph(burned_wo_energy_capture_emit, "burned_without", true, "Burned Without Energy Capture Emissions", 1300, 700, "line") 
    generate_graph(burned_w_energy_capture_emitted, "burned_with", false,"Burned With Energy Capture Emissions", 400, 250, "line")
    generate_graph(total_fuelwood_carbon_emitted, "total_fuelwood", false,"Total Fuelwood Carbon Emitted", 400, 250, "line")

    
})
$("#swds").click(function(e){
    generate_graph(swds_co2e, "swds", true, "Total Cumulative Carbon Stocks", 1300, 700, "stack") 
    generate_graph(total_dumps_carbon_co2e, "carbon_dumps_co2e", false,"Total Carbon Present in Dumps", 400, 250, "line")
    generate_graph(total_landfills_carbon_co2e, "carbon_landfill_co2e", false, "Total Cumulative Carbon Stocks", 400, 250, "line")
})

$("#emitted").click(function(e){
    generate_graph(total_dumps_carbon_emitted, "total_dumps_carbon_emitted", true, "Total carbon Emitted from Dumps", 1300, 700, "line") 
    generate_graph(total_composted_carbon_emitted, "total_composted_carbon_emitted", false, "Total Carbon Emitted from Compost", 400, 250, "line")
    generate_graph( total_landfills_carbon_emitted, "total_landfills_carbon_emitted", false,"Total Carbon Emitted from Landfills", 400, 250, "line")
})

$("#reused").click(function (e) {
    // generate_graph(swds_co2e, "swds", true, 1300, 700) 
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

generate_graph = function(json_data, graph_class, is_active, title, w, h, graph_type){
    console.log(json_data)
    if (graph_type == "line") {
        if (is_active == false) {
            $("." + graph_class).html("")
            const margin = { top: 30, right: 10, bottom: 30, left: 60 },
                width = w - margin.left - margin.right,
                height = h - margin.top - margin.bottom;
        
            const x = d3.scaleTime().range([0, width]);
            const y = d3.scaleLinear().range([height, 0]);

            const valueline = d3
                .line()
                .x((d) => { return x(d.date); })
                .y((d) => { return y(d.value); })
       
       
            const svg = d3
                .select("div." + graph_class)
                .append("div")
                .classed("svg-graph-container-sm", true) // Container class to make graphs responsive.
                .append("svg")
                .attr("class", graph_class)
                .attr("preserveAspectRatio", "xMinYMid meet")
                .attr(
                    "viewBox",
                    `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
                .classed("svg-content-responsive", true)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
            
            svg
                .append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x));
        
            svg.append("g").attr("class", "y axis").call(d3.axisLeft(y));
    

            const data = d3.csvParse(json_data,
                function (d) {
                    // d3.selectAll("path.area").remove();
                    // d3.selectAll("path.line").remove();
                    // d3.selectAll(".title").remove();
                    return { date: d3.timeParse("%Y")(d[Object.keys(d)[0]]), value: d[Object.keys(d)[1]] }
                })
            // console.log(data)
            // console.log("min",data[0].date)
            // console.log("max",data[data.length-1].date)
            minDateYear = data[0].date.getFullYear();
            maxDateYear = data[data.length - 1].date.getFullYear();

            x.domain(
                d3.extent(data, (d) => { return d.date; })
            );
            y.domain([
                0,
                d3.max(data, (d) => { return +d.value; })
            ]);

            svg
                .select(".x.axis")
                .transition()
                .duration(750)
                .call(d3.axisBottom(x));
            svg
                .select(".y.axis")
                .transition()
                .duration(750)
                .call(d3.axisLeft(y));
        
            const linePath = svg
                .append("path")
                .datum(data)
                .attr("class", "line")
                .attr("fill", "none")
                .attr("stroke", "steelblue")
                .attr("stroke-width", 1.5)
                .attr("d", valueline)
            const pathLength = linePath.node().getTotalLength();
            linePath
                .attr("stroke-dasharray", pathLength)
                .attr("stroke-dashoffset", pathLength)
                .attr("stroke-width", 0)
                .transition()
                .duration(1000)
                .attr("stroke-dashoffset", 0)
                .attr("stroke-width", 2);

            svg
                .append("text")
                .attr("class", "title")
                .attr("x", width / 2)
                .attr("y", 0 - margin.top / 2)
                .attr("text-anchor", "middle")
                .text(title);
        
            // // Now I can use this dataset:
            // // Add X axis --> it is a date format
            // const x = d3.scaleTime()
            //     .domain(d3.extent(data, function (d) { return d.date; }))
            //     .range([0, width]);
            // svg.append("g")
            //     .attr("transform", `translate(0, ${height})`)
            //     .call(d3.axisBottom(x));
        
            // // Add Y axis
            // const y = d3.scaleLinear()
            //     .domain([0, d3.max(data, function (d) { return +d.value; })])
            //     .range([height, 0]);
            // svg.append("g")
            //     .call(d3.axisLeft(y));
        
            // // Add the line
            // svg.append("path")
            //     .datum(data)
            //     .attr("fill", "none")
            //     .attr("stroke", "steelblue")
            //     .attr("stroke-width", 1.5)
            //     .attr("d", d3.line()
            //         .x(function (d) { return x(d.date) })
            //         .y(function (d) { return y(d.value) })
            //     )
        
            // svg.append("text")
            //     .attr("class", "x label")
            //     .attr("text-anchor", "center")
            //     .attr("x", width / 2)
            //     .attr("y", height + 20)
            //     .text("Years");
            
            // svg.append("text")
            //     .attr("class", "y label")
            //     .attr("text-anchor", "center")
            //     .attr("y", 6)
            //     .attr("dy", ".75em")
            //     .attr("transform", "rotate(-90)")
            //     .text("Co2e");
        }
        else {
            $("." + graph_class).html("")
        
            const margin = { top: 40, right: 80, bottom: 60, left: 70 },
                width = w - margin.left - margin.right,
                height = h - margin.top - margin.bottom;
                        
            const x = d3.scaleTime().range([0, width]);
            const y = d3.scaleLinear().range([height, 0]);

            // const area = d3
            // .area()
            // .x((d) => { return x(d.date); })
            // .y0(height)
            // .y1((d) => { return y(d.value); })


            const valueline = d3
                .line()
                .x((d) => { return x(d.date); })
                .y((d) => { return y(d.value); })
       
       
            const svg = d3
                .select("div." + graph_class)
                .append("div")
                .classed("svg-graph-container", true) // Container class to make graphs responsive.
                .append("svg")
                .attr("class", graph_class)
                .attr("preserveAspectRatio", "xMinYMid meet")
                .attr(
                    "viewBox",
                    `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
                .classed("svg-content-responsive", true)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
            
            svg
                .append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x));
        
            svg.append("g").attr("class", "y axis").call(d3.axisLeft(y));

            //x axis title
            svg
                .append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", 0 - margin.left)
                .attr("x", 0 - height / 2)
                .attr("dy", "1em")
                .style("text-anchor", "middle")
                .text("Carbon Emissions (CO2e)");
    
            //y axis title
            svg
                .append("text")
                .attr("y", height + 30)
                .attr("x", width / 2)
                .attr("dy", "1em")
                .style("text-anchor", "middle")
                .text("Years");

            const data = d3.csvParse(json_data,
                function (d) {
                    d3.selectAll("path.area").remove();
                    d3.selectAll("path.line").remove();
                    d3.selectAll(".title").remove();
                    return { date: d3.timeParse("%Y")(d[Object.keys(d)[0]]), value: d[Object.keys(d)[1]] }
                })

            // .curve(d3.curveCardinal);
            
            //     console.log(Object.keys(d)[0])
                       
            // console.log(data)
            // console.log("min",data[0].date)
            // console.log("max",data[data.length-1].date)
                
            // Now I can use this dataset:
            // Add X axis --> it is a date format
        
            // const x = d3.scaleTime()
            //     .domain(d3.extent(data, function(d) { return d.date; }))
            //     .range([ 0, width ]);
            // svg.append("g")
            //     .attr("transform", `translate(0, ${height})`)
            //     .call(d3.axisBottom(x));
        
            // // Add Y axis
            // const y = d3.scaleLinear()
            //     .domain([0, d3.max(data, function(d) { return +d.value; })])
            //     .range([ height, 0 ]);
            // svg.append("g")
            // .call(d3.axisLeft(y));
                
            x.domain(
                d3.extent(data, (d) => { return d.date; })
            );
            y.domain([
                0,
                d3.max(data, (d) => { return +d.value; })
            ]);

            svg
                .select(".x.axis")
                .transition()
                .duration(750)
                .call(d3.axisBottom(x));
            svg
                .select(".y.axis")
                .transition()
                .duration(750)
                .call(d3.axisLeft(y));
            
            // const areaPath = svg
            //     .append("path")
            //     .datum(data)
            //     .attr("class", "area")
            //     .attr("d", area)
            //     .attr("transform", "translate(0,300)")
            //     .transition()
            //     .duration(1000)
            //     .attr("transform", "translate(0,0)");
            
            // Add the line
            const linePath = svg
                .append("path")
                .datum(data)
                .attr("class", "line")
                .attr("fill", "none")
                .attr("stroke", "steelblue")
                .attr("stroke-width", 1.5)
                .attr("d", valueline)
            const pathLength = linePath.node().getTotalLength();
            linePath
                .attr("stroke-dasharray", pathLength)
                .attr("stroke-dashoffset", pathLength)
                .attr("stroke-width", 0)
                .transition()
                .duration(1000)
                .attr("stroke-dashoffset", 0)
                .attr("stroke-width", 3);
            //title
            svg
                .append("text")
                .attr("class", "title")
                .attr("x", width / 2)
                .attr("y", 0 - margin.top / 2)
                .attr("text-anchor", "middle")
                .text(title);
            
        
            // svg.append("text")
            //     .attr("class", "x label")
            //     .attr("text-anchor", "center")
            //     .attr("x", width/2)
            //     .attr("y", height +20)
            //     .text("Years");
            
            // svg.append("text")
            //     .attr("class", "y label")
            //     .attr("text-anchor", "center")
            //     .attr("y", 6)
            //     .attr("dy", ".75em")
            //     .attr("transform", "rotate(-90)")
            // .text("Co2e");
            // const legend = chart.append("g");
            // legend.append("text")
            //     .text("Legend")
            //     .attr("x", margin.left / 2)
            //     .attr("y", margin.top)
            //     .attr("class", "legendTitle");
                    
            const focus = svg
                .append("g")
                .attr("class", "focus")
                .style("display", "none");

            // append the x line
            focus
                .append("line")
                .attr("class", "x")
                .style("stroke-dasharray", "3,3")
                .style("opacity", 0.5)
                .attr("y1", 0)
                .attr("y2", height);

            // append the y line
            focus
                .append("line")
                .attr("class", "y")
                .style("stroke-dasharray", "3,3")
                .style("opacity", 0.5)
                .attr("x1", width)
                .attr("x2", width);

            // append the circle at the intersection
            focus
                .append("circle")
                .attr("class", "y")
                .style("fill", "none")
                .attr("r", 4); // radius

            // place the value at the intersection
            focus.append("text").attr("class", "y1").attr("dx", 8).attr("dy", "-.3em");
            focus.append("text").attr("class", "y2").attr("dx", 8).attr("dy", "-.3em");

            // place the date at the intersection
            focus.append("text").attr("class", "y3").attr("dx", 8).attr("dy", "1em");
            focus.append("text").attr("class", "y4").attr("dx", 8).attr("dy", "1em");

                        
            function mouseMove(event) {
                // console.log(event, "hello");

                const bisect = d3.bisector((d) => d.date).left,
                    x0 = x.invert(d3.pointer(event, this)[0]),
                    i = bisect(data, x0, 1),
                    d0 = data[i - 1],
                    d1 = data[i],
                    d = x0 - d0.date > d1.date - x0 ? d1 : d0;

                focus
                    .select("circle.y")
                    .attr("transform", "translate(" + x(d.date) + "," + y(d.value) + ")");

                focus
                    .select("text.y1")
                    .attr("transform", "translate(" + x(d.date) + "," + y(d.value) + ")")
                    .text(d.value);

                focus
                    .select("text.y2")
                    .attr("transform", "translate(" + x(d.date) + "," + y(d.value) + ")")
                    .text(d.value);

                focus
                    .select("text.y3")
                    .attr("transform", "translate(" + x(d.date) + "," + y(d.value) + ")")
                    .text(d.date);

                focus
                    .select("text.y4")
                    .attr("transform", "translate(" + x(d.date) + "," + y(d.value) + ")")
                    .text(d.date);

                focus
                    .select(".x")
                    .attr("transform", "translate(" + x(d.date) + "," + y(d.value) + ")")
                    .attr("y2", height - y(d.value));

                focus
                    .select(".y")
                    .attr("transform", "translate(" + width * -1 + "," + y(d.value) + ")")
                    .attr("x2", width + width);
            }
            svg
                .append("rect")
                .attr("width", width)
                .attr("height", height)
                .style("fill", "none")
                .style("pointer-events", "all")
                .on("mouseover", () => {
                    focus.style("display", null);
                })
                .on("mouseout", () => {
                    focus.style("display", "none");
                })
                .on("touchmove mousemove", mouseMove);
    
        }
    } else if (graph_type == "stack") {
        // const margin = {top: 30, right: 60, bottom: 30, left: 60},
        // width = w - margin.left - margin.right,
        //     height = h - margin.top - margin.bottom;
        console.log("stacked Graph")
        

    } else {
        console.log("bar graph")
    }
        
    }





function swapElements(el1, el2) {
    let prev1 = el1.previousSibling;
    let prev2 = el2.previousSibling;
    first_graph = el1.firstChild;
    first_graph.setAttribute("width","1300");
    first_graph.setAttribute("height","700");
    second_graph = el1.firstChild;
    second_graph.setAttribute("width","400");
    second_graph.setAttribute("height","200");
    prev1.after(el2);
    prev2.after(el1);
}

$(document).ready(function () {
    $("#singleYear").attr({
        "min": minDateYear,
        "max": maxDateYear,
        "value": minDateYear
    })

    $("#startYear").attr({
        "min": minDateYear,
        "max": maxDateYear,
        "value": minDateYear
    })

    $("#endYear").attr({
        "min": minDateYear,
        "max": maxDateYear,
        "value": maxDateYear
    })
})

// Harvest Years Controls

$(function () {
    $("#blk-"+$("[name=harvestYears]:checked").val()).show();
    $("[name=harvestYears]").click(function(){
            $('.toHide').hide();
            $("#yearInput-"+$(this).val()).show('fast');
    });
});

