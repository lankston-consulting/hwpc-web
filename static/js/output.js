output = {}

captions_dict = []
captions_dict["annual_harvest_and_timber_product_output"] = [{text:"Annual total timber harvest and product output converted to metric tons of carbon, from [minimum year] to [maximum year]."}]
captions_dict["annual_net_change_carbon_stocks"] =  [{text:"Total cumulative metric tons of carbon stocks in harvested wood products (HWP) manufactured from total timber harvested <br> from [minimum year] to [maximum year] using the IPCC Tier 3 Production Approach. Carbon in HWP includes both products that are still in <br> use and carbon stored at solid waste disposal sites (SWDS). Carbon emissions are displayed in units of carbon dioxide equivalent (CO2e) <br> and do not include other carbon-based greenhouse gases such as methane."}]
captions_dict["all_results_final"] = [{text:"Total cumulative metric tons of carbon stocks in harvested wood products (HWP) manufactured from total timber harvested from [minimum year] to [maximum year] using the IPCC Tier 3 Production Approach and Total cumulative metric tons carbon emitted with and without energy capture. Carbon in HWP includes both products that are still in use and carbon stored at solid waste disposal sites. Carbon emitted from discarded wood and paper products in landfills is decay without energy capture. Methane remediation from landfills that includes combustion and subsequent emissions with energy capture is not included. Carbon emissions are displayed in units of carbon dioxide equivalent (CO2e) and do not include other carbon-based greenhouse gases such as methane."}]
captions_dict["end_use"] = [{text:"Total cumulative metric tons carbon stored in End Use Products in Use manufactured from total timber harvested from [minimum year] to [maximum year]."}]
captions_dict["burned_with_energy_capture_emissions"] =  [{text:"Total cumulative metric ton carbon emitted from burning discarded products with energy capture manufactured from total <br> timber harvested from [minimum year] to [maximum year]. Discarded products are assumed to be burned in an incinerator with <br>  energy capture. Emitted carbon is displayed in units of carbon dioxide equivalent (CO2e) and do not include other <br>  carbon-based greenhouse gases such as methane."}]
captions_dict["burned_without_energy_capture_emissions"] =  [{text:"Total cumulative metric tons carbon emitted from burning discarded products without energy capture manufactured from total <br> timber harvested from [minimum year] to [maximum year]. Carbon emitted from burned discarded products is assumed to be emitted <br> without energy capture. Carbon emissions are displayed in units of carbon dioxide equivalent (CO2e) and do not include other <br> carbon-based greenhouse gases such as methane."}]
captions_dict["total_fuelwood_carbon_emitted"] =  [{text:"Total cumulative metric tons carbon emitted from fuelwood and wood waste used for fuel with energy capture from total timber <br> harvested from [minimum year] to [maximum year]. Carbon emitted from burning fuelwood and wood waste with energy capture <br> occurs during the year of harvest and is not assumed to substitute for an equivalent amount of fossil fuel carbon. Carbon <br>  emissions are displayed in units of carbon dioxide equivalent (CO2e) and do not include other carbon-based greenhouse <br>  gases such as methane."}]
captions_dict["total_cumulative_carbon_stocks"] =  [{text:"Total cumulative metric tons of carbon stocks in harvested wood products (HWP) manufactured from total timber harvested from <br> [minimum year] to [maximum year] using the IPCC Tier 3 Production Approach. Carbon in HWP includes both products that are <br> still in use and carbon stored at solid waste disposal sites (SWDS)."}]
captions_dict["total_dumps_carbon"] =  [{text:"Total cumulative metric tons carbon stored in dumps from discarded products manufactured from total timber harvested from <br> [minimum year] to [maximum year]. Carbon in dumps include discarded wood and paper products and comprise a portion of <br> the solid waste disposal site pool. Prior to 1970, wood and paper waste was generally discarded to dumps, as opposed to <br> modern landfills. Carbon emissions are displayed in units of carbon dioxide equivalent (CO2e) and do not include other <br> carbon-based greenhouse gases such as methane."}]
captions_dict["total_landfills_carbon"] =  [{text:"Total cumulative metric tons carbon stored in landfills from discarded products manufactured from total timber harvested <br> from [minimum year] to [maximum year]. Carbon in landfills are discarded wood and paper products and comprise a portion <br>  of the solid waste disposal site pool. Carbon emissions are displayed in units of carbon dioxide equivalent (CO2e) <br> and do not include other carbon-based greenhouse gases such as methane."}]
captions_dict["total_dumps_carbon_emitted"] =  [{text:"Total cumulative metric tons carbon emitted from discarded products in dumps manufactured from total timber harvested from <br> [minimum year] to [maximum year]. Carbon emitted from discarded wood and paper products in dumps is decay without <br> energy capture. Prior to 1970 wood and paper waste was generally discarded to dumps, where it was subject to higher <br> rates of decay than in modern landfills. Carbon emissions are displayed in units of carbon dioxide equivalent (CO2e) <br> and do not include other carbon-based greenhouse gases such as methane."}]
captions_dict["total_composted_carbon_emitted"] = [{text:"Total cumulative metric tons carbon emitted from composted discarded harvested wood products manufactured from total <br>  timber harvested from [minimum year] to [maximum year]. No carbon storage is associated with composted discarded <br> products and all composted carbon is decay emitted without energy capture. Carbon emissions are displayed in units of <br> carbon dioxide equivalent (CO2e) and do not include other greenhouse gases such as methane."}]
captions_dict["total_landfills_carbon_emitted"] =  [{text:"Total cumulative metric tons carbon emitted from discarded products in landfills manufactured from total timber harvested <br> from [minimum year] to [maximum year]. Carbon emitted from discarded wood and paper products in landfills is <br> decay without energy capture. Methane remediation from landfills that includes combustion and subsequent emissions with <br> energy capture is not included. Carbon emissions are displayed in units of carbon dioxide equivalent (CO2e) and do not <br> include other carbon-based greenhouse gases such as methane."}]
captions_dict["total_solid_carbon_dispositions"] = [{text:"Total cumulative metric tons carbon stored in end-use products in use, in landfills from discarded products, and in dumps from discarded products manufactured from total timber harvested from [minimum year] to [maximum year]. The recalcitrance of carbon in harvested wood products is highly dependent upon the end use of those products.  The carbon remaining in the end-use products in use pool in a given inventory year includes products in use and recovered products. Carbon in landfills and dumps are discarded wood and paper products, and comprise a portion of the solid waste disposal site pool. Prior to 1970, wood and paper waste was generally discarded to dumps, as opposed to modern landfills."}]
captions_dict["total_emissions_dispositions"] = [{text: "Total cumulative metric tons carbon emitted from fuelwood and wood waste used for fuel with energy capture, burning discarded products with and without energy capture, composted discarded harvested wood products, and discarded products in dumps and landfills manufactured from total timber harvested from [minimum year] to [maximum year]. Carbon emitted from burning fuelwood and wood waste with energy capture occurs during the year of harvest and is not assumed to substitute for an equivalent amount of fossil fuel carbon. Discarded burned products are assumed to be burned in an incinerator with energy capture. No carbon storage is associated with composted discarded products and all composted carbon is decay emitted without energy capture. Carbon emitted from discarded wood and paper products in dumps and landfills is decay without energy capture. Prior to 1970 wood and paper waste was generally discarded to dumps, where it was subject to higher rates of decay than in modern landfills. Carbon emissions are displayed in units of carbon dioxide equivalent (CO2e) and do not include other carbon-based greenhouse gases such as methane."}]
captions_dict["swds_emissions"] = [{text: "Total cumulative metric tons carbon emitted from discarded products in landfills and dumps manufactured from total timber harvested from [minimum year] to [maximum year]. Carbon emitted from discarded wood and paper products in landfills and dumps is decay without energy capture. Methane remediation from landfills that includes combustion and subsequent emissions with energy capture is not included. Prior to 1970 wood and paper waste was generally discarded to dumps, where it was subject to higher rates of decay than in modern landfills. Carbon emissions are displayed in units of carbon dioxide equivalent (CO2e) and do not include other carbon-based greenhouse gases such as methane."}]

