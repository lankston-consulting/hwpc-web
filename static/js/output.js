output = {}

captions_dict = []
captions_dict["annual_harvest_and_timber_product_output"] = [{text:"Annual total timber harvest and product output converted to metric tons of carbon, from [minimum year] to [maximum year]."}]
captions_dict["annual_net_change_carbon_stocks"] =  [{text:"Total cumulative metric tons of carbon stocks in harvested wood products (HWP) manufactured from total timber harvested from [minimum year] to [maximum year] using the IPCC Tier 3 Production Approach. Carbon in HWP includes both products that are still in use and carbon stored at solid waste disposal sites (SWDS). Carbon emissions are displayed in units of carbon dioxide equivalent (CO2e) and do not include other carbon-based greenhouse gases such as methane."}]
captions_dict["end_use"] = [{text:"Total cumulative metric tons carbon stored in End Use Products in Use manufactured from total timber harvested from [minimum year] to [maximum year]."}]
captions_dict["burned_w_energy_capture_emitted"] =  [{text:"Total cumulative metric ton carbon emitted from burning discarded products with energy capture manufactured from total timber harvested from [minimum year] to [maximum year]. Discarded products are assumed to be burned in an incinerator with energy capture. Emitted carbon is displayed in units of carbon dioxide equivalent (CO2e) and do not include other carbon-based greenhouse gases such as methane."}]
captions_dict["burned_wo_energy_capture_emitted"] =  [{text:"Total cumulative metric tons carbon emitted from burning discarded products without energy capture manufactured from total timber harvested from [minimum year] to [maximum year]. Carbon emitted from burned discarded products is assumed to be emitted without energy capture. Carbon emissions are displayed in units of carbon dioxide equivalent (CO2e) and do not include other carbon-based greenhouse gases such as methane."}]
captions_dict["total_fuelwood_carbon_emitted"] =  [{text:"Total cumulative metric tons carbon emitted from fuelwood and wood waste used for fuel with energy capture from total timber harvested from [minimum year] to [maximum year]. Carbon emitted from burning fuelwood and wood waste with energy capture occurs during the year of harvest and is not assumed to substitute for an equivalent amount of fossil fuel carbon. Carbon emissions are displayed in units of carbon dioxide equivalent (CO2e) and do not include other carbon-based greenhouse gases such as methane."}]
captions_dict["total_cumulative_carbon_stocks"] =  [{text:"Total cumulative metric tons of carbon stocks in harvested wood products (HWP) manufactured from total timber harvested from [minimum year] to [maximum year] using the IPCC Tier 3 Production Approach. Carbon in HWP includes both products that are still in use and carbon stored at solid waste disposal sites (SWDS)."}]
captions_dict["total_dumps_carbon"] =  [{text:"Total cumulative metric tons carbon stored in dumps from discarded products manufactured from total timber harvested from [minimum year] to [maximum year]. Carbon in dumps include discarded wood and paper products and comprise a portion of the solid waste disposal site pool. Prior to 1970, wood and paper waste was generally discarded to dumps, as opposed to modern landfills. Carbon emissions are displayed in units of carbon dioxide equivalent (CO2e) and do not include other carbon-based greenhouse gases such as methane."}]
captions_dict["total_landfills_carbon"] =  [{text:"Total cumulative metric tons carbon stored in landfills from discarded products manufactured from total timber harvested from [minimum year] to [maximum year]. Carbon in landfills are discarded wood and paper products and comprise a portion of the solid waste disposal site pool. Carbon emissions are displayed in units of carbon dioxide equivalent (CO2e) and do not include other carbon-based greenhouse gases such as methane."}]
captions_dict["total_dumps_carbon_emitted"] =  [{text:"Total cumulative metric tons carbon emitted from discarded products in dumps manufactured from total timber harvested from [minimum year] to [maximum year]. Carbon emitted from discarded wood and paper products in dumps is decay without energy capture. Prior to 1970 wood and paper waste was generally discarded to dumps, where it was subject to higher rates of decay than in modern landfills. Carbon emissions are displayed in units of carbon dioxide equivalent (CO2e) and do not include other carbon-based greenhouse gases such as methane."}]
captions_dict["total_composted_carbon_emitted"] = [{text:"Total cumulative metric tons carbon emitted from composted discarded harvested wood products manufactured from total timber harvested from [minimum year] to [maximum year]. No carbon storage is associated with composted discarded products and all composted carbon is decay emitted without energy capture. Carbon emissions are displayed in units of carbon dioxide equivalent (CO2e) and do not include other greenhouse gases such as methane."}]
captions_dict["total_landfills_carbon_emitted"] =  [{text:"Total cumulative metric tons carbon emitted from discarded products in landfills manufactured from total timber harvested from [minimum year] to [maximum year]. Carbon emitted from discarded wood and paper products in landfills is decay without energy capture. Methane remediation from landfills that includes combustion and subsequent emissions with energy capture is not included. Carbon emissions are displayed in units of carbon dioxide equivalent (CO2e) and do not include other carbon-based greenhouse gases such as methane."}]

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
    // active_id = $("#inUseContent").children()[0].classList[$("#inUseContent").children()[0].classList.length-1]
    // inactive = $("#inUseContent").children()[1].children
    // inactive_ids =[]
    // for(i=0;i<$("#inUseContent").children()[1].children.length;i++){
    //     inactive_ids.push($("#inUseContent").children()[1].children[i].classList[$("#inUseContent").children()[1].children[i].classList.length-1])
    // }
    // generate_graph(data_dict[active_id][0],active_id,"active",data_dict[active_id][1], 1300 , 700, data_dict[active_id][2], data_dict[active_id][3],captions_dict[active_id])
    // for(i=0;i<inactive_ids.length;i++){
    //     generate_graph(data_dict[inactive_ids[i]][0],inactive_ids[i],"inactive",data_dict[inactive_ids[i]][1], 400 , 250, data_dict[inactive_ids[i]][2], data_dict[inactive_ids[i]][3])
    // }
})
$("#productsInUse").click(function (e) {
    active_id = $("#inUseContent").children()[0].classList[$("#inUseContent").children()[0].classList.length-1]
    inactive = $("#inUseContent").children()[1].children
    inactive_ids =[]
    for(let i=0;i<$("#inUseContent").children()[1].children.length;i++){
        inactive_ids.push($("#inUseContent").children()[1].children[i].classList[$("#inUseContent").children()[1].children[i].classList.length-1])
    }
    generate_graph(data_dict[active_id][0],active_id,"active",data_dict[active_id][1], 1300 , 700, data_dict[active_id][2], data_dict[active_id][3],captions_dict[active_id])
    for(let i=0;i<inactive_ids.length;i++){
        generate_graph(data_dict[inactive_ids[i]][0],inactive_ids[i],"inactive",data_dict[inactive_ids[i]][1], 400 , 250, data_dict[inactive_ids[i]][2], data_dict[inactive_ids[i]][3])
    }
})
$("#burned").click(function(e){
    active_id = $("#burnedContent").children()[0].classList[$("#burnedContent").children()[0].classList.length-1]
    inactive = $("#burnedContent").children()[1].children
    inactive_ids =[]
    for(let i=0;i<$("#burnedContent").children()[1].children.length;i++){
        inactive_ids.push($("#burnedContent").children()[1].children[i].classList[$("#burnedContent").children()[1].children[i].classList.length-1])
    }
    generate_graph(data_dict[active_id][0],active_id,"active",data_dict[active_id][1], 1300 , 700, data_dict[active_id][2], data_dict[active_id][3],captions_dict[active_id])
    for(let i=0;i<inactive_ids.length;i++){
        generate_graph(data_dict[inactive_ids[i]][0],inactive_ids[i],"inactive",data_dict[inactive_ids[i]][1], 400 , 250, data_dict[inactive_ids[i]][2], data_dict[inactive_ids[i]][3])
    }
    
})
$("#swds").click(function(e){
    active_id = $("#carbonContent").children()[0].classList[$("#carbonContent").children()[0].classList.length-1]
    inactive = $("#carbonContent").children()[1].children
    inactive_ids =[]
    for(let i=0;i<$("#carbonContent").children()[1].children.length;i++){
        inactive_ids.push($("#carbonContent").children()[1].children[i].classList[$("#carbonContent").children()[1].children[i].classList.length-1])
    }
    generate_graph(data_dict[active_id][0],active_id,"active",data_dict[active_id][1], 1300 , 700, data_dict[active_id][2], data_dict[active_id][3],captions_dict[active_id])
    for (let i=0;i<inactive_ids.length;i++){
        // console.log(inactive_ids[i])
        generate_graph(data_dict[inactive_ids[i]][0],inactive_ids[i],"inactive",data_dict[inactive_ids[i]][1], 400 , 250, data_dict[inactive_ids[i]][2], data_dict[inactive_ids[i]][3])
    }
})

