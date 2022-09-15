output = {}

output.initialize = function(input_json) {
    data_json=input_json;
    data_json = data_json.replace(/\n/g, '\\n')
    final_json = JSON.parse(data_json)
    data_dict = []
    data_dict["annual_harvest_and_timber_product_output"] = [final_json.annual_harvest_and_timber_product_output,"Annual Harvest and Timber Products","multiline","Hundred Cubic Feet (CCF)"]
    data_dict["annual_net_change_carbon_stocks"] = [final_json.annual_net_change_carbon_stocks, "Annual Net Change Carbon Stocks", "bar","Megagrams Carbon (Mg C)"]
    // data_dict["annual_harvests_output"] = [final_json.harvest_data,"Annual Total Harvest","line"]
    data_dict["burned_w_energy_capture_emitted"] = [final_json.burned_w_energy_capture_emit, "Total Carbon Burned With Energy Capture", "line","Carbon Emissions (CO2e)"]
    data_dict["burned_wo_energy_capture_emitted"] = [final_json.burned_wo_energy_capture_emit, "Total Carbon Burned Without Energy Capture", "line","Carbon Emissions (CO2e)"]
    data_dict["end_use"] = [final_json.total_end_use_products, "Total End Use Products", "line","Megagrams Carbon (Mg C)"]
    data_dict["swds"] = [final_json.swds, "Total SWDS", "line","Megagrams Carbon (Mg C)"]
    data_dict["total_composted_carbon_emitted"] = [final_json.total_composted_carbon_emitted, "Total Carbon in Compost Emitted" , "line","Carbon Emissions (CO2e)"]
    data_dict["total_cumulative_carbon_stocks"] = [final_json.total_cumulative_carbon_stocks, "Total Cumulative Carbon Stocks", "stack","Megagrams Carbon (Mg C)"]
    data_dict["total_dumps_carbon"] = [final_json.total_dumps_carbon, "Total Carbon in Dumps", "line","Megagrams Carbon (Mg C)"]
    data_dict["total_dumps_carbon_emitted"] = [final_json.total_dumps_carbon_emitted, "Total Carbon in Dumps Emitted", "line","Carbon Emissions (CO2e)"]
    data_dict["total_fuelwood_carbon_emitted"] = [final_json.total_fuelwood_carbon_emitted, "Total Emitted Fuelwood Carbon", "line","Carbon Emissions (CO2e)"]
    data_dict["total_in_use"] = [final_json.total_in_use, "Total Carbon in Use", "line","Megagrams Carbon (Mg C)"]
    data_dict["total_landfills_carbon"] = [final_json.total_landfills_carbon, "Total Landfills Carbon", "line","Megagrams Carbon (Mg C)"]
    data_dict["total_landfills_carbon_emitted"] = [final_json.total_landfills_carbon_emitted, "Total Landfills Carbon Emitted", "line","Carbon Emissions (CO2e)"]
    
    
    
}

$("#defaultOpen").click(function (e) {
    active_id = $("#inUseContent").children()[0].classList[$("#inUseContent").children()[0].classList.length-1]
    inactive = $("#inUseContent").children()[1].children
    inactive_ids =[]
    for(i=0;i<$("#inUseContent").children()[1].children.length;i++){
        inactive_ids.push($("#inUseContent").children()[1].children[i].classList[$("#inUseContent").children()[1].children[i].classList.length-1])
    }
    generate_graph(data_dict[active_id][0],active_id,"active",data_dict[active_id][1], 1300 , 700, data_dict[active_id][2], data_dict[active_id][3])
    for(i=0;i<inactive_ids.length;i++){
        generate_graph(data_dict[inactive_ids[i]][0],inactive_ids[i],"inactive",data_dict[inactive_ids[i]][1], 400 , 250, data_dict[inactive_ids[i]][2], data_dict[inactive_ids[i]][3])
    }
})
$("#burned").click(function(e){
    active_id = $("#burnedContent").children()[0].classList[$("#burnedContent").children()[0].classList.length-1]
    inactive = $("#burnedContent").children()[1].children
    inactive_ids =[]
    for(i=0;i<$("#burnedContent").children()[1].children.length;i++){
        inactive_ids.push($("#burnedContent").children()[1].children[i].classList[$("#burnedContent").children()[1].children[i].classList.length-1])
    }
    generate_graph(data_dict[active_id][0],active_id,"active",data_dict[active_id][1], 1300 , 700, data_dict[active_id][2], data_dict[active_id][3])
    for(i=0;i<inactive_ids.length;i++){
        generate_graph(data_dict[inactive_ids[i]][0],inactive_ids[i],"inactive",data_dict[inactive_ids[i]][1], 400 , 250, data_dict[inactive_ids[i]][2], data_dict[inactive_ids[i]][3])
    }
    
})
$("#swds").click(function(e){
    active_id = $("#carbonContent").children()[0].classList[$("#carbonContent").children()[0].classList.length-1]
    inactive = $("#carbonContent").children()[1].children
    inactive_ids =[]
    for(i=0;i<$("#carbonContent").children()[1].children.length;i++){
        inactive_ids.push($("#carbonContent").children()[1].children[i].classList[$("#carbonContent").children()[1].children[i].classList.length-1])
    }
    generate_graph(data_dict[active_id][0],active_id,"active",data_dict[active_id][1], 1300 , 700, data_dict[active_id][2], data_dict[active_id][3])
    for (i = 0; i < inactive_ids.length; i++){
        // console.log(inactive_ids[i])
        generate_graph(data_dict[inactive_ids[i]][0],inactive_ids[i],"inactive",data_dict[inactive_ids[i]][1], 400 , 250, data_dict[inactive_ids[i]][2], data_dict[inactive_ids[i]][3])
    }
})

