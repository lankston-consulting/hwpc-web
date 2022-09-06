output = {}
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
    data_dict = []
    title_dict = []
    graph_type_dict = []

    data_dict["total_landfills_carbon_co2e"] = final_json.total_landfills_carbon_co2e
    title_dict["total_landfills_carbon_co2e"] = "Total Landfills Carbon"
    graph_type_dict["total_landfills_carbon_co2e"] = "line"
    data_dict["total_landfills_carbon_mgc"] = final_json.total_landfills_carbon_mgc
    title_dict["total_landfills_carbon_mgc"] = "Total Landfills Carbon"
    graph_type_dict["total_landfills_carbon_mgc"] = "line"
    data_dict["total_landfills_carbon_emitted"] = final_json.total_landfills_carbon_emitted
    title_dict["total_landfills_carbon_emitted"] = "Total Landfills Carbon Emitted"
    graph_type_dict["total_landfills_carbon_emitted"] = "line"
    data_dict["annual_harvests_output"] = final_json.annual_harvests_output
    title_dict["annual_harvests_output"] = "Total Annual Harvest"
    graph_type_dict["annual_harvests_output"] = "line"
    data_dict["products_in_use_mgc"] = final_json.products_in_use_mgc
    title_dict["products_in_use_mgc"] = "Total Products in Use"
    graph_type_dict["products_in_use_mgc"] = "line"
    data_dict["burned_wo_energy_capture_emit"] = final_json.burned_wo_energy_capture_emit
    title_dict["burned_wo_energy_capture_emit"] = "Total Burned Carbon Emitted Without Energy Capture"
    graph_type_dict["burned_wo_energy_capture_emit"] = "line"
    data_dict["total_in_use"] = final_json.total_in_use
    title_dict["total_in_use"] = "Total Carbon in Use"
    graph_type_dict["total_in_use"] = "line"
    data_dict["total_dumps_carbon_co2e"] = final_json.total_dumps_carbon_co2e
    title_dict["total_dumps_carbon_co2e"] = "Total Carbon in Dumps"
    graph_type_dict["total_dumps_carbon_co2e"] = "line"
    data_dict["total_dumps_carbon_emitted"] = final_json.total_dumps_carbon_emitted
    title_dict["total_dumps_carbon_emitted"] = "Total Carbon in Dumps Emitted"
    graph_type_dict["total_dumps_carbon_emitted"] = "line"
    data_dict["total_dumps_carbon_mgc"] = final_json.total_dumps_carbon_mgc
    title_dict["total_dumps_carbon_mgc"] = "Total Carbon in Dumps"
    graph_type_dict["total_dumps_carbon_mgc"] = "line"
    data_dict["products_in_use_co2e"] = final_json.products_in_use_co2e
    title_dict["products_in_use_co2e"] = "Total Products in Use"
    graph_type_dict["products_in_use_co2e"] = "line"
    data_dict["swds_mgc"] = final_json.swds_mgc
    title_dict["swds_mgc"] = "Total SWDS"
    graph_type_dict["swds_mgc"] = "line"
    data_dict["swds_co2e"] = final_json.swds_co2e
    title_dict["swds_co2e"] = "Total SWDS"
    graph_type_dict["swds_co2e"] = "line"
    data_dict["end_use"] = final_json.total_end_use_products
    title_dict["end_use"] = "Total End Use Products"
    graph_type_dict["end_use"] = "line"
    data_dict["total_fuelwood_carbon_emitted"] = final_json.total_fuelwood_carbon_emitted
    title_dict["total_fuelwood_carbon_emitted"] = "Total Emitted Fuelwood Carbon"
    graph_type_dict["total_fuelwood_carbon_emitted"] = "line"
    data_dict["harvest_data"] = final_json.harvest_data
    title_dict["harvest_data"] = "Total Harvest"
    graph_type_dict["harvest_data"] = "line"
    data_dict["total_composted_carbon_emitted"] = final_json.total_composted_carbon_emitted
    title_dict["total_composted_carbon_emitted"] = "Total Carbon in Compost Emitted"
    graph_type_dict["total_composted_carbon_emitted"] = "line"
    data_dict["burned_w_energy_capture_emitted"] = final_json.burned_w_energy_capture_emitted
    title_dict["burned_w_energy_capture_emitted"] = "Total Carbon Burned With Energy Capture"
    graph_type_dict["burned_w_energy_capture_emitted"] = "line"
    data_dict["total_cumulative_carbon_stocks_mgc"] = final_json.total_cumulative_carbon_stocks_mgc
    title_dict["total_cumulative_carbon_stocks_mgc"] = "Total Cumulative Carbon Stocks"
    graph_type_dict["total_cumulative_carbon_stocks_mgc"] = "stack"
    data_dict["total_cumulative_carbon_stocks_co2e"] = final_json.total_cumulative_carbon_stocks_co2e
    title_dict["total_cumulative_carbon_stocks_co2e"] = "Total Cumulative Carbon Stocks"
    graph_type_dict["total_cumulative_carbon_stocks_co2e"] = "stack"
    

   
    // var total_cumulative_carbon_stocks = [];
    // // var headers = ["Year", "swds", "products_in_use_co2e"].join(",");
    // // console.log(swds_co2e)

    // d3.csvParse(swds_co2e, function (data2) {
    //     d3.csvParse(products_in_use_co2e, function (data) {
    //         for (var i = 0; i < data.length; i++) {
    //             total_cumulative_carbon_stocks.push({
    //                 Years: data[i].Year,
    //                 swds: data[i].SWDS_present_co2e,
    //                 products_in_use: data2[i].products_in_use_co2e
    //             });
    //         }
    //         console.log(total_cumulative_carbon_stocks);
    //     })
    // })
}