$("#emitted").click(function(e){
    active_id = $("#decayContent").children()[0].classList[$("#decayContent").children()[0].classList.length-1]
    inactive = $("#decayContent").children()[1].children
    inactive_ids =[]
    for(let i=0;i<$("#decayContent").children()[1].children.length;i++){
        inactive_ids.push($("#decayContent").children()[1].children[i].classList[$("#decayContent").children()[1].children[i].classList.length-1])
    }
    console.log(inactive_ids)
    generate_graph(data_dict[active_id][0],active_id,"active",data_dict[active_id][1], 1300 , 700, data_dict[active_id][2], data_dict[active_id][3],captions_dict[active_id])
    console.log(inactive_ids.length)
    for(let i=0;i<inactive_ids.length;i++){
        console.log(i)
        generate_graph(data_dict[inactive_ids[i]][0],inactive_ids[i],"inactive",data_dict[inactive_ids[i]][1], 400 , 250, data_dict[inactive_ids[i]][2], data_dict[inactive_ids[i]][3])
        console.log("HEERE")
    }
})

$("#reused").click(function (e) {
    // generate_graph(swds_co2e, "swds", true, 1300, 700) 
})

generate_graph = function(json_data, graph_class, is_active, title, w, h, graph_type, y_label="", caption){
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
    
            if (graph_type == "line") {
                tester = document.getElementsByClassName("non-active " + graph_class)[0];
                const data = d3.csvParse(json_data,
                    function (d) {
                        return { year: d[Object.keys(d)[0]], value: d[Object.keys(d)[1]] }
                    })
                    
                // minDateYear = data[0].date.getFullYear();
                // maxDateYear = data[data.length - 1].date.getFullYear();
                // console.log(caption[0].text)
                // caption[0].text = caption[0].text.replace("[minimum year]", minDateYear)
                // caption[0].text = caption[0].text.replace("[maximum year]", maxDateYear)
                // svg
                //     .append("g")
                //     .attr("class", graph_class + "caption")
                //     .attr("transform", "translate( 0 ," + (height + margin.top + 30) + ")")

                year_array=[]
                value_array=[]
                
                for(i in data){
                    year_array.push(data[i].year)
                    value_array.push(data[i].value)
                   
                }


                var trace1 = {
                    x:year_array,
                    y:value_array,
                    name:data_dict[graph_class][1],
                    type:"scatter"
                }

                var layout = {
                    title: data_dict[graph_class][1],
                    // yaxis: {title: data_dict[graph_class][3]}
                    }

                var stackedData = [trace1];
                Plotly.newPlot(tester, stackedData, layout, {staticPlot: true});
        
                
            } else if (graph_type == "multiline"){
                console.log("graph type is active multiline")
                tester = document.getElementsByClassName("non-active " + graph_class)[0];
                const data = d3.csvParse(json_data,
                    function (d) {
                        return { year: d[Object.keys(d)[0]], value1: d[Object.keys(d)[1]], value2 : d[Object.keys(d)[2]]}
                    })
                // const data2 = d3.csvParse(json_data,
                //     function (d) {
                //         return { date: d3.timeParse("%Y")(d[Object.keys(d)[0]]), value: d[Object.keys(d)[2]] }
                //     })
                minDateYear = data[0].year
                maxDateYear = data[data.length - 1].year

                year_array=[]
                value1_array=[]
                value2_array=[]
                for(i in data){
                    year_array.push(data[i].year)
                    value1_array.push(data[i].value1)
                    value2_array.push(data[i].value2)
                }


                var trace1 = {
                    x:year_array,
                    y:value1_array,
                    name:"Annual Harvest",
                    type:"scatter"
                }
                
                var trace2 = {
                    x:year_array,
                    y:value2_array,
                    // yaxis: 'y2',
                    name:"Annual Timber Harvest",
                    type:"scatter"
                }

                var layout = {
                    title: 'Annual Harvest and Timber Product Outputs',
                    // yaxis: {title: 'Hundred Cubic Feet (CCF)'},
                    // yaxis2: {
                    //   title: 'Megagrams Carbon (Mg C)',
                    //   titlefont: {color: 'rgb(148, 103, 189)'},
                    //   tickfont: {color: 'rgb(148, 103, 189)'},
                    //   overlaying: 'y',
                    //   side: 'right'
                    // },
                    showlegend: false}

                var stackedData = [trace1, trace2];
                Plotly.newPlot(tester, stackedData, layout, {staticPlot: true});
            }
            
            else if (graph_type == "stack") {
                // console.log("this is a stack")
                tester = document.getElementsByClassName("non-active " + graph_class)[0];
                const data = d3.csvParse(json_data,
                    function (d) {
                            
                        return { year: d[Object.keys(d)[0]], value1: d[Object.keys(d)[1]], value2: d[Object.keys(d)[2]] }
                    })
                    console.log(data_json)
                minDateYear = data[0].year
                maxDateYear = data[data.length - 1].year

                year_array=[]
                value1_array=[]
                value2_array=[]
                for(i in data){
                    year_array.push(data[i].year)
                    value1_array.push(data[i].value1)
                    value2_array.push(data[i].value2)
                }

                var trace1 = {
                    x:year_array,
                    y:value1_array,
                    name:"Products in Use",
                    stackgroup: 'one'
                }
                
                var trace2 = {
                    x:year_array,
                    y:value2_array,
                    name:"SWDS",
                    stackgroup: 'one'
                }

                var layout = {
                    title: 'Total Carbon Stocks',
                    showlegend: false
                    // yaxis: {title: 'Megagrams Carbon (Mg C)'},
                    }

                var stackedData = [trace1, trace2];
                Plotly.newPlot(tester, stackedData, layout, {staticPlot: true});   
            } else {
                tester = document.getElementsByClassName("non-active " + graph_class)[0];
                const data = d3.csvParse(json_data,
                    function (d) {
                        return { year: d[Object.keys(d)[0]], products_in_use_change : d[Object.keys(d)[1]], SWDS_change: d[Object.keys(d)[2]] }
                    })

                year_array=[]
                prod_array=[]
                swds_array=[]
                for(i in data){
                    year_array.push(data[i].year)
                    prod_array.push(data[i].products_in_use_change)
                    swds_array.push(data[i].SWDS_change)
                }
                year_array = year_array.slice(0, -2)
                prod_array = prod_array.slice(0, -2)
                swds_array = swds_array.slice(0, -2)
                var trace1 = {
                    x:year_array,
                    y:prod_array,
                    name:"Change in Products in Use",
                    type:"bar"
                }
                
                var trace2 = {
                    x:year_array,
                    y:swds_array,
                    name:"Change in SWDS",
                    type:"bar"
                }

                stackedData = [trace1, trace2];
            

                var layout = {
                            barmode: 'relative',
                            // xaxis: {title:"Years"},
                            // yaxis: {title:"Megagrams C (Mg C)"},
                            title: "Annual Net Change Carbon Stocks",
                            showlegend: false};

                plot = Plotly.newPlot(tester, stackedData, layout, {staticPlot: true});
                
            }
            
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
        
            const margin = { top: 40, right: 80, bottom: 160, left: 80 },
                width = w - margin.left - margin.right,
                height = h - margin.top - margin.bottom;

            const valueline = d3
                .line()
                .x((d) => { return x(d.date); })
                .y((d) => { return y(d.value); })
       

            if (graph_type == "line") {
                
                tester = document.getElementsByClassName("active-graph " + graph_class)[0];
                const data = d3.csvParse(json_data,
                    function (d) {
                        return { year: d[Object.keys(d)[0]], value: d[Object.keys(d)[1]] }
                    })
                    
                // minDateYear = data[0].date.getFullYear();
                // maxDateYear = data[data.length - 1].date.getFullYear();
                // console.log(caption[0].text)
                // caption[0].text = caption[0].text.replace("[minimum year]", minDateYear)
                // caption[0].text = caption[0].text.replace("[maximum year]", maxDateYear)
                // svg
                //     .append("g")
                //     .attr("class", graph_class + "caption")
                //     .attr("transform", "translate( 0 ," + (height + margin.top + 30) + ")")

                year_array=[]
                value_array=[]
                
                for(i in data){
                    year_array.push(data[i].year)
                    value_array.push(data[i].value)
                }


                var trace1 = {
                    x:year_array,
                    y:value_array,
                    name:data_dict[graph_class][1],
                    type:"scatter"
                }
                
                

                var layout = {
                    title: data_dict[graph_class][1],
                    yaxis: {title: data_dict[graph_class][3]},
                    }

                var stackedData = [trace1];
                Plotly.newPlot(tester, stackedData, layout);
                                     
            } else if (graph_type == "multiline") {
                console.log("graph type is active multiline")
                tester = document.getElementsByClassName("active-graph " + graph_class)[0];
                const data = d3.csvParse(json_data,
                    function (d) {
                        return { year: d[Object.keys(d)[0]], value1: d[Object.keys(d)[1]], value2 : d[Object.keys(d)[2]]}
                    })
                // const data2 = d3.csvParse(json_data,
                //     function (d) {
                //         return { date: d3.timeParse("%Y")(d[Object.keys(d)[0]]), value: d[Object.keys(d)[2]] }
                //     })
                minDateYear = data[0].year
                maxDateYear = data[data.length - 1].year

                year_array=[]
                value1_array=[]
                value2_array=[]
                for(i in data){
                    year_array.push(data[i].year)
                    value1_array.push(data[i].value1)
                    value2_array.push(data[i].value2)
                }


                var trace1 = {
                    x:year_array,
                    y:value1_array,
                    name:"Annual Harvest",
                    type:"scatter"
                }
                
                var trace2 = {
                    x:year_array,
                    y:value2_array,
                    yaxis: 'y2',
                    name:"Annual Timber Harvest",
                    type:"scatter"
                }

                var layout = {
                    title: 'Annual Harvest and Timber Product Outputs',
                    yaxis: {title: 'Hundred Cubic Feet (CCF)'},
                    yaxis2: {
                      title: 'Megagrams Carbon (Mg C)',
                      titlefont: {color: 'rgb(148, 103, 189)'},
                      tickfont: {color: 'rgb(148, 103, 189)'},
                      overlaying: 'y',
                      side: 'right'
                    }}

                var stackedData = [trace1, trace2];
                Plotly.newPlot(tester, stackedData, layout);


                // caption[0].text = caption[0].text.replace("[minimum year]", minDateYear)
                // caption[0].text = caption[0].text.replace("[maximum year]", maxDateYear)
                // svg
                //     .append("g")
                //     .attr("class", graph_class + "caption")
                //     .attr("transform", "translate( 0 ," + (height + margin.top + 30) + ")")
                    

                
                
            }
            else if (graph_type == "stack") {
                // console.log("this is a stack")
                tester = document.getElementsByClassName("active-graph " + graph_class)[0];
                const data = d3.csvParse(json_data,
                    function (d) {
                            
                        return { year: d[Object.keys(d)[0]], value1: d[Object.keys(d)[1]], value2: d[Object.keys(d)[2]] }
                    })
                    console.log(data_json)
                minDateYear = data[0].year
                maxDateYear = data[data.length - 1].year

                year_array=[]
                value1_array=[]
                value2_array=[]
                for(i in data){
                    year_array.push(data[i].year)
                    value1_array.push(data[i].value1)
                    value2_array.push(data[i].value2)
                }

                var trace1 = {
                    x:year_array,
                    y:value1_array,
                    name:"Products in Use",
                    stackgroup: 'one'
                }
                
                var trace2 = {
                    x:year_array,
                    y:value2_array,
                    name:"SWDS",
                    stackgroup: 'one'
                }

                var layout = {
                    title: 'Total Carbon Stocks',
                    yaxis: {title: 'Megagrams Carbon (Mg C)'},
                    }

                var stackedData = [trace1, trace2];
                Plotly.newPlot(tester, stackedData, layout);   
    
            }
            else {
                console.log(json_data)
                console.log("graph type is active bar")
                tester = document.getElementsByClassName("active-graph " + graph_class)[0];
                const data = d3.csvParse(json_data,
                    function (d) {
                        return { year: d[Object.keys(d)[0]], products_in_use_change : d[Object.keys(d)[1]], SWDS_change: d[Object.keys(d)[2]] }
                    })

                year_array=[]
                prod_array=[]
                swds_array=[]
                for(i in data){
                    year_array.push(data[i].year)
                    prod_array.push(data[i].products_in_use_change)
                    swds_array.push(data[i].SWDS_change)
                }
                year_array = year_array.slice(0, -2)
                prod_array = prod_array.slice(0, -2)
                swds_array = swds_array.slice(0, -2)
                var trace1 = {
                    x:year_array,
                    y:prod_array,
                    name:"Change in Products in Use",
                    type:"bar"
                }
                
                var trace2 = {
                    x:year_array,
                    y:swds_array,
                    name:"Change in SWDS",
                    type:"bar"
                }

                stackedData = [trace1, trace2];
            

                var layout = {
                            barmode: 'relative',
                            xaxis: {title:"Years"},
                            yaxis: {title:"Megagrams C (Mg C)"},
                            title: "Annual Net Change Carbon Stocks"};

                plot = Plotly.newPlot(tester, stackedData, layout);

            }
            
            } else {
            console.log("I broke");
        }
        
    }