output.initialize = function(input_json) {
    data_json=input_json;
    data_json = data_json.replace(/\n/g, '\\n')
    final_json = JSON.parse(data_json)
    data_dict = []
    data_dict["annual_harvest_and_timber_product_output"] = [final_json.annual_harvest_and_timber_product_output,"Annual Harvest and Timber Products","multiline","Hundred Cubic Feet (CCF)"]
    data_dict["annual_net_change_carbon_stocks"] = [final_json.annual_net_change_carbon_stocks, "Annual Net Change Carbon Stocks", "bar","Megagrams Carbon (Mg C)"]
    data_dict["all_results_final"] = [final_json.big_four,"Final Results","stack","Megagrams Carbon (Mg C)"]
    // data_dict["annual_harvests_output"] = [final_json.harvest_data,"Annual Total Harvest","line"]
    data_dict["burned_with_energy_capture_emissions"] = [final_json.burned_w_energy_capture_emit, "Total Carbon Burned With Energy Capture", "line","Carbon Emissions (CO2e)"]
    data_dict["burned_without_energy_capture_emissions"] = [final_json.burned_wo_energy_capture_emit, "Total Carbon Burned Without Energy Capture", "line","Carbon Emissions (CO2e)"]
    
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
    data_dict["total_solid_carbon_dispositions"] = [final_json.carbon_present_distinct_swds,"Total Solid Carbon Dispositions", "stack", "Megagrams Carbon (Mg C)"]
    data_dict["swds_emissions"] = [final_json.carbon_emitted_distinct_swds, "Total Emissions Dispositions", "stack", "Carbon Emissions (CO2e)"]
    data_dict["total_emissions_dispositions"] = [final_json.emitted_all, "Total Emissions", "stack", "Carbon Emissions (CO2e)"]
    
    data_dict["annual_timber_harvest_table"] = [final_json.annual_harvest_and_timber_product_output, "Annual Timber Product Output", "table", ""]
    
}