$("#defaultOpen").click(function (e) {
    if (document.getElementsByClassName("annual_harvests_output")[0].classList.contains("active-graph") == true) {
        generate_graph(data_dict["annual_harvests_output"],"annual_harvests_output",true,title_dict["annual_harvests_output"],1300 , 700, graph_type_dict["annual_harvests_output"])
        // generate_graph(data_dict["end_use"], "end_use", false,title_dict["end_use"], 400, 250, graph_type_dict["end_use"])
        generate_graph(data_dict["end_use"], "end_use", false, title_dict["end_use"], 400, 250, graph_type_dict["end_use"])
    }
    if (document.getElementsByClassName("end_use")[0].classList.contains("active-graph") == true) {
        
    // generate_graph(data_dict["end_use"], "end_use", false,title_dict["end_use"], 400, 250, graph_type_dict["end_use"])
        generate_graph(data_dict["end_use"], "end_use", true, title_dict["end_use"], 1300, 700, graph_type_dict["end_use"])
        generate_graph(data_dict["annual_harvests_output"],"annual_harvests_output",false ,title_dict["annual_harvests_output"], 400, 250, graph_type_dict["annual_harvests_output"])
        
    }
    

    
})
$("#burned").click(function(e){
    generate_graph(data_dict["burned_wo_energy_capture_emit"], "burned_wo_energy_capture_emit", true, title_dict["burned_wo_energy_capture_emit"], 1300, 700, graph_type_dict["burned_wo_energy_capture_emit"]) 
    generate_graph(data_dict["burned_w_energy_capture_emit"], "burned_w_energy_capture_emit", false, title_dict["burned_w_energy_capture_emit"], 400, 250, graph_type_dict["burned_w_energy_capture_emit"])
    generate_graph(data_dict["total_fuelwood_carbon_emitted"], "total_fuelwood_carbon_emitted", false,title_dict["total_fuelwood_carbon_emitted"], 400, 250, graph_type_dict["total_fuelwood_carbon_emitted"])

    
})
$("#swds").click(function(e){
    generate_graph(data_dict["total_cumulative_carbon_stocks_mgc"], "total_cumulative_carbon_stocks_mgc", true, title_dict["total_cumulative_carbon_stocks_mgc"], 1300, 700, graph_type_dict["total_cumulative_carbon_stocks_mgc"]) 
    generate_graph(data_dict["total_dumps_carbon_co2e"], "total_carbon_dumps_co2e", false, title_dict["total_dumps_carbon_co2e"], 400, 250, graph_type_dict["total_dumps_carbon_co2e"])
    generate_graph(data_dict["total_landfills_carbon_co2e"], "total_carbon_landfill_co2e", false, title_dict["total_landfills_carbon_co2e"], 400, 250, graph_type_dict["total_landfills_carbon_co2e"])
})

$("#emitted").click(function(e){
    generate_graph(data_dict["total_dumps_carbon_emitted"], "total_dumps_carbon_emitted", true, title_dict["total_dumps_carbon_emitted"], 1300, 700, graph_type_dict["total_dumps_carbon_emitted"]) 
    generate_graph(data_dict["total_composted_carbon_emitted"], "total_composted_carbon_emitted", false, title_dict["total_composted_carbon_emitted"], 400, 250, graph_type_dict["total_composted_carbon_emitted"])
    generate_graph(data_dict["total_landfills_carbon_emitted"], "total_landfills_carbon_emitted", false,title_dict["total_landfills_carbon_emitted"], 400, 250, graph_type_dict["total_landfills_carbon_emitted"])
})

$("#reused").click(function (e) {
    // generate_graph(swds_co2e, "swds", true, 1300, 700) 
})

// $(".graph").click(function(e){
//     if (e.target.classList.contains("active-graph") == false){
//         this_graph = e.target
//         active_graph = $(".active-graph")[0]
//         active_graph.classList.remove("active-graph")
//         this_graph.classList.add("active-graph")
//         swapElements(this_graph,active_graph)

//     }
    