$(".non-active").click(function (e) {
    console.log($(e.target))
    console.log($(e.target).parent().parent())
    // console.log
    var non_active_div = $(e.target).parent().parent();
    var non_active_div_siblings = $(e.target).parent().parent().siblings()
    var current_tabs_active_graph_sibling = non_active_div.parent().closest('div');

    var current_tabs_active_graph = current_tabs_active_graph_sibling.siblings().closest('div');
    for(let i=0;i<non_active_div[0].classList.length;i++){
        if(non_active_div[0].classList[i] != "graph" && non_active_div[0].classList[i] != "js-plotly-plot" && non_active_div[0].classList[i] != "non-active"){
            non_active_id = non_active_div[0].classList[i]
        }
    }
    console.log(current_tabs_active_graph[0].classList)
    for(let i=0;i<current_tabs_active_graph[0].classList.length;i++){
        if(current_tabs_active_graph[0].classList[i] != "graph" && current_tabs_active_graph[0].classList[i] != "active-graph" && current_tabs_active_graph[0].classList[i] != "js-plotly-plot"){
            console.log(current_tabs_active_graph[0].classList[i])
            current_tabs_active_id = current_tabs_active_graph[0].classList[i]
        }
    }
    // current_tabs_active_id = current_tabs_active_graph[0].classList[current_tabs_active_graph[0].classList.length-2]
    console.log(non_active_id)
    console.log(current_tabs_active_id)
    current_tabs_active_graph[0].classList.remove(current_tabs_active_id);
    current_tabs_active_graph[0].classList.add(non_active_id);
    non_active_div[0].classList.remove(non_active_id);
    non_active_div[0].classList.add(current_tabs_active_id);
    generate_graph(data_dict[non_active_id][0],non_active_id,"active",data_dict[non_active_id][1],1300,700,data_dict[non_active_id][2], data_dict[non_active_id][3], captions_dict[non_active_id])
    generate_graph(data_dict[current_tabs_active_id][0],current_tabs_active_id,"inactive",data_dict[current_tabs_active_id][1],400,250,data_dict[current_tabs_active_id][2])
    
    if(non_active_div_siblings.length != 0){
        for(i = 0;i<non_active_div_siblings.length;i++){
            non_active_div_sibling_id = non_active_div_siblings[i].classList[non_active_div_siblings[i].classList.length-1]
            generate_graph(data_dict[non_active_div_sibling_id][0],non_active_div_sibling_id,"inactive",data_dict[non_active_div_sibling_id][1],400,250,data_dict[non_active_div_sibling_id][2])
        }
    }      
});