$("#defaultOpen").click(function (e) {
    active_id = $("#coolFlashyTabContent").children()[0].classList[$("#coolFlashyTabContent").children()[0].classList.length-1]
    inactive = $("#coolFlashyTabContent").children()[1].children
    inactive_ids =[]
    for(let i=0;i<$("#coolFlashyTabContent").children()[1].children.length;i++){
        inactive_ids.push($("#coolFlashyTabContent").children()[1].children[i].classList[$("#coolFlashyTabContent").children()[1].children[i].classList.length-1])
    }
    generate_graph(data_dict[active_id][0],active_id,"active",data_dict[active_id][1], 1300 , 700, data_dict[active_id][2], data_dict[active_id][3],captions_dict[active_id])
    for(let i=0;i<inactive_ids.length;i++){
        generate_graph(data_dict[inactive_ids[i]][0],inactive_ids[i],"inactive",data_dict[inactive_ids[i]][1], 400 , 250, data_dict[inactive_ids[i]][2], data_dict[inactive_ids[i]][3])
    }
})
$("#solidCarbon").click(function(e){
    active_id = $("#solidCarbonContent").children()[0].classList[$("#solidCarbonContent").children()[0].classList.length-1]
    inactive = $("#solidCarbonContent").children()[1].children
    inactive_ids =[]
    for(let i=0;i<$("#solidCarbonContent").children()[1].children.length;i++){
        inactive_ids.push($("#solidCarbonContent").children()[1].children[i].classList[$("#solidCarbonContent").children()[1].children[i].classList.length-1])
    }
    generate_graph(data_dict[active_id][0],active_id,"active",data_dict[active_id][1], 1300 , 700, data_dict[active_id][2], data_dict[active_id][3],captions_dict[active_id])
    for(let i=0;i<inactive_ids.length;i++){
        generate_graph(data_dict[inactive_ids[i]][0],inactive_ids[i],"inactive",data_dict[inactive_ids[i]][1], 400 , 250, data_dict[inactive_ids[i]][2], data_dict[inactive_ids[i]][3])
    }
    
})
$("#emissions").click(function(e){
    active_id = $("#emissionsContent").children()[0].classList[$("#emissionsContent").children()[0].classList.length-1]
    inactive = $("#emissionsContent").children()[1].children
    inactive_ids =[]
    for(let i=0;i<$("#emissionsContent").children()[1].children.length;i++){
        inactive_ids.push($("#emissionsContent").children()[1].children[i].classList[$("#emissionsContent").children()[1].children[i].classList.length-1])
    }
    generate_graph(data_dict[active_id][0],active_id,"active",data_dict[active_id][1], 1300 , 700, data_dict[active_id][2], data_dict[active_id][3],captions_dict[active_id])
    for (let i=0;i<inactive_ids.length;i++){
        // console.log(inactive_ids[i])
        generate_graph(data_dict[inactive_ids[i]][0],inactive_ids[i],"inactive",data_dict[inactive_ids[i]][1], 400 , 250, data_dict[inactive_ids[i]][2], data_dict[inactive_ids[i]][3])
    }
})