// })

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
            
            console.log(data)
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
                .attr("class", "graph-title")
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
        
            const margin = { top: 40, right: 80, bottom: 60, left: 80 },
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

            //y axis title
            svg
                .append("text")
                .attr("class", "y-axis-title")
                .attr("transform", "rotate(-90)")
                .attr("y", 0 - margin.left)
                .attr("x", 0 - height / 2)
                .attr("dy", "1em")
                .style("text-anchor", "middle")
                .text("Carbon Emissions (CO2e)");
    
            //x axis title
            svg
                .append("text")
                .attr("class", "x-axis-title")
                .attr("y", height + 30)
                .attr("x", width / 2)
                .attr("dy", "1em")
                .style("text-anchor", "middle")
                .text("Years");

            const data = d3.csvParse(json_data,
                function (d) {
                    d3.selectAll("path.area").remove();
                    d3.selectAll("path.line").remove();
                    d3.selectAll(".graph-title").remove();
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
                .attr("class", "graph-title")
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
        const margin = {top: 30, right: 60, bottom: 30, left: 60},
        width = w - margin.left - margin.right,
        height = h - margin.top - margin.bottom;
        
        console.log("stacked Graph")

        const x = d3.scaleTime().range([0, width]);
        const y = d3.scaleLinear().range([height, 0]);       
       
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
                    return { date: d3.timeParse("%Y")(d[Object.keys(d)[0]]), value1: d[Object.keys(d)[1]], value2: d[Object.keys(d)[1]]}
                })

                var area = d3.area()
                    .x(function(d) { return x(d.date); })
                    .y0(function(d) { return y(d.value1); })
                    .y1(function(d) { return y(d.value2); })
                // const valueline = d3
                // .group(data,d => d.date, d => d.value1,d => d.value2)
            
                var keys = data.columns.slice(1)
                console.log(keys)

                // color palette
                var color = d3.scaleOrdinal()
                  .domain(keys)
                  .range(d3.schemeSet2);
              
                //stack the data?
                var stackedData = d3.stack()
                  .keys(keys)
                  (data)

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

            areaChart
                .selectAll("mylayers")
                .data(stackedData)
                .enter()
                .append("path")
                .attr("class", function(d) { return "myArea " + d.key })
                .style("fill", function(d) { return color(d.key); })
                .attr("d", area)
        
            // const linePath = svg
            //     .append("path")
            //     .datum(data)
            //     .attr("class", "line")
            //     .attr("fill", "none")
            //     .attr("stroke", "steelblue")
            //     .attr("stroke-width", 1.5)
            //     .attr("d", valueline)
            // const pathLength = linePath.node().getTotalLength();
            // linePath
            //     .attr("stroke-dasharray", pathLength)
            //     .attr("stroke-dashoffset", pathLength)
            //     .attr("stroke-width", 0)
            //     .transition()
            //     .duration(1000)
            //     .attr("stroke-dashoffset", 0)
            //     .attr("stroke-width", 2);

            svg
                .append("text")
                .attr("class", "graph-title")
                .attr("x", width / 2)
                .attr("y", 0 - margin.top / 2)
                .attr("text-anchor", "middle")
                .text(title);
        
        

    } else {
        console.log("bar graph")

    }
        
    }



$(".non-active").click(function (e) {
    var non_active_div = $(e.target).parent().parent().closest('div');
    var non_active_div_siblings = $(e.target).parent().parent().siblings()
    var current_tabs_active_graph_sibling = non_active_div.parent().closest('div');

    var current_tabs_active_graph = current_tabs_active_graph_sibling.siblings().closest('div');
    non_active_id = non_active_div[0].classList[non_active_div[0].classList.length-1]
    current_tabs_active_id = current_tabs_active_graph[0].classList[current_tabs_active_graph[0].classList.length-1]
    console.log(current_tabs_active_id)
    current_tabs_active_graph[0].classList.remove(current_tabs_active_id);
    current_tabs_active_graph[0].classList.add(non_active_id);
    non_active_div[0].classList.remove(non_active_id);
    non_active_div[0].classList.add(current_tabs_active_id);
    generate_graph(data_dict[non_active_id],non_active_id,true,title_dict[non_active_id],1300,700,graph_type_dict[non_active_id])
    generate_graph(data_dict[current_tabs_active_id],current_tabs_active_id,false,title_dict[current_tabs_active_id],400,250,graph_type_dict[current_tabs_active_id])
    
    if(non_active_div_siblings.length != 0){
        for(i = 0;i<non_active_div_siblings.length;i++){
            non_active_div_sibling_id = non_active_div_siblings[i].classList[non_active_div_siblings[i].classList.length-1]
            generate_graph(data_dict[non_active_div_sibling_id],non_active_div_sibling_id,false,title_dict[non_active_div_sibling_id],400,250,graph_type_dict[non_active_div_sibling_id])
        }
    }      
});

function swapElements(el1, el2) {
    

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