// $(document).ready(function () {
//     $("#singleYear").attr({
//         "min": minDateYear,
//         "max": maxDateYear,
//         "value": minDateYear
//     })

//     $("#startYear").attr({
//         "min": minDateYear,
//         "max": maxDateYear,
//         "value": minDateYear
//     })

//     $("#endYear").attr({
//         "min": minDateYear,
//         "max": maxDateYear,
//         "value": maxDateYear
//     })
// })

// Harvest Years Controls

$(function () {
    $("#blk-"+$("[name=harvestYears]:checked").val()).show();
    $("[name=harvestYears]").click(function(){
            $('.toHide').hide();
            $("#yearInput-"+$(this).val()).show('fast');
    });
});


// d3.select("#dl-closed").on('click', function () {
//     generate_graph(data_dict["total_dumps_carbon_emitted"][0], "total_dumps_carbon_emitted1", "hidden", data_dict["total_dumps_carbon_emitted"][1], 1300, 700, data_dict["total_dumps_carbon_emitted"][2]);
//     generate_graph(data_dict["total_landfills_carbon_emitted"][0], "total_landfills_carbon_emitted1", "hidden", data_dict["total_landfills_carbon_emitted"][1], 1300, 700, data_dict["total_landfills_carbon_emitted"][2]);
//     generate_graph(data_dict["total_composted_carbon_emitted"][0], "total_composted_carbon_emitted1", "hidden", data_dict["total_composted_carbon_emitted"][1], 1300, 700, data_dict["total_composted_carbon_emitted"][2]);