$("#reused").click(function(e){
    active_id = $("#reusedContent").children()[0].classList[$("#reusedContent").children()[0].classList.length-1]
    inactive = $("#reusedContent").children()[1].children
    inactive_ids =[]
    for(let i=0;i<$("#reusedContent").children()[1].children.length;i++){
        inactive_ids.push($("#reusedContent").children()[1].children[i].classList[$("#reusedContent").children()[1].children[i].classList.length-1])
    }
    generate_graph(data_dict[active_id][0],active_id,"active",data_dict[active_id][1], 1300 , 700, data_dict[active_id][2], data_dict[active_id][3],captions_dict[active_id])
    for(let i=0;i<inactive_ids.length;i++){
        generate_graph(data_dict[inactive_ids[i]][0],inactive_ids[i],"inactive",data_dict[inactive_ids[i]][1], 400 , 250, data_dict[inactive_ids[i]][2], data_dict[inactive_ids[i]][3])
    }
})

$("#reused").click(function (e) {
    // generate_graph(swds_co2e, "swds", true, 1300, 700) 
})

generate_graph = function(json_data, graph_class, is_active, title, w, h, graph_type, y_label="", caption){
    var parseDate = d3.timeFormat("%Y");
        if (is_active == "inactive") {
            // $("." + graph_class).html("")
            // const margin = { top: 30, right: 10, bottom: 30, left: 60 },
            //     width = w - margin.left - margin.right,
            //     height = h - margin.top - margin.bottom;
        
            // const x = d3.scaleTime().range([0, width]);
            // const y = d3.scaleLinear().range([height, 0]);
    
            if (graph_type == "line") {
                tester = document.getElementsByClassName("non-active " + graph_class)[0];
                const data = d3.csvParse(json_data)
                    
                // minDateYear = data[0].date
                // maxDateYear = data[data.length - 1].date
                // caption[0].text = caption[0].text.replace("[minimum year]", minDateYear)
                // caption[0].text = caption[0].text.replace("[maximum year]", maxDateYear)
                // svg
                //     .append("g")
                //     .attr("class", graph_class + "caption")
                //     .attr("transform", "translate( 0 ," + (height + margin.top + 30) + ")")

                year_array=[]
                value_array=[]
                
                for(i in data){
                    year_array.push(data[i][data.columns[0]])
                    value_array.push(data[i][data.columns[1]])
                }


                var trace1 = {
                    x:year_array,
                    y:value_array,
                    name:data_dict[graph_class][1],
                    type:"scatter"
                }
                var stackedData = [trace1];
                var layout = {
                    title: title,
                    height: 350, 
                    responsive: true,
                    // yaxis: {title: 'Hundred Cubic Feet (CCF)'},
                    // yaxis2: {
                    //   title: 'Megagrams Carbon (Mg C)',
                    //   titlefont: {color: 'rgb(148, 103, 189)'},
                    //   tickfont: {color: 'rgb(148, 103, 189)'},
                    //   overlaying: 'y',
                    //   side: 'right'
                    // },
                    showlegend: false}
                
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
                    height: 350, 
                    responsive: true,
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
                const data = d3.csvParse(json_data)
                // keys = Object.keys(data[0])
                // minDateYear = data[0].keys[0]
                // maxDateYear = data[data.length - 1].keys[0]
                // caption[0].text = caption[0].text.replace("[minimum year]", minDateYear)
                // caption[0].text = caption[0].text.replace("[maximum year]", maxDateYear)
                stackedData = []
                year_data = []
                emissions_present = false
                solid_present = false
                for(i in data.columns){
                    if(data.columns[i].includes("emit")){
                        emissions_present = true
                    }
                    if(!data.columns[i].includes("emit") && !data.columns[i].includes("Year")){
                        solid_present = true
                    }
                }
                for(i in data.columns){
                    column = data.columns[i]
                    if(i == 0){
                        for(j in data){
                            year_data.push(data[j][column])
                        }
                    }
                    else{

                        
                        temp=[]
                        for(j in data){
                            temp.push(data[j][column])
                        }
                        if(column == "products_in_use"){
                            y_name = "Products in Use"
                        }
                        if(column == "SWDS"){
                            y_name = "SWDS"
                        }
                        if(column == "emitted_w_energy_capture"){
                            y_name = "Emitted with Energy Capture"
                        }
                        if(column == "emitted_wo_energy_capture"){
                            y_name = "Emitted without Energy Capture"
                        }
                        if(column == "Fuel_emitted_co2e"){
                            y_name = "Fuelwood Emissions"
                        }
                        if(column == "Composted_emitted_co2e"){
                            y_name = "Compost Emissions"
                        }
                        if(column == "Dumps_emitted_mgc"){
                            y_name = "Dump Emissions"
                        }
                        if(column == "Dumps_emitted_co2e"){
                            y_name = "Dump Emissions"
                        }
                        if(column == "Landfills_emitted_co2e"){
                            y_name = "Landfill Emissions"
                        }
                        if(emissions_present==true && solid_present == false){
                            if(column.includes("emit")){
                                var temp_trace = {
                                    x:year_data,
                                    y:temp,
                                    name:y_name,
                                    stackgroup: 'one'
                                }
                            }
                        }
                        if(emissions_present == true && solid_present == true){
                            if(column.includes("emit")){
                                var temp_trace = {
                                    x:year_data,
                                    y:temp,
                                    yaxis: 'y2',
                                    name:y_name,
                                    stackgroup: 'one'
                                }
                            }else{
                                var temp_trace = {
                                    x:year_data,
                                    y:temp,
                                    name:y_name,
                                    stackgroup: 'one'
                                }
                            }
                        }
                        if(emissions_present == false && solid_present == true){
                            var temp_trace = {
                                x:year_data,
                                y:temp,
                                name:y_name,
                                stackgroup: 'one'
                            }
                        }
                        stackedData.push(temp_trace)
                    }
                    
                }

                    
                temp_cap = " This is a temporary caption, please get me data."
                //caption[0].text
                if(data.columns.includes("emitted")){
                    console.log("hello")
                }

                if(emissions_present==true && solid_present == false){
                    var layout = {
                        title: title,
                        showlegend: false
                        // xaxis: {title:"Years<br><sup>"+temp_cap+"</sup>"},
                        // yaxis: {title: 'Carbon Emissions (CO2e)'},
                        }
                }
                if(emissions_present == true && solid_present == true){
                    var layout = {
                        title: title,
                        autosize: true, 
                        showlegend: false,
                        // xaxis: {title:"Years<br><sup>"+temp_cap+"</sup>"},
                        // yaxis: {title: 'Megagrams Carbon (Mg C)'},
                        yaxis2: {
                            // title: 'Carbon Emissions (CO2e)',
                            // titlefont: {color: 'rgb(148, 103, 189)'},
                            // tickfont: {color: 'rgb(148, 103, 189)'},
                            overlaying: 'y',
                            side: 'right'
                          }
                        }
                }
                if(emissions_present == false && solid_present == true){
                    var layout = {
                        title: title,
                        showlegend: false
                        // xaxis: {title:"Years<br><sup>"+temp_cap+"</sup>"},
                        // yaxis: {title: 'Megagrams Carbon (Mg C)'},
                        }
                }
                

                // var stackedData = [trace1, trace2];
                // Plotly.newPlot(tester, stackedData, layout);  
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
                    height: 350, 
                    responsive: true,
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
                        return { date: d3.timeParse("%Y")(d[Object.keys(d)[0]]), value1: d[Object.keys(d)[1]], value2: d[Object.keys(d)[1]] }
                    })
                     
                        
        
                var area = d3.area()
                    .x(function (d) { return x(d.date); })
                    .y0(function (d) { return y(d.value1); })
                    .y1(function (d) { return y(d.value2); })
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

                     
                    
            } else if (graph_type == "bar") {
                console.log("graph type is active bar")
            } else {
                console.log("This is a table")
                 
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
                const data = d3.csvParse(json_data)
                    
                minDateYear = data[0].date
                maxDateYear = data[data.length - 1].date
                caption[0].text = caption[0].text.replace("[minimum year]", minDateYear)
                caption[0].text = caption[0].text.replace("[maximum year]", maxDateYear)
                // svg
                //     .append("g")
                //     .attr("class", graph_class + "caption")
                //     .attr("transform", "translate( 0 ," + (height + margin.top + 30) + ")")

                year_array=[]
                value_array=[]
                
                for(i in data){
                    year_array.push(data[i][data.columns[0]])
                    value_array.push(data[i][data.columns[1]])
                }


                var trace1 = {
                    x:year_array,
                    y:value_array,
                    name:data_dict[graph_class][1],
                    type:"scatter"
                }
                
                

                var layout = {
                    title: data_dict[graph_class][1],
                    xaxis: {title:"Years<br><sup>"+caption[0].text+"</sup>"},
                    yaxis: { title: data_dict[graph_class][3] },
                    automargin: true,
                    height: 700,
                    margin: { l: 100, r: 50, b: 100, t: 100, pad: 4 }, 
                    responsive: true
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
                caption[0].text = caption[0].text.replace("[minimum year]", minDateYear)
                caption[0].text = caption[0].text.replace("[maximum year]", maxDateYear)

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
                    xaxis: { title: "Years<br><br>" + caption[0].text },
                    yaxis: { title: 'Hundred Cubic Feet (CCF)' },
                    yaxis2: {
                        title: 'Megagrams Carbon (Mg C)',
                        titlefont: { color: 'rgb(148, 103, 189)' },
                        tickfont: { color: 'rgb(148, 103, 189)' },
                        overlaying: 'y',
                        side: 'right'
                    },
                    automargin: true,
                    height: 700,
                    margin: { l: 100, r: 50, b: 100, t: 100, pad: 4 }, 
                    responsive: true
                };

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
                tester = document.getElementsByClassName("active-graph " + graph_class)[0];
                const data = d3.csvParse(json_data)
                // keys = Object.keys(data[0])
                // minDateYear = data[0].keys[0]
                // maxDateYear = data[data.length - 1].keys[0]
                // caption[0].text = caption[0].text.replace("[minimum year]", minDateYear)
                // caption[0].text = caption[0].text.replace("[maximum year]", maxDateYear)
                stackedData = []
                year_data = []
                emissions_present = false
                solid_present = false
                for(i in data.columns){
                    if(data.columns[i].includes("co2e")){
                        emissions_present = true
                    }
                    if(!data.columns[i].includes("co2e") && !data.columns[i].includes("Year")){
                        solid_present = true
                    }
                }
                console.log(emissions_present)
                console.log(solid_present)
                for(i in data.columns){
                    column = data.columns[i]
                    console.log(column)
                    if(i == 0){
                        for(j in data){
                            year_data.push(data[j][column])
                        }
                    }
                    else{
                        temp=[]
                        for(j in data){
                            temp.push(data[j][column])
                        }
                        if(column == "products_in_use"){
                            y_name = "Products in Use"
                        }
                        if(column == "products_in_use_present_co2e"){
                            y_name = "Products in Use"
                        }
                        if(column == "SWDS"){
                            y_name = "SWDS"
                        }
                        if(column == "SWDS_present_co2e"){
                            y_name = "SWDS" 
                        }
                        if(column == "emitted_w_energy_capture_emitted_co2e"){
                            y_name = "Emitted with <br>Energy Capture"
                        }
                        if(column == "emitted_w_energy_capture"){
                            y_name = "Emitted with <br>Energy Capture"
                        }
                        if(column == "emitted_wo_energy_capture"){
                            y_name = "Emitted without <br>Energy Capture"
                        }
                        if(column == "emitted_wo_energy_capture_emitted_co2e"){
                            y_name = "Emitted without <br>Energy Capture"
                        }
                        if(column == "Fuel_emitted_co2e"){
                            y_name = "Fuelwood Emissions"
                        }
                        if(column == "Composted_emitted_co2e"){
                            y_name = "Compost Emissions"
                        }
                        if(column == "Dumps_emitted_mgc"){
                            y_name = "Dump Emissions"
                        }
                        if(column == "Dumps_emitted_co2e"){
                            y_name = "Dump Emissions"
                        }
                        if(column == "Landfills_emitted_co2e"){
                            y_name = "Landfill Emissions"
                        }
                        if(column == "Dumps_present_mgc"){
                            y_name = "Carbon in Dumps"
                        }
                        if(column == "Landfills_present_mgc"){
                            y_name = "Carbon in Landfills"
                        }
                        if(emissions_present==true && solid_present == false){
                   
                            
                            var temp_trace = {
                                x:year_data,
                                y:temp,
                                name:y_name,
                                stackgroup: 'one'
                            }
                            
                        }
                        if(emissions_present == true && solid_present == true){
                           
                            if(column.includes("emit")){
                                var temp_trace = {
                                    x:year_data,
                                    y:temp,
                                    yaxis: 'y2',
                                    name:y_name,
                                    stackgroup: 'one'
                                }
                            }else{
                                var temp_trace = {
                                    x:year_data,
                                    y:temp,
                                    name:y_name,
                                    stackgroup: 'one'
                                }
                            }
                        }
                        if(emissions_present == false && solid_present == true){
                            var temp_trace = {
                                x:year_data,
                                y:temp,
                                name:y_name,
                                stackgroup: 'one'
                            }
                        }
                        stackedData.push(temp_trace)
                    }
                    
                }

                    
                

                if(emissions_present==true && solid_present == false){
                    var layout = {
                        title: title,
                        xaxis: {title:"Years<br><sup>"+caption[0].text+"</sup>"},
                        yaxis: { title: 'Carbon Emissions (CO2e)' },
                        automargin: true,
                        height: 700,
                        margin: { l: 100, r: 50, b: 100, t: 100, pad: 4 },
                        responsive: true,
            
                        }
                }
                if(emissions_present == true && solid_present == true){
                    var layout = {
                        title: title,
                        autosize: true, 
                        xaxis: {title:"Years<br><sup>"+caption[0].text+"</sup>"},
                        yaxis: {title: 'Megagrams Carbon (Mg C)'},
                        yaxis2: {
                            title: 'Carbon Emissions (CO2e)',
                            // titlefont: {color: 'rgb(148, 103, 189)'},
                            // tickfont: {color: 'rgb(148, 103, 189)'},
                            overlaying: 'y',
                            side: 'right'
                        },
                        automargin: true,
                        height: 700,
                        margin: { l: 100, r: 55, b: 100, t: 100, pad: 4 },
                        responsive: true,
                        legend: {x: 1.05, y: 1}
                        }
                }
                if(emissions_present == false && solid_present == true){
                    var layout = {
                        title: title,
                        xaxis: {title:"Years<br><sup>"+caption[0].text+"</sup>"},
                        yaxis: { title: 'Megagrams Carbon (Mg C)' },
                        automargin: true,
                        height: 700,
                        margin: { l: 100, r: 50, b: 100, t: 100, pad: 4 },
                        responsive: true
                        }
                }

                

                // var stackedData = [trace1, trace2];
                Plotly.newPlot(tester, stackedData, layout);   
    
            }
            else {
               
                console.log("graph type is active bar")
                tester = document.getElementsByClassName("active-graph " + graph_class)[0];
                const data = d3.csvParse(json_data,
                    function (d) {
                        return { year: d[Object.keys(d)[0]], products_in_use_change : d[Object.keys(d)[1]], SWDS_change: d[Object.keys(d)[2]] }
                    })

                minDateYear = data[0].year
                maxDateYear = data[data.length - 1].year
                caption[0].text = caption[0].text.replace("[minimum year]", minDateYear)
                caption[0].text = caption[0].text.replace("[maximum year]", maxDateYear)

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
                            xaxis: { title: "Years<br><br>" + caption[0].text },
                            yaxis: {title:"Megagrams C (Mg C)"},
                            title: "Annual Net Change Carbon Stocks",
                            automargin: true,
                            height: 700,
                            margin: { l: 100, r: 50, b: 150, t: 100, pad: 4 }, 
                            responsive: true};
             
                
                plot = Plotly.newPlot(tester, stackedData, layout);

            }
            
            } else {
            console.log("I broke");
        }
        
    }