$("#emitted").click(function(e){
    active_id = $("#decayContent").children()[0].classList[$("#decayContent").children()[0].classList.length-1]
    inactive = $("#decayContent").children()[1].children
    inactive_ids =[]
    for(i=0;i<$("#decayContent").children()[1].children.length;i++){
        inactive_ids.push($("#decayContent").children()[1].children[i].classList[$("#decayContent").children()[1].children[i].classList.length-1])
    }
    generate_graph(data_dict[active_id][0],active_id,"active",data_dict[active_id][1], 1300 , 700, data_dict[active_id][2], data_dict[active_id][3])
    for(i=0;i<inactive_ids.length;i++){
        generate_graph(data_dict[inactive_ids[i]][0],inactive_ids[i],"inactive",data_dict[inactive_ids[i]][1], 400 , 250, data_dict[inactive_ids[i]][2], data_dict[inactive_ids[i]][3])
    }
})

$("#reused").click(function (e) {
    // generate_graph(swds_co2e, "swds", true, 1300, 700) 
})

generate_graph = function(json_data, graph_class, is_active, title, w, h, graph_type,y_label){
    // console.log(json_data)
    var parseDate = d3.timeFormat("%Y");
    // if (graph_type == "line") {
        if (is_active == "inactive") {
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
                .attr("id", graph_class)
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
    
            if (graph_type == "line") {

                const data = d3.csvParse(json_data,
                    function (d) {
                        // d3.selectAll("path.area").remove();
                        // d3.selectAll("path.line").remove();
                        // d3.selectAll(".title").remove();
                        return { date: d3.timeParse("%Y")(d[Object.keys(d)[0]]), value: d[Object.keys(d)[1]] }
                    })
                
                    minDateYear = data[0].date.getFullYear();
                    maxDateYear = data[data.length - 1].date.getFullYear();
        
                    x.domain(
                        d3.extent(data, (d) => { return d.date; })
                    );
                    y.domain([
                        0,
                        d3.max(data, (d) => { return +d.value; })
                    ]);
                
                        
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
                    .select(".x.axis")
                    .transition()
                    .duration(750)
                    .call(d3.axisBottom(x));
                svg
                    .select(".y.axis")
                    .transition()
                    .duration(750)
                    .call(d3.axisLeft(y));
    
                svg
                    .append("text")
                    .attr("class", "graph-title")
                    .attr("x", width / 2)
                    .attr("y", 0 - margin.top / 2)
                    .attr("text-anchor", "middle")
                    .text(title);
            
        
                
            } else if (graph_type == "stack") {
                const grp = svg
                .append("g")
                const data = d3.csvParse(json_data,
                    function (d) {
                        
                        return { date: d3.timeParse("%Y")(d[Object.keys(d)[0]]), value1: d[Object.keys(d)[1]], value2: d[Object.keys(d)[2]]}
                    })
                
                const palette = ['lightgreen', 'lightblue'];
                const stack = d3.stack().keys(['value1', 'value2']);
                const stackedValues = stack(data);
                // console.log(stackedValues)
                const stackedData = [];

                stackedValues.forEach((layer, index) => {
                    // console.log(layer)
                    // console.log(index)
                    const currentStack = [];
                    layer.forEach((d, i) => {
                        // console.log(d)
                        // console.log(data[i])
                        // console.log(i)
                        currentStack.push({
                            year: data[i].date,
                            values: d
                            
                        });
                    });
                    stackedData.push(currentStack);
                });
                // console.log(stackedData)

                //create scales
                const xScale = d3
                .scaleLinear()
                .range([0, width])
                .domain(d3.extent(data, (d) => { return parseDate(d.date); }));
            
                const yScale = d3
                    .scaleLinear()
                    .range([height, 0])
                    .domain([0, d3.max(stackedValues[stackedValues.length - 1], dp => dp[1])]);
            
                const area = d3.area()
                .x(dataPoint => xScale(parseDate(dataPoint.year)))
                .y0(dataPoint => yScale(dataPoint.values[0]))
                .y1(dataPoint => yScale(dataPoint.values[1]));
                
        
                var series = grp
                    .selectAll(".series")
                    .data(stackedData)
                    .enter()
                    .append("g")
                    .attr("class", "series");
        
                var path = series.append("path")
                    .attr("stroke", "steelblue")
                    .attr("stroke-linejoin", "round")
                    .attr("stroke-linecap", "round")
                    .attr("stroke-width", 1.5)
                    .style("fill", "white")
                    .attr("d", d => area(d));
                
                
                path.each(function (d) { d.totalLength = this.getTotalLength(); })
            
                path
                    .attr("stroke-dasharray", function (d) { return d.totalLength + " " + d.totalLength; })
                    .attr("stroke-dashoffset", function (d) { return d.totalLength; })
                    .transition()
                    .duration(1000)
                    .attr("stroke-dashoffset", 0)
                    .style("fill", "white")
                    .transition()
                    .duration(1000)
                    .style("fill", (d, i) => palette[i]);;
                    
                    
                    //X axis
                    svg
                        .select(".x.axis")
                        .transition()
                        .duration(750)
                        // call the x axis as years
                        .call(d3.axisBottom(xScale).tickFormat(d3.format("d")));
                    
                    //Y axis
                    svg
                        .select(".y.axis")
                        .transition()
                        .duration(750)
                        .call(d3.axisLeft(yScale));
                    
        
                    //title
                    svg
                        .append("text")
                        .attr("class", "graph-title")
                        .attr("x", width / 2)
                        .attr("y", 0 - margin.top / 2)
                        .attr("text-anchor", "middle")
                        .text(title);
                

            } else {
                console.log("graph type is bar")
                
            }
            // console.log("min",data[0].date)
            // console.log("max",data[data.length-1].date)
          
     
       
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
        } else if (is_active == "hidden") {
             // hidden graphs
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
                 .attr("id", graph_class)
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
 
                 if (graph_type == "line") {

                    const data = d3.csvParse(json_data,
                        function (d) {
                            // d3.selectAll("path.area").remove();
                            // d3.selectAll("path.line").remove();
                            // d3.selectAll(".title").remove();
                            return { date: d3.timeParse("%Y")(d[Object.keys(d)[0]]), value: d[Object.keys(d)[1]] }
                        })
                     
                        minDateYear = data[0].date.getFullYear();
                        maxDateYear = data[data.length - 1].date.getFullYear();
                     
                        x.domain(
                            d3.extent(data, (d) => { return d.date; })
                        );
                        y.domain([
                            0,
                            d3.max(data, (d) => { return +d.value; })
                        ]);
                     
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
                        
                
                    // console.log(data)
                } else if (graph_type == "stack") {
                    console.log("this is a stack")
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
                    // console.log(keys)
                    
        
                        // // color palette
                        // var color = d3.scaleOrdinal()
                        //   .domain(keys)
                        //   .range(d3.schemeSet2);
                      
                        // //stack the data?
                        // var stackedData = d3.stack()
                        //   .keys(keys)
                        // (data)
                    
                    
    
                 } else if (graph_type == "multiline") {
                     console.log("graph type is active multiline")

                     
                    
                 } else {
                    console.log("graph type is active bar")
                }
                 
              
            
          
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
 

             //title
             svg
                 .append("text")
                 .attr("class", "graph-title")
                 .attr("x", width / 2)
                 .attr("y", 0 - margin.top / 2)
                 .attr("text-anchor", "middle")
                .text(title);
            
        } else if (is_active == "active") {
            
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
                .attr("id", graph_class)
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
                .text("hello")
            
    

            //y axis title
            svg
                .append("text")
                .attr("class", "y-axis-title")
                .attr("transform", "rotate(-90)")
                .attr("y", 0 - margin.left)
                .attr("x", 0 - height / 2)
                .attr("dy", "1em")
                .style("text-anchor", "middle")
                .text(y_label);
    
            //x axis title
            svg
                .append("text")
                .attr("class", "x-axis-title")
                .attr("y", height + 30)
                .attr("x", width / 2)
                .attr("dy", "1em")
                .style("text-anchor", "middle")
                .text("Years");

            if (graph_type == "line") {


                const data = d3.csvParse(json_data,
                    function (d) {
                        // d3.selectAll("path.area").remove();
                        // d3.selectAll("path.line").remove();
                        // d3.selectAll(".title").remove();
                        return { date: d3.timeParse("%Y")(d[Object.keys(d)[0]]), value: d[Object.keys(d)[1]] }
                    })
                    
                minDateYear = data[0].date.getFullYear();
                maxDateYear = data[data.length - 1].date.getFullYear();
                                        
                x.domain(
                    d3.extent(data, (d) => { return d.date; })
                );
                y.domain([
                    0,
                    d3.max(data, (d) => { return +d.value; })
                ]);
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
                
                
                    svg
                    .append("g")
                    .attr("class", "x axis")
                    .attr("transform", "translate(0," + height + ")")
                    .call(d3.axisBottom(x));
            
                svg.append("g").attr("class", "y axis").call(d3.axisLeft(y));

                //title
                svg
                    .append("text")
                    .attr("class", "graph-title")
                    .attr("x", width / 2)
                    .attr("y", 0 - margin.top / 2)
                    .attr("text-anchor", "middle")
                    .text(title);
                    
                function mouseMove(event) {
                    // console.log(event, "hello");
            
                    const bisect = d3.bisector((d) => d.date).left,
                        x0 = x.invert(d3.pointer(event, this)[0]),
                        i = bisect(data, x0, 1),
                        d0 = data[i - 1],
                        d1 = data[i],
                        d = x0 - d0.date > d1.date - x0 ? d1 : d0;
                    // console.log(i, d0, d1, d) 
                    // focus
                    //    .select("rect")
                    //     .attr("transform", "translate(" + x(d.date) + "," + y(d.value) + ")");
                            
            
                    focus
                        .select("circle.y")
                        .attr("transform", "translate(" + x(d.date) + "," + y(d.value) + ")");
            
                    focus
                        .select("text.y1")
                        .attr("transform", "translate(" + x(d.date) + "," + y(d.value) + ")")
                        .text(d3.format(",.2~f")(d.value));
            
                    focus
                        .select("text.y2")
                        .attr("transform", "translate(" + x(d.date) + "," + y(d.value) + ")")
                        .text(parseDate(d.date));
            
                    focus
                        .select(".x")
                        .attr("transform", "translate(" + x(d.date) + "," + y(d.value) + ")")
                        .attr("y2", height - y(d.value));
            
                    focus
                        .select(".y")
                        .attr("transform", "translate(" + width * -1 + "," + y(d.value) + ")")
                        .attr("x2", width + width);
                    
                }
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
                        
                
                // place the date at the intersection
                focus.append("text").attr("class", "y2").attr("dx", 8).attr("dy", "1em");
                
                
                     
                            
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
                            
                            
                    
            } else if (graph_type == "multiline") {
                console.log("graph type is active multiline")
                
                const data1 = d3.csvParse(json_data,
                    function (d) {
                        return { date: d3.timeParse("%Y")(d[Object.keys(d)[0]]), value: d[Object.keys(d)[1]] }
                    })
                    const data2 = d3.csvParse(json_data,
                        function (d) {
                            return { date: d3.timeParse("%Y")(d[Object.keys(d)[0]]), value: d[Object.keys(d)[2]] }
                        })
                
                var keys = ["Value1", "Value2"];             
                    x.domain(
                        d3.extent(data1, (d) => { return d.date; })
                    );
                    y.domain([
                        0,
                        d3.max(data2, (d) => { return +d.value; })
                    ]);

                const linePath = svg
                    .append("path")
                    .datum(data1)
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
                
                const linePath2 = svg
                    .append("path")
                    .datum(data2)
                    .attr("class", "line")
                    .attr("fill", "none")
                    .attr("stroke", "steelblue")
                    .attr("stroke-width", 1.5)
                    .attr("d", valueline)
                
                linePath2
                    .attr("stroke-dasharray", pathLength)
                    .attr("stroke-dashoffset", pathLength)
                    .attr("stroke-width", 0)
                    .transition()
                    .duration(1000)
                    .attr("stroke-dashoffset", 0)
                    .attr("stroke-width", 3);
                    
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
                
                           
                svg
                    .append("g")
                    .attr("class", "x axis")
                    .attr("transform", "translate(0," + height + ")")
                    .call(d3.axisBottom(x));
            
                svg.append("g").attr("class", "y axis").call(d3.axisLeft(y));


                    //title
                svg
                .append("text")
                .attr("class", "graph-title")
                .attr("x", width / 2)
                .attr("y", 0 - margin.top / 2)
                .attr("text-anchor", "middle")
                .text(title);

                function mouseMove(event) {
                    // console.log(event, "hello");
                    
            
                    const bisect = d3.bisector((d) => d.date).left,
                        x0 = x.invert(d3.pointer(event, this)[0]),
                        i = bisect(data1, x0, 1),
                        d0 = data1[i - 1],
                        d1 = data1[i],
                        d = x0 - d0.date > d1.date - x0 ? d1 : d0;
                    const bisect2 = d3.bisector((d) => d.date).left,
                        xx0 = x.invert(d3.pointer(event, this)[0]),
                        ii = bisect2(data2, xx0, 1),
                        dd0 = data2[ii - 1],
                        dd1 = data2[ii],
                        dd = xx0 - dd0.date > dd1.date - xx0 ? dd1 : dd0;
                    // console.log(i, d0, d1, d) 
                    // focus
                    //    .select("rect")
                    //     .attr("transform", "translate(" + x(d.date) + "," + y(d.value) + ")");
                            
            
                    focus
                        .select("circle.y")
                        .attr("transform", "translate(" + x(d.date) + "," + y(d.value) + ")");
            
                    focus
                        .select("text.y1")
                        .attr("transform", "translate(" + x(d.date) + "," + y(d.value) + ")")
                        .text("Yearly Harvest (CCF): " +d3.format(",.2~f")(d.value));
                    
                    focus
                        .select("text.y2")
                        .attr("transform", "translate(" + x(d.date) + "," + y(d.value) + ")")
                        .text("Timber Products (MBF): " + d3.format(",.2~f")(dd.value));
            
                    focus
                        .select("text.y3")
                        .attr("transform", "translate(" + x(d.date) + "," + y(d.value) + ")")
                        .text(parseDate(d.date));
            
                    focus
                        .select(".x")
                        .attr("transform", "translate(" + x(d.date) + "," + y(d.value) + ")")
                        .attr("y2", height - y(d.value));
            
                    focus
                        .select(".y")
                        .attr("transform", "translate(" + width * -1 + "," + y(d.value) + ")")
                        .attr("x2", width + width);
                    
                }
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
                        
                
                // place the date at the intersection
                focus.append("text").attr("class", "y2").attr("dx", 8).attr("dy", "1em");
                

                focus.append("text").attr("class", "y3").attr("dx", 8).attr("dy", "2.3em");
                
                     
                            
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
            else if (graph_type == "stack") {
                // console.log("this is a stack")
                const grp = svg
                    .append("g")
                
                           
                svg
                    .append("g")
                    .attr("class", "x axis")
                    .attr("transform", "translate(0," + height + ")")
                    .call(d3.axisBottom(x));
            
                svg.append("g").attr("class", "y axis").call(d3.axisLeft(y));

                const data = d3.csvParse(json_data,
                    function (d) {
                            
                        return { date: d3.timeParse("%Y")(d[Object.keys(d)[0]]), value1: d[Object.keys(d)[1]], value2: d[Object.keys(d)[2]] }
                    })
                
                
                var keys = ["Products in Use", "SWDS Present"];
                const palette = ['lightgreen', 'lightblue'];
                const patterns = ['diagonal-stripe-1', 'circles-8'];
                const stack = d3.stack().keys(['value1', 'value2']);
                const stackedValues = stack(data);
                // console.log(stackedValues)
                const stackedData = [];

    
                stackedValues.forEach((layer, index) => {
                    // console.log(layer)
                    // console.log(index)
                    const currentStack = [];
                    layer.forEach((d, i) => {
                        // console.log(d)
                        // console.log(data[i])
                        // console.log(i)
                        currentStack.push({
                            year: data[i].date,
                            values: d
                                
                        });
                    });
                    stackedData.push(currentStack);
                });
                // console.log(stackedData)
    
                //create scales
                const xScale = d3
                    .scaleLinear()
                    .range([0, width])
                    .domain(d3.extent(data, (d) => { return parseDate(d.date); }));
                    
                // console.log(xScale)
                
                const yScale = d3
                    .scaleLinear()
                    .range([height, 0])
                    .domain([0, d3.max(stackedValues[stackedValues.length - 1], dp => dp[1])]);
                
                const area = d3.area()
                    .x(dataPoint => xScale(parseDate(dataPoint.year)))
                    .y0(dataPoint => yScale(dataPoint.values[0]))
                    .y1(dataPoint => yScale(dataPoint.values[1]));
                    
            
                var series = grp
                    .selectAll(".series")
                    .data(stackedData)
                    .enter()
                    .append("g")
                    .attr("class", "series");
            
                var path = series.append("path")
                    .attr("stroke", "steelblue")
                    .attr("stroke-linejoin", "round")
                    .attr("stroke-linecap", "round")
                    .attr("stroke-width", 3)
                    .style("fill", "white")
                    .attr("d", d => area(d));
                    
                    
                path.each(function (d) { d.totalLength = this.getTotalLength(); })
                
                path
                    .attr("stroke-dasharray", function (d) { return d.totalLength + " " + d.totalLength; })
                    .attr("stroke-dashoffset", function (d) { return d.totalLength; })
                    .transition()
                    .duration(1000)
                    .attr("stroke-dashoffset", 0)
                    .style("fill", "white")
                    .transition()
                    .duration(1000)
                    // .style("fill", "url(#hash4_4)");
                    .style("fill", (d, i) => palette[i]);
                    
                         
                //legend

                var size = 20
                svg.selectAll("legendrect")
                    .data(stackedData)
                    .enter()
                    .append("rect")
                    .attr("x", 20)
                    .attr("y", function (d, i) { return 20 + i * (size + 5) }) 
                    .attr("width", size)
                    .attr("height", size)
                    .style("fill", (d, i) => palette[i])
                    // .on("mouseover", highlight)
                    // .on("mouseleave", noHighlight)
                
                console.log(stackedData)
                // Add one dot in the legend for each name.
                    svg.selectAll("legendlabels")
                    .data(keys)
                    .enter()
                        .append("text")
                        .attr("font-size", "16px")
                    .attr("x", 20 + size*1.2)
                    .attr("y", function(d,i){ return 25 + i*(size+5) + (size/2)}) 
                    .style("fill", "black")
                    .text(function(d){ return d})
                    .attr("text-anchor", "left")
                    .style("alignment-baseline", "bottom")
                    // .on("mouseover", highlight)
                    // .on("mouseleave", noHighlight)

                // var legend = svg.append('g')
                //     .attr('class', 'legend')
                //     .attr('transform', 'translate(' + (margin.left + 12) + ', 0)');
                    
                // legend.selectAll('rect')
                //     .data(stack)
                //     .enter()
                //     .append('rect')
                //     .attr('x', 0)
                //     .attr('y', 18)
                //     // .attr('y', function(d, i){
                //     //     return i * 18;
                //     // })
                //     .attr('width', 12)
                //     .attr('height', 12)
                //     .style("fill", (d, i) => palette[i]);
                    
                     
                // // .attr("fill", "pink");
                    
                // legend.selectAll('text')
                //     .data(stack)
                //     .enter()
                //     .append('text')
                //     .text(function (d) {
                //         return d;
                //     })
                //     .attr('x', 18)
                //     .attr('y', function (d, i) {
                //         return i * 18;
                //     })
                //     .attr('text-anchor', 'start')
                //     .attr('alignment-baseline', 'hanging');
                    
                // path
                //fill with pattern
                        
                        
                //X axis
                svg
                    .select(".x.axis")
                    .transition()
                    .duration(750)
                    // call the x axis as years
                    .call(d3.axisBottom(xScale).tickFormat(d3.format("d")));
                    
                //Y axis
                svg
                    .select(".y.axis")
                    .transition()
                    .duration(750)
                    .call(d3.axisLeft(yScale));
                    
        
                //title
                svg
                    .append("text")
                    .attr("class", "graph-title")
                    .attr("x", width / 2)
                    .attr("y", 0 - margin.top / 2)
                    .attr("text-anchor", "middle")
                    .text(title);
               
   
                //focus
                    
                    
       
                    
                const focus = svg
                    .append("g")
                    .attr("class", "focus")
                    .style("display", "none");
                    
                focus
                    .append("circle")
                    .attr("class", "y")
                    .style("fill", "none")
                    .attr("r", 4); // radius

                // focus.append("circle")
                //     .attr("r", 5);

                // focus.append("text")
                //     .attr("x", 9)
                //     .attr("dy", ".35em")
                //     .style("font-size",15);
                
                // var focus2 = svg.append("g")
                //     .attr("class", "focus")
                //     .style("display", "none");

                // focus2.append("circle")
                //     .attr("r",5);

                // focus2.append("text")
                //     .attr("x", 9)
                //     .attr("dy", ".35em")
                //     .style("font-size",15);
                
                // var focus3 = svg.append("g")
                //     .attr("class", "focus")
                //     .style("display", "none");

                // focus3.append("circle")
                //     .attr("r", 5);

                // focus3.append("text")
                //     .attr("x", 9)
                //     .attr("dy", ".35em")
                //     .style("font-size",15);

                // var focus4 = svg.append("g")
                //     .attr("class", "focus")
                //     .style("display", "none");

                // focus4.append("circle")
                //     .attr("r", 5);

                // focus4.append("text")
                //     .attr("x", 9)
                //     .attr("dy", ".5em")
                //     .style("font-size",15);

                svg.append("rect")
                    .attr("class", "overlay")
                    .attr("width", width)
                    .attr("height", height)
                    .style("fill", "none")
                    .style("pointer-events", "all")
                    .on("mouseover", function () {
                        focus.style("display", null);
                        // focus2.style("display", null);
                        // focus3.style("display", null);
                        // focus4.style("display", null);
                    })
                    .on("mouseout", function () {
                        focus.style("display", "none");
                        // focus2.style("display", "none");
                        // focus3.style("display", "none");
                        // focus4.style("display", "none");
                    })
                    .on("touchmove mousemove", mouseMove);

                    const tParser = d3.timeParse("%d/%m/%Y")

                function mouseMove(event) {
                    
                    const bisect = d3.bisector((d) => d.date).left,
                        x0 = new Date(xScale.invert(d3.pointer(event, this)[0])),
                        i = bisect(data, x0, 1),
                        d0 = data[i - 1],
                        d1 = data[i],
                        d = x0 - d0.year > d1.year - x0 ? d1 : d0;

                    // const bisect1 = d3.bisector((d) => d.date).left,
                    //     xx0 = xScale.invert(d3.pointer(event, this)[0]),
                    //     ii = bisect1(stackedData[1], xx0, 1),
                    //     dd0 = stackedData[1][ii - 1],
                    //     dd1 = stackedData[1][ii],
                    //     dd = xx0 - dd0.year > dd1.year - xx0 ? dd1 : dd0;
                    console.log(x0)
                    // console.log(xx0)
                    console.log(i, d0, d1, d)
                    // console.log(ii, dd0, dd1, dd)
                    

                    focus
                        .select("circle.y")
                        .attr("transform", "translate(" + x(d.date) + "," + y(d.value2) + ")");
            
                    focus
                        .select("text.y1")
                        .attr("transform", "translate(" + x(d.date) + "," + y(d.value1) + ")")
                        .text(d3.format(",.2~f")(d.value1));
            
                    focus
                        .select("text.y2")
                        .attr("transform", "translate(" + x(d.date) + "," + y(d.value1) + ")")
                        .text(parseDate(d.date));
            
                    focus
                        .select(".x")
                        .attr("transform", "translate(" + x(d.date) + "," + y(d.value1) + ")")
                        .attr("y2", height - y(d.value1));
            
                    focus
                        .select(".y")
                        .attr("transform", "translate(" + width * -1 + "," + y(d.value1) + ")")
                        .attr("x2", width + width);

                    //   var depl=parseFloat(d['Safari'])+parseFloat(d['Opera'])+parseFloat(d['Firefox']);
                    //   var depl2=parseFloat(d['Safari'])+parseFloat(d['Opera']);
                    //   var depl3=parseFloat(d['Safari'])+parseFloat(d['Opera'])+parseFloat(d['Firefox'])+parseFloat(d['Chrome']);
                    //   var depl4=parseFloat(d['Opera']);
                    //   focus.attr("transform", "translate(" + x(d.date) + "," + (500 - margin.top - margin.bottom)*depl/100+ ")"); 
                    //   focus2.attr("transform", "translate(" + x(d.date) + "," + (500 - margin.top - margin.bottom)*depl2/100+ ")");   
                    //   focus3.attr("transform", "translate(" + x(d.date) + "," + (500 - margin.top - margin.bottom)*depl3/100+ ")");   
                    //   focus4.attr("transform", "translate(" + x(d.date) + "," + (500 - margin.top - margin.bottom)*depl4/100+ ")");   
                    //   focus.select("text").text(d3.round(100-depl, 1)+"%");
                    //   focus2.select("text").text(d3.round(100-depl2, 1)+"%");
                    //   focus3.select("text").text(d3.round(100-depl3, 1)+"%");
                    //   focus4.select("text").text(d3.round(100-depl4, 1)+"%");
                }
                // svg
                // .append("rect")
                // .attr("width", width)
                // .attr("height", height)
                // .style("fill", "none")
                // .style("pointer-events", "all")
                // .on("mouseover", function() {
                //     focus.style("display", "none");
                // })
                // .on("mouseout", function() {
                //     focus.style("display", "none");
                // })
                // .on("touchmove mousemove", mouseMove);
       
 
                    
    
            }
            else {
                console.log(json_data)
                console.log("graph type is active bar")
                const data = d3.csvParse(json_data,
                    function (d) {
                        return { date: d3.timeParse("%Y")(d[Object.keys(d)[0]]), value1: d[Object.keys(d)[1]], value2: d[Object.keys(d)[2]] }
                    })
                
                arranged = [];
                    const subgroups = data.columns.slice(1)
                    // console.log(subgroups)
                   
                const groups = data.map(d => (parseDate(d.date)))
                    // color palette = one color per subgroup
                    const color = d3.scaleOrdinal()
                        .domain(subgroups)
                    .range(['#e41a1c', '#377eb8', '#4daf4a'])
                
                    data.forEach(function (d) {
                        var newD = {x: groups};
                        var y0neg = 0;
                        var y0pos = 0;
                        newD.values = color.domain().map(function (m) {
                            if (d[m] > 0)
                                return { name: m, y0: y0pos, y1: y0pos += +d[m] };
                            else {
                                var y1 = y0neg;
                                return { name: m, y0: y0neg += d[m], y1: y1 };
                            } 
                        });
                        newD.totalPositive = d3.max(newD.values, function (v) { return v.y1});
                        newD.totalNegative = d3.min(newD.values, function (v) { return v.y0 });
                        arranged.push(newD);
                     });
                 
        
                
               
                    // Add X axis
                    const x = d3.scaleBand()
                        .domain(groups)
                        .rangeRound([0, width])
                        .padding([0.2])
                    svg.append("g")
                    .attr("transform", `translate(0, ${height})`)
                    .call(d3.axisBottom(x));
                

                    // Add Y axis
                    const y = d3.scaleLinear()
                        .domain([0, 60])
                        .rangeRound([height, 0])
                    svg.append("g")
                        .call(d3.axisLeft(y));

                

                    //stack the data? --> stack per subgroup
                    const stackedData = d3.stack()
                        .keys(subgroups)
                        (data)

                    // Show the bars
                    svg.append("g")
                        .selectAll("g")
                        // Enter in the stack data = loop key per key = group per group
                        .data(stackedData)
                        .join("g")
                        .attr("fill", d => color(d.key))
                        .selectAll("rect")
                        // enter a second time = loop subgroup per subgroup to add all rectangles
                        .data(d => d)
                        .join("rect")
                        .attr("x", function(d) { return x(d.date); })
                        .attr("y", function(d) { return y(d.y1); })
                        .attr("height", function(d) { return y(d.y0) - y(d.y1); })
                        .attr("width", x.bandwidth());
                
                //     svg.append("g")
                //     .attr("class", "axis")
                //     .attr("transform", "translate(0," + height + ")")
                //     .call(d3.axisBottom(x));
              
                // svg.append("g")
                //     .attr("class", "axis")
                //     .call(d3.axisLeft(y).ticks(null, "s"))
                //   .append("text")
                //     .attr("x", 2)
                //     .attr("y", y(y.ticks().pop()) + 0.5)
                //     .attr("dy", "0.32em")
                //     .attr("fill", "#000")
                //     .attr("font-weight", "bold")
                //     .attr("text-anchor", "start")
                //     .text("Population");
              
                // var legend = g.append("g")
                //     .attr("font-family", "sans-serif")
                //     .attr("font-size", 10)
                //     .attr("text-anchor", "end")
                //   .selectAll("g")
                //   .data(keys.slice().reverse())
                //   .enter().append("g")
                //     .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });
              
                // legend.append("rect")
                //     .attr("x", width - 19)
                //     .attr("width", 19)
                //     .attr("height", 19)
                //     .attr("fill", z);
              
                // legend.append("text")
                //     .attr("x", width - 24)
                //     .attr("y", 9.5)
                //     .attr("dy", "0.32em")
                //     .text(function(d) { return d; });

            }
            
            
    
            } else {
            console.log("I broke");
        }
        
    }



$(".non-active").click(function (e) {
    var non_active_div = $(e.target);
    var non_active_div_siblings = $(e.target).siblings()
    var current_tabs_active_graph_sibling = non_active_div.parent().closest('div');

    var current_tabs_active_graph = current_tabs_active_graph_sibling.siblings().closest('div');
    non_active_id = non_active_div[0].classList[non_active_div[0].classList.length-1]
    current_tabs_active_id = current_tabs_active_graph[0].classList[current_tabs_active_graph[0].classList.length-1]
    current_tabs_active_graph[0].classList.remove(current_tabs_active_id);
    current_tabs_active_graph[0].classList.add(non_active_id);
    non_active_div[0].classList.remove(non_active_id);
    non_active_div[0].classList.add(current_tabs_active_id);
    generate_graph(data_dict[non_active_id][0],non_active_id,"active",data_dict[non_active_id][1],1300,700,data_dict[non_active_id][2], data_dict[non_active_id][3])
    generate_graph(data_dict[current_tabs_active_id][0],current_tabs_active_id,"inactive",data_dict[current_tabs_active_id][1],400,250,data_dict[current_tabs_active_id][2])
    
    if(non_active_div_siblings.length != 0){
        for(i = 0;i<non_active_div_siblings.length;i++){
            non_active_div_sibling_id = non_active_div_siblings[i].classList[non_active_div_siblings[i].classList.length-1]
            generate_graph(data_dict[non_active_div_sibling_id][0],non_active_div_sibling_id,"inactive",data_dict[non_active_div_sibling_id][1],400,250,data_dict[non_active_div_sibling_id][2])
        }
    }      
});

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


d3.select("#dl-closed").on('click', function () {
    generate_graph(data_dict["total_dumps_carbon_emitted"][0], "total_dumps_carbon_emitted1", "hidden", data_dict["total_dumps_carbon_emitted"][1], 1300, 700, data_dict["total_dumps_carbon_emitted"][2]);
    generate_graph(data_dict["total_landfills_carbon_emitted"][0], "total_landfills_carbon_emitted1", "hidden", data_dict["total_landfills_carbon_emitted"][1], 1300, 700, data_dict["total_landfills_carbon_emitted"][2]);
    generate_graph(data_dict["total_composted_carbon_emitted"][0], "total_composted_carbon_emitted1", "hidden", data_dict["total_composted_carbon_emitted"][1], 1300, 700, data_dict["total_composted_carbon_emitted"][2]);


    generate_graph(data_dict["annual_harvests_output"][0], "annual_harvests_output1", "hidden", data_dict["annual_harvests_output"][1], 1300, 700, data_dict["annual_harvests_output"][2]);
    generate_graph(data_dict["end_use"][0], "end_use1", "hidden", data_dict["end_use"][1], 1300, 700, data_dict["end_use"][2]);
     generate_graph(data_dict["annual_net_change_carbon_stocks"][0], "annual_net_change_carbon_stocks1", "hidden", data_dict["annual_net_change_carbon_stocks"][1], 1300, 700, data_dict["annual_net_change_carbon_stocks"][2]);
    generate_graph(data_dict["burned_wo_energy_capture_emitted"][0], "burned_wo_energy_capture_emitted1", "hidden", data_dict["burned_wo_energy_capture_emitted"][1], 1300, 700, data_dict["burned_wo_energy_capture_emitted"][2]);
    generate_graph(data_dict["burned_w_energy_capture_emitted"][0], "burned_w_energy_capture_emitted1", "hidden", data_dict["burned_w_energy_capture_emitted"][1], 1300, 700, data_dict["burned_w_energy_capture_emitted"][2]);
    generate_graph(data_dict["total_fuelwood_carbon_emitted"][0], "total_fuelwood_carbon_emitted1", "hidden", data_dict["total_fuelwood_carbon_emitted"][1], 1300, 700, data_dict["total_fuelwood_carbon_emitted"][2]);

    // generate_graph(data_dict["total_cumulative_carbon_stocks_co2e"][0], "total_cumulative_carbon_stocks_co2e1", "hidden", data_dict["total_cumulative_carbon_stocks_co2e"][1], 1300, 700, data_dict["total_cumulative_carbon_stocks_co2e"][2]);
    //generate_graph(data_dict["total_dumps_carbon_co2e"][0], "total_dumps_carbon_co2e1", "hidden", data_dict["total_dumps_carbon_co2e"][1], 1300, 700, data_dict["total_dumps_carbon_co2e"][2]);
    //generate_graph(data_dict["total_landfills_carbon_co2e"][0], "total_landfills_carbon_co2e1", "hidden", data_dict["total_landfills_carbon_co2e"][1], 1300, 700, data_dict["total_landfills_carbon_co2e"][2]);
    
   
        

})