//     generate_graph(data_dict["annual_harvests_output"][0], "annual_harvests_output1", "hidden", data_dict["annual_harvests_output"][1], 1300, 700, data_dict["annual_harvests_output"][2]);
//     generate_graph(data_dict["end_use"][0], "end_use1", "hidden", data_dict["end_use"][1], 1300, 700, data_dict["end_use"][2]);
//      generate_graph(data_dict["annual_net_change_carbon_stocks"][0], "annual_net_change_carbon_stocks1", "hidden", data_dict["annual_net_change_carbon_stocks"][1], 1300, 700, data_dict["annual_net_change_carbon_stocks"][2]);
//     generate_graph(data_dict["burned_wo_energy_capture_emitted"][0], "burned_wo_energy_capture_emitted1", "hidden", data_dict["burned_wo_energy_capture_emitted"][1], 1300, 700, data_dict["burned_wo_energy_capture_emitted"][2]);
//     generate_graph(data_dict["burned_w_energy_capture_emitted"][0], "burned_w_energy_capture_emitted1", "hidden", data_dict["burned_w_energy_capture_emitted"][1], 1300, 700, data_dict["burned_w_energy_capture_emitted"][2]);
//     generate_graph(data_dict["total_fuelwood_carbon_emitted"][0], "total_fuelwood_carbon_emitted1", "hidden", data_dict["total_fuelwood_carbon_emitted"][1], 1300, 700, data_dict["total_fuelwood_carbon_emitted"][2]);

//     // generate_graph(data_dict["total_cumulative_carbon_stocks_co2e"][0], "total_cumulative_carbon_stocks_co2e1", "hidden", data_dict["total_cumulative_carbon_stocks_co2e"][1], 1300, 700, data_dict["total_cumulative_carbon_stocks_co2e"][2]);
//     //generate_graph(data_dict["total_dumps_carbon_co2e"][0], "total_dumps_carbon_co2e1", "hidden", data_dict["total_dumps_carbon_co2e"][1], 1300, 700, data_dict["total_dumps_carbon_co2e"][2]);
//     //generate_graph(data_dict["total_landfills_carbon_co2e"][0], "total_landfills_carbon_co2e1", "hidden", data_dict["total_landfills_carbon_co2e"][1], 1300, 700, data_dict["total_landfills_carbon_co2e"][2]);
    
   
        

// })