generate_table = function (json_data, table_class) {
        
    tester = document.getElementsByClassName("hidden " + table_class)[0];
    console.log("hello")
                     
    // var data = d3.csvParse(json_data, function (d) { return process_data(d) } );
    var data = d3.csvParse(json_data)
    process_data(data)
        function process_data(rows) {

            function unpack(rows,key) {
                console.log(rows)
                
                return rows.map(function (row) {return row[key];});
            }
                  
            
            var headerNames = Object.keys(rows[0]);
            console.log(headerNames)
                    
            var headerColor = "grey";
            var rowEvenColor = "lightgrey";
            var rowOddColor = "white";
                  
            var headerValues = [];
            var cellValues = [];
            for (i = 0; i < headerNames.length; i++) {
                headerValue = [headerNames[i]];
                headerValues[i] = headerValue;
                cellValue = unpack(rows, headerNames[i]);
                cellValues[i] = cellValue;
            }
                  
            // clean date
            for (i = 0; i < cellValues[1].length; i++) {
                var dateValue = cellValues[1][i].split(' ')[0]
                cellValues[1][i] = dateValue
            }
            console.log(cellValues)
                  
            var data_layout = [{
                type: 'table',
                columnwidth: [150, 600, 1000, 900, 600, 500, 1000, 1000, 1000],
                columnorder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                header: {
                    values: headerValues,
                    align: "center",
                    line: { width: 1, color: 'rgb(50, 50, 50)' },
                    fill: { color: headerColor },
                    font: { family: "Arial", size: 12, color: "white" }
                },
                cells: {
                    values: cellValues,
                    align: ["center", "center"],
                    line: { color: "black", width: 1 },
                    fill: {
                        color: [[rowOddColor, rowEvenColor, rowOddColor,
                            rowEvenColor, rowOddColor]]
                    },
                    font: { family: "Arial", size: 9, color: ["black"] }
                }
            }]
                  
            var layout = {
                title: "Insert Table Title Here",
            }
                  
            Plotly.newPlot(tester, data_layout, layout);
        }
}

$(".non-active").click(function (e) {
 
    var non_active_div = $(e.target).parent().parent();
    var non_active_div_siblings = $(e.target).parent().parent().siblings()
    var current_tabs_active_graph_sibling = non_active_div.parent().closest('div');

    var current_tabs_active_graph = current_tabs_active_graph_sibling.siblings().closest('div');
    for(let i=0;i<non_active_div[0].classList.length;i++){
        if(non_active_div[0].classList[i] != "graph" && non_active_div[0].classList[i] != "js-plotly-plot" && non_active_div[0].classList[i] != "non-active"){
            non_active_id = non_active_div[0].classList[i]
        }
    }

    for(let i=0;i<current_tabs_active_graph[0].classList.length;i++){
        if(current_tabs_active_graph[0].classList[i] != "graph" && current_tabs_active_graph[0].classList[i] != "active-graph" && current_tabs_active_graph[0].classList[i] != "js-plotly-plot"){
            console.log(current_tabs_active_graph[0].classList[i])
            current_tabs_active_id = current_tabs_active_graph[0].classList[i]
        }
    }
    // current_tabs_active_id = current_tabs_active_graph[0].classList[current_tabs_active_graph[0].classList.length-2]
    current_tabs_active_graph[0].classList.remove(current_tabs_active_id);
    current_tabs_active_graph[0].classList.add(non_active_id);
    non_active_div[0].classList.remove(non_active_id);
    non_active_div[0].classList.add(current_tabs_active_id);
    console.log(current_tabs_active_id)
    generate_graph(data_dict[non_active_id][0],non_active_id,"active",data_dict[non_active_id][1],1300,700,data_dict[non_active_id][2], data_dict[non_active_id][3], captions_dict[non_active_id])
    generate_graph(data_dict[current_tabs_active_id][0],current_tabs_active_id,"inactive",data_dict[current_tabs_active_id][1],400,250,data_dict[current_tabs_active_id][2])
    // console.log(non_active_div_sibling_id)
    if(non_active_div_siblings.length != 0){
        for(i = 0;i<non_active_div_siblings.length;i++){
            // non_active_div_sibling_id = non_active_div_siblings[i].classList[non_active_div_siblings[i].classList.length-1]
            for(let j=0;j<non_active_div_siblings[i].classList.length;j++){
                console.log(non_active_div_siblings[i].classList[j])
                if(non_active_div_siblings[i].classList[j] != "graph" && non_active_div_siblings[i].classList[j] != "js-plotly-plot" && non_active_div_siblings[i].classList[j] != "non-active"){
                    non_active_div_sibling_id = non_active_div_siblings[i].classList[j]
                }
            }
            
            console.log(non_active_div_sibling_id)
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


d3.select("#dl-closed").on('click', function () {
    generate_table(data_dict["annual_timber_harvest_table"][0], "annual_timber_harvest_table")
});
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
