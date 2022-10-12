output = {};

captions_dict = [];
data_bucket = "";
data_file_name = "";
harvestmaxDateYear = "";
harvestminDateYear = "";
captions_dict["annual_harvest_and_timber_product_output"] = [
  {
    text: "Annual total timber harvest and product output converted to metric tons of carbon, from [minimum year] to [maximum year].",
  },
];
captions_dict["annual_net_change_carbon_stocks"] = [
  {
    text: "Total cumulative metric tons of carbon stocks in harvested wood products (HWP) manufactured from total timber harvested from [minimum year] to [maximum year] using the IPCC Tier 3 Production Approach. <br> Carbon in HWP includes both products that are still in use and carbon stored at solid waste disposal sites (SWDS). Carbon emissions are displayed <br> in units of carbon dioxide equivalent (CO2e) and do not include other carbon-based greenhouse gases such as methane.",
  },
];
captions_dict["all_results_final"] = [
  {
    text: "Total cumulative metric tons of carbon stocks in harvested wood products (HWP) manufactured from total timber harvested from [minimum year] to [maximum year] using the IPCC Tier 3 Production Approach and <br> Total cumulative metric tons carbon emitted with and without energy capture. Carbon in HWP includes both products that are still in use and carbon stored at solid waste disposal sites. Carbon emitted from discarded <br> wood and paper products in landfills is decay without energy capture. Methane remediation from landfills that includes combustion and subsequent emissions with energy capture is not included. <br> Carbon emissions are displayed in units of carbon dioxide equivalent (CO2e) and do not include other carbon-based greenhouse gases such as methane.",
  },
];
captions_dict["end_use"] = [
  {
    text: "Total cumulative metric tons carbon stored in End Use Products in Use manufactured from total timber harvested from [minimum year] to [maximum year].",
  },
];
captions_dict["burned_with_energy_capture_emissions"] = [
  {
    text: "Total cumulative metric ton carbon emitted from burning discarded products with energy capture manufactured from total timber harvested from [minimum year] to [maximum year]. <br> Discarded products are assumed to be burned in an incinerator with energy capture. Emitted carbon is displayed in units of carbon dioxide equivalent (CO2e) <br> and do not include other carbon-based greenhouse gases such as methane.",
  },
];
captions_dict["burned_without_energy_capture_emissions"] = [
  {
    text: "Total cumulative metric tons carbon emitted from burning discarded products without energy capture manufactured from total timber harvested from [minimum year] to [maximum year]. <br> Carbon emitted from burned discarded products is assumed to be emitted without energy capture. Carbon emissions are displayed in units of carbon dioxide equivalent (CO2e) <br> and do not include other carbon-based greenhouse gases such as methane.",
  },
];
captions_dict["total_cumulative_carbon_stocks"] = [
  {
    text: "Total cumulative metric tons of carbon stocks in harvested wood products (HWP) manufactured from total timber harvested from <br> [minimum year] to [maximum year] using the IPCC Tier 3 Production Approach. Carbon in HWP includes both products that are <br> still in use and carbon stored at solid waste disposal sites (SWDS).",
  },
];
captions_dict["total_dumps_carbon"] = [
  {
    text: "Total cumulative metric tons carbon stored in dumps from discarded products manufactured from total timber harvested from <br> [minimum year] to [maximum year]. Carbon in dumps include discarded wood and paper products and comprise a portion of <br> the solid waste disposal site pool. Prior to 1970, wood and paper waste was generally discarded to dumps, as opposed to <br> modern landfills. Carbon emissions are displayed in units of carbon dioxide equivalent (CO2e) and do not include other <br> carbon-based greenhouse gases such as methane.",
  },
];
captions_dict["total_landfills_carbon"] = [
  {
    text: "Total cumulative metric tons carbon stored in landfills from discarded products manufactured from total timber harvested <br> from [minimum year] to [maximum year]. Carbon in landfills are discarded wood and paper products and comprise a portion <br>  of the solid waste disposal site pool. Carbon emissions are displayed in units of carbon dioxide equivalent (CO2e) <br> and do not include other carbon-based greenhouse gases such as methane.",
  },
];
captions_dict["total_dumps_carbon_emitted"] = [
  {
    text: "Total cumulative metric tons carbon emitted from discarded products in dumps manufactured from total timber harvested from <br> [minimum year] to [maximum year]. Carbon emitted from discarded wood and paper products in dumps is decay without <br> energy capture. Prior to 1970 wood and paper waste was generally discarded to dumps, where it was subject to higher <br> rates of decay than in modern landfills. Carbon emissions are displayed in units of carbon dioxide equivalent (CO2e) <br> and do not include other carbon-based greenhouse gases such as methane.",
  },
];
captions_dict["total_composted_carbon_emitted"] = [
  {
    text: "Total cumulative metric tons carbon emitted from composted discarded harvested wood products manufactured from total <br>  timber harvested from [minimum year] to [maximum year]. No carbon storage is associated with composted discarded <br> products and all composted carbon is decay emitted without energy capture. Carbon emissions are displayed in units of <br> carbon dioxide equivalent (CO2e) and do not include other greenhouse gases such as methane.",
  },
];
captions_dict["total_landfills_carbon_emitted"] = [
  {
    text: "Total cumulative metric tons carbon emitted from discarded products in landfills manufactured from total timber harvested <br> from [minimum year] to [maximum year]. Carbon emitted from discarded wood and paper products in landfills is <br> decay without energy capture. Methane remediation from landfills that includes combustion and subsequent emissions with <br> energy capture is not included. Carbon emissions are displayed in units of carbon dioxide equivalent (CO2e) and do not <br> include other carbon-based greenhouse gases such as methane.",
  },
];
captions_dict["total_solid_carbon_dispositions"] = [
  {
    text: "Total cumulative metric tons carbon stored in end-use products in use, in landfills from discarded products, and in dumps from discarded products manufactured from total timber harvested from [minimum year] to [maximum year]. <br> The recalcitrance of carbon in harvested wood products is highly dependent upon the end use of those products. The carbon remaining in the end-use products in use pool in a <br> given inventory year includes products in use and recovered products. Carbon in landfills and dumps are discarded wood and paper products, and comprise a portion of the solid waste disposal site pool. <br> Prior to 1970, wood and paper waste was generally discarded to dumps, as opposed to modern landfills.",
  },
];
captions_dict["total_solid_carbon_dispositions2"] = [
  {
    text: "Total cumulative metric tons carbon stored in end-use products in use, in landfills from discarded products, and in dumps from discarded products manufactured from total timber harvested from [minimum year] to [maximum year]. <br> The recalcitrance of carbon in harvested wood products is highly dependent upon the end use of those products. The carbon remaining in the end-use products in use pool in a <br> given inventory year includes products in use and recovered products. Carbon in landfills and dumps are discarded wood and paper products, and comprise a portion of the solid waste disposal site pool. <br> Prior to 1970, wood and paper waste was generally discarded to dumps, as opposed to modern landfills.",
  },
];
captions_dict["total_emissions_dispositions"] = [
  {
    text: "Total cumulative metric tons carbon emitted from fuelwood and wood waste used for fuel with energy capture, burned discarded products with and without energy capture, composted discarded harvested wood products, <br> and discarded products in dumps and landfills manufactured from total timber harvested from [minimum year] to [maximum year]. Carbon emitted from burning fuelwood and wood waste with energy capture occurs during <br> the year of harvest and is not assumed to substitute for an equivalent amount of fossil fuel carbon. Discarded burned products are assumed to be burned in an incinerator with energy capture. No carbon storage is associated with <br> composted discarded products and all composted carbon is decay emitted without energy capture. Carbon emitted from discarded wood and paper products in dumps and landfills is decay without energy capture. Prior to 1970 <br> wood and paper waste was generally discarded to dumps, where it was subject to higher rates of decay than in modern landfills. Carbon emissions are displayed in units of carbon dioxide equivalent (CO2e) <br> and do not include other carbon-based greenhouse gases such as methane.",
  },
];
captions_dict["total_emissions_dispositions2"] = [
  {
    text: "Total cumulative metric tons carbon emitted from fuelwood and wood waste used for fuel with energy capture, burned discarded products with and without energy capture, composted discarded harvested wood products, <br> and discarded products in dumps and landfills manufactured from total timber harvested from [minimum year] to [maximum year]. Carbon emitted from burning fuelwood and wood waste with energy capture occurs during <br> the year of harvest and is not assumed to substitute for an equivalent amount of fossil fuel carbon. Discarded burned products are assumed to be burned in an incinerator with energy capture. No carbon storage is associated with <br> composted discarded products and all composted carbon is decay emitted without energy capture. Carbon emitted from discarded wood and paper products in dumps and landfills is decay without energy capture. Prior to 1970 <br> wood and paper waste was generally discarded to dumps, where it was subject to higher rates of decay than in modern landfills. Carbon emissions are displayed in units of carbon dioxide equivalent (CO2e) <br> and do not include other carbon-based greenhouse gases such as methane.",
  },
];
captions_dict["swds_emissions"] = [
  {
    text: "Total cumulative metric tons carbon emitted from discarded products in landfills and dumps manufactured from total timber harvested from [minimum year] to [maximum year]. Carbon emitted from discarded wood and paper products <br> in landfills and dumps is decay without energy capture. Methane remediation from landfills that includes combustion and subsequent emissions with energy capture is not included. Prior to 1970 wood and paper waste <br> was generally discarded to dumps, where it was subject to higher rates of decay than in modern landfills. Carbon emissions are displayed in units of carbon dioxide equivalent (CO2e) <br> and do not include other carbon-based greenhouse gases such as methane.",
  },
];

header_dict = [];

header_dict["annual_timber_harvest_table"] = ["Year", "CCF MgC", "End Use MgC"];
header_dict["total_yearly_net_change"] = ["Year", "SWDS Present Change MgC"];
header_dict["total_selected_net_change"] = [
  "Year",
  "Products in Use MgC",
  "SWDS MgC",
  "Products in Use Change MgC",
  "SWDS Change MgC",
];
header_dict["total_yearly_dispositions"] = [
  "Year",
  "SWDS Present Change MgC",
  "Emitted with Energy Capture co2e",
  "Emitted with Energy Capture Change co2e",
  "Emitted without Energy Capture co2e",
  "Emitted without Energy Capture Change co2e",
  "Products in Use Change Mgc",
  "SWDS MgC",
  "SWDS Change MgC",
  "Total Remaining MgC",
  "Total Change MgC",
];
header_dict["total_selected_dispositions"] = [
  "Year",
  "SWDS Present Change MgC",
  "Emitted with Energy Capture co2e",
  "Emitted with Energy Capture Change co2e",
  "Emitted without Energy Capture co2e",
  "Emitted without Energy Capture Change co2e",
  "Products in Use Change Mgc",
  "SWDS MgC",
  "SWDS Change MgC",
  "Total Remaining MgC",
  "Total Change MgC",
];

output.initialize = function (input_json, bucket, file_name, is_single) {
  data_bucket = bucket;
  data_file_name = file_name;
  data_json = input_json;
  data_json = data_json.replace(/\n/g, "\\n");
  final_json = JSON.parse(data_json);

  data_dict = [];
  const data = d3.csvParse(final_json.annual_harvest_and_timber_product_output);
  harvestminDateYear = data[0].Year;
  harvestmaxDateYear = data[data.length - 1].Year;
  console.log(is_single);
  if (is_single == "true") {
    $("#singleYearBtn").attr("checked", "true");
    $("#yearInput-1").show("fast");
    $(".graph.non-active.annual_harvest_and_timber_product_output").css(
      "display",
      "none"
    );
  }
  data_dict["annual_harvest_and_timber_product_output"] = [
    final_json.annual_harvest_and_timber_product_output,
    "Annual Harvest and Timber Products",
    "multiline",
    "Hundred Cubic Feet (CCF)",
  ];
  data_dict["annual_net_change_carbon_stocks"] = [
    final_json.annual_net_change_carbon_stocks,
    "Annual Net Change Carbon Stocks",
    "bar",
    "Megagrams Carbon (Mg C)",
  ];
  data_dict["all_results_final"] = [
    final_json.big_four,
    "Final Results",
    "stack",
    "Megagrams Carbon (Mg C)",
  ];
  // data_dict["annual_harvests_output"] = [final_json.harvest_data,"Annual Total Harvest","line"]
  data_dict["burned_with_energy_capture_emissions"] = [
    final_json.burned_w_energy_capture_emit,
    "Total Carbon Burned With Energy Capture",
    "line",
    "Carbon Emissions (CO2e)",
  ];
  data_dict["burned_without_energy_capture_emissions"] = [
    final_json.burned_wo_energy_capture_emit,
    "Total Carbon Burned Without Energy Capture",
    "line",
    "Carbon Emissions (CO2e)",
  ];

  data_dict["end_use"] = [
    final_json.total_end_use_products,
    "Total End Use Products",
    "line",
    "Megagrams Carbon (Mg C)",
  ];
  data_dict["swds"] = [
    final_json.swds,
    "Total SWDS",
    "line",
    "Megagrams Carbon (Mg C)",
  ];
  data_dict["total_composted_carbon_emitted"] = [
    final_json.total_composted_carbon_emitted,
    "Total Carbon in Compost Emitted",
    "line",
    "Carbon Emissions (CO2e)",
  ];
  data_dict["total_cumulative_carbon_stocks"] = [
    final_json.total_cumulative_carbon_stocks,
    "Total Cumulative Carbon Stocks",
    "stack",
    "Megagrams Carbon (Mg C)",
  ];
  data_dict["total_dumps_carbon"] = [
    final_json.total_dumps_carbon,
    "Total Carbon in Dumps",
    "line",
    "Megagrams Carbon (Mg C)",
  ];
  data_dict["total_dumps_carbon_emitted"] = [
    final_json.total_dumps_carbon_emitted,
    "Total Carbon in Dumps Emitted",
    "line",
    "Carbon Emissions (CO2e)",
  ];
  data_dict["total_fuelwood_carbon_emitted"] = [
    final_json.total_fuelwood_carbon_emitted,
    "Total Emitted Fuelwood Carbon",
    "line",
    "Carbon Emissions (CO2e)",
  ];
  data_dict["total_in_use"] = [
    final_json.total_in_use,
    "Total Carbon in Use",
    "line",
    "Megagrams Carbon (Mg C)",
  ];
  data_dict["total_landfills_carbon"] = [
    final_json.total_landfills_carbon,
    "Total Landfills Carbon",
    "line",
    "Megagrams Carbon (Mg C)",
  ];
  data_dict["total_landfills_carbon_emitted"] = [
    final_json.total_landfills_carbon_emitted,
    "Total Landfills Carbon Emitted",
    "line",
    "Carbon Emissions (CO2e)",
  ];
  data_dict["total_solid_carbon_dispositions"] = [
    final_json.carbon_present_distinct_swds,
    "Total Solid Carbon Dispositions",
    "stack",
    "Megagrams Carbon (Mg C)",
  ];
  data_dict["total_solid_carbon_dispositions2"] = [
    final_json.carbon_present_distinct_swds,
    "Total Solid Carbon Dispositions",
    "stack",
    "Megagrams Carbon (Mg C)",
  ];
  data_dict["swds_emissions"] = [
    final_json.carbon_emitted_distinct_swds,
    "Total SWDS Emissions",
    "stack",
    "Carbon Emissions (CO2e)",
  ];
  data_dict["total_emissions_dispositions"] = [
    final_json.emitted_all,
    "Total Emissions",
    "stack",
    "Carbon Emissions (CO2e)",
  ];
  data_dict["total_emissions_dispositions2"] = [
    final_json.emitted_all,
    "Total Emissions",
    "stack",
    "Carbon Emissions (CO2e)",
  ];

  //Data_dict for Tables
  data_dict["annual_timber_harvest_table"] = [
    final_json.annual_harvest_and_timber_product_output,
    "Annual Timber Product Output",
    "table",
    "",
  ];
  data_dict["total_yearly_net_change"] = [
    final_json.total_yearly_net_change,
    "Total Yearly Net Change",
    "table",
    "",
  ];
  data_dict["total_selected_net_change"] = [
    final_json.total_selected_net_change,
    "Total Selected Net Change",
    "table",
    "",
  ];
  data_dict["total_yearly_dispositions"] = [
    final_json.total_yearly_dispositions,
    "Total Yearly Dispositions",
    "table",
    "",
  ];
  data_dict["total_selected_dispositions"] = [
    final_json.total_selected_dispositions,
    "Total Selected Dispositions",
    "table",
    "",
  ];

  //Data Dict for hidden graphs (unique identifiers)
  data_dict["all_results_final_hidden"] = [
    final_json.big_four,
    "Final Results",
    "stack",
    "Megagrams Carbon (Mg C)",
  ];
  data_dict["total_solid_carbon_dispositions_hidden"] = [
    final_json.carbon_present_distinct_swds,
    "Total Solid Carbon Dispositions",
    "stack",
    "Megagrams Carbon (Mg C)",
  ];
  data_dict["total_emissions_dispositions_hidden"] = [
    final_json.emitted_all,
    "Total Emissions",
    "stack",
    "Carbon Emissions (CO2e)",
  ];
  data_dict["annual_net_change_carbon_stocks_hidden"] = [
    final_json.annual_net_change_carbon_stocks,
    "Annual Net Change Carbon Stocks",
    "bar",
    "Megagrams Carbon (Mg C)",
  ];
  data_dict["annual_harvest_and_timber_product_output_hidden"] = [
    final_json.annual_harvest_and_timber_product_output,
    "Annual Harvest and Timber Products",
    "multiline",
    "Hundred Cubic Feet (CCF)",
  ];
  data_dict["burned_with_energy_capture_emissions_hidden"] = [
    final_json.burned_w_energy_capture_emit,
    "Total Carbon Burned With Energy Capture",
    "line",
    "Carbon Emissions (CO2e)",
  ];
  data_dict["burned_without_energy_capture_emissions_hidden"] = [
    final_json.burned_wo_energy_capture_emit,
    "Total Carbon Burned Without Energy Capture",
    "line",
    "Carbon Emissions (CO2e)",
  ];
  data_dict["swds_emissions_hidden"] = [
    final_json.carbon_emitted_distinct_swds,
    "Total Emissions Dispositions",
    "stack",
    "Carbon Emissions (CO2e)",
  ];
};

$("#defaultOpen").click(function (e) {
  active_id = $("#cumulativeResultsContent").children()[0].classList[
    $("#cumulativeResultsContent").children()[0].classList.length - 1
  ];
  inactive = $("#cumulativeResultsContent").children()[1].children;
  inactive_ids = [];
  for (
    let i = 0;
    i < $("#cumulativeResultsContent").children()[1].children.length;
    i++
  ) {
    inactive_ids.push(
      $("#cumulativeResultsContent").children()[1].children[i].classList[
        $("#cumulativeResultsContent").children()[1].children[i].classList
          .length - 1
      ]
    );
  }
  generate_graph(
    data_dict[active_id][0],
    active_id,
    "active",
    data_dict[active_id][1],
    1300,
    700,
    data_dict[active_id][2],
    data_dict[active_id][3],
    captions_dict[active_id]
  );
  for (let i = 0; i < inactive_ids.length; i++) {
    generate_graph(
      data_dict[inactive_ids[i]][0],
      inactive_ids[i],
      "inactive",
      data_dict[inactive_ids[i]][1],
      400,
      250,
      data_dict[inactive_ids[i]][2],
      data_dict[inactive_ids[i]][3]
    );
  }
});
$("#solidCarbon").click(function (e) {
  active_id = $("#solidCarbonContent").children()[0].classList[
    $("#solidCarbonContent").children()[0].classList.length - 1
  ];
  inactive = $("#solidCarbonContent").children()[1].children;
  inactive_ids = [];
  for (
    let i = 0;
    i < $("#solidCarbonContent").children()[1].children.length;
    i++
  ) {
    inactive_ids.push(
      $("#solidCarbonContent").children()[1].children[i].classList[
        $("#solidCarbonContent").children()[1].children[i].classList.length - 1
      ]
    );
  }
  generate_graph(
    data_dict[active_id][0],
    active_id,
    "active",
    data_dict[active_id][1],
    1300,
    700,
    data_dict[active_id][2],
    data_dict[active_id][3],
    captions_dict[active_id]
  );
  for (let i = 0; i < inactive_ids.length; i++) {
    console.log(data_dict[inactive_ids[i]]);
    generate_graph(
      data_dict[inactive_ids[i]][0],
      inactive_ids[i],
      "inactive",
      data_dict[inactive_ids[i]][1],
      400,
      250,
      data_dict[inactive_ids[i]][2],
      data_dict[inactive_ids[i]][3]
    );
  }
});
$("#emissions").click(function (e) {
  active_id =
    $("#emissionsContent").children()[0].classList[
      $("#emissionsContent").children()[0].classList.length - 1
    ];
  inactive = $("#emissionsContent").children()[1].children;
  console.log(inactive);
  inactive_ids = [];
  for (
    let i = 0;
    i < $("#emissionsContent").children()[1].children.length;
    i++
  ) {
    inactive_ids.push(
      $("#emissionsContent").children()[1].children[i].classList[
        $("#emissionsContent").children()[1].children[i].classList.length - 1
      ]
    );
  }
  generate_graph(
    data_dict[active_id][0],
    active_id,
    "active",
    data_dict[active_id][1],
    1300,
    700,
    data_dict[active_id][2],
    data_dict[active_id][3],
    captions_dict[active_id]
  );
  for (let i = 0; i < inactive_ids.length; i++) {
    console.log(inactive_ids[i]);
    generate_graph(
      data_dict[inactive_ids[i]][0],
      inactive_ids[i],
      "inactive",
      data_dict[inactive_ids[i]][1],
      400,
      250,
      data_dict[inactive_ids[i]][2],
      data_dict[inactive_ids[i]][3]
    );
  }
});

$("#reused").click(function (e) {
  active_id =
    $("#reusedContent").children()[0].classList[
      $("#reusedContent").children()[0].classList.length - 1
    ];
  inactive = $("#reusedContent").children()[1].children;
  inactive_ids = [];
  for (let i = 0; i < $("#reusedContent").children()[1].children.length; i++) {
    inactive_ids.push(
      $("#reusedContent").children()[1].children[i].classList[
        $("#reusedContent").children()[1].children[i].classList.length - 1
      ]
    );
  }
  generate_graph(
    data_dict[active_id][0],
    active_id,
    "active",
    data_dict[active_id][1],
    1300,
    700,
    data_dict[active_id][2],
    data_dict[active_id][3],
    captions_dict[active_id]
  );
  for (let i = 0; i < inactive_ids.length; i++) {
    generate_graph(
      data_dict[inactive_ids[i]][0],
      inactive_ids[i],
      "inactive",
      data_dict[inactive_ids[i]][1],
      400,
      250,
      data_dict[inactive_ids[i]][2],
      data_dict[inactive_ids[i]][3]
    );
  }
});

// Keydown event listener
$("#defaultOpen").keydown(function (e) {
  if (e.which === 32 || e.which === 13) {
    active_id = $("#cumulativeResultsContent").children()[0].classList[
      $("#cumulativeResultsContent").children()[0].classList.length - 1
    ];
    inactive = $("#cumulativeResultsContent").children()[1].children;
    inactive_ids = [];
    for (
      let i = 0;
      i < $("#cumulativeResultsContent").children()[1].children.length;
      i++
    ) {
      inactive_ids.push(
        $("#cumulativeResultsContent").children()[1].children[i].classList[
          $("#cumulativeResultsContent").children()[1].children[i].classList
            .length - 1
        ]
      );
    }
    generate_graph(
      data_dict[active_id][0],
      active_id,
      "active",
      data_dict[active_id][1],
      1300,
      700,
      data_dict[active_id][2],
      data_dict[active_id][3],
      captions_dict[active_id]
    );
    for (let i = 0; i < inactive_ids.length; i++) {
      generate_graph(
        data_dict[inactive_ids[i]][0],
        inactive_ids[i],
        "inactive",
        data_dict[inactive_ids[i]][1],
        400,
        250,
        data_dict[inactive_ids[i]][2],
        data_dict[inactive_ids[i]][3]
      );
    }
  }
});

$("#solidCarbon").keydown(function (e) {
  if (e.which === 32 || e.which === 13) {
    active_id = $("#solidCarbonContent").children()[0].classList[
      $("#solidCarbonContent").children()[0].classList.length - 1
    ];
    inactive = $("#solidCarbonContent").children()[1].children;
    inactive_ids = [];
    for (
      let i = 0;
      i < $("#solidCarbonContent").children()[1].children.length;
      i++
    ) {
      inactive_ids.push(
        $("#solidCarbonContent").children()[1].children[i].classList[
          $("#solidCarbonContent").children()[1].children[i].classList.length -
            1
        ]
      );
    }
    generate_graph(
      data_dict[active_id][0],
      active_id,
      "active",
      data_dict[active_id][1],
      1300,
      700,
      data_dict[active_id][2],
      data_dict[active_id][3],
      captions_dict[active_id]
    );
    for (let i = 0; i < inactive_ids.length; i++) {
      console.log(data_dict[inactive_ids[i]]);
      generate_graph(
        data_dict[inactive_ids[i]][0],
        inactive_ids[i],
        "inactive",
        data_dict[inactive_ids[i]][1],
        400,
        250,
        data_dict[inactive_ids[i]][2],
        data_dict[inactive_ids[i]][3]
      );
    }
  }
});

$("#emissions").keydown(function (e) {
  if (e.which === 32 || e.which === 13) {
    active_id =
      $("#emissionsContent").children()[0].classList[
        $("#emissionsContent").children()[0].classList.length - 1
      ];
    inactive = $("#emissionsContent").children()[1].children;
    console.log(inactive);
    inactive_ids = [];
    for (
      let i = 0;
      i < $("#emissionsContent").children()[1].children.length;
      i++
    ) {
      inactive_ids.push(
        $("#emissionsContent").children()[1].children[i].classList[
          $("#emissionsContent").children()[1].children[i].classList.length - 1
        ]
      );
    }
    generate_graph(
      data_dict[active_id][0],
      active_id,
      "active",
      data_dict[active_id][1],
      1300,
      700,
      data_dict[active_id][2],
      data_dict[active_id][3],
      captions_dict[active_id]
    );
    for (let i = 0; i < inactive_ids.length; i++) {
      console.log(inactive_ids[i]);
      generate_graph(
        data_dict[inactive_ids[i]][0],
        inactive_ids[i],
        "inactive",
        data_dict[inactive_ids[i]][1],
        400,
        250,
        data_dict[inactive_ids[i]][2],
        data_dict[inactive_ids[i]][3]
      );
    }
  }
});

$("#reused").keydown(function (e) {
  if (e.which === 32 || e.which === 13) {
    active_id =
      $("#reusedContent").children()[0].classList[
        $("#reusedContent").children()[0].classList.length - 1
      ];
    inactive = $("#reusedContent").children()[1].children;
    inactive_ids = [];
    for (
      let i = 0;
      i < $("#reusedContent").children()[1].children.length;
      i++
    ) {
      inactive_ids.push(
        $("#reusedContent").children()[1].children[i].classList[
          $("#reusedContent").children()[1].children[i].classList.length - 1
        ]
      );
    }
    generate_graph(
      data_dict[active_id][0],
      active_id,
      "active",
      data_dict[active_id][1],
      1300,
      700,
      data_dict[active_id][2],
      data_dict[active_id][3],
      captions_dict[active_id]
    );
    for (let i = 0; i < inactive_ids.length; i++) {
      generate_graph(
        data_dict[inactive_ids[i]][0],
        inactive_ids[i],
        "inactive",
        data_dict[inactive_ids[i]][1],
        400,
        250,
        data_dict[inactive_ids[i]][2],
        data_dict[inactive_ids[i]][3]
      );
    }
  }
});

generate_graph = function (
  json_data,
  graph_class,
  is_active,
  title,
  w,
  h,
  graph_type,
  y_label = "",
  caption
) {
  // var parseDate = d3.timeFormat("%Y");
  if (is_active == "inactive") {
    if (graph_type == "line") {
      tester = document.getElementsByClassName("non-active " + graph_class)[0];
      const data = d3.csvParse(json_data);

      year_array = [];
      value_array = [];

      for (i in data) {
        year_array.push(data[i][data.columns[0]]);
        value_array.push(data[i][data.columns[1]]);
      }

      var trace1 = {
        x: year_array,
        y: value_array,
        name: data_dict[graph_class][1],
        type: "scatter",
      };
      var stackedData = [trace1];
      var layout = {
        title: title,
        height: 350,
        responsive: true,
        showlegend: false,
      };

      Plotly.newPlot(tester, stackedData, layout, { staticPlot: true });
    } else if (graph_type == "multiline") {
      console.log("graph type is active multiline");
      tester = document.getElementsByClassName("non-active " + graph_class)[0];
      const data = d3.csvParse(json_data, function (d) {
        return {
          year: d[Object.keys(d)[0]],
          value1: d[Object.keys(d)[1]],
          value2: d[Object.keys(d)[2]],
        };
      });
      minDateYear = data[0].year;
      maxDateYear = data[data.length - 1].year;

      year_array = [];
      value1_array = [];
      value2_array = [];
      for (i in data) {
        year_array.push(data[i].year);
        value1_array.push(data[i].value1);
        value2_array.push(data[i].value2);
      }

      var trace1 = {
        x: year_array,
        y: value1_array,
        name: "Annual Harvest",
        type: "scatter",
      };

      var trace2 = {
        x: year_array,
        y: value2_array,
        name: "Annual Timber Harvest",
        type: "scatter",
      };

      var layout = {
        title: "Annual Harvest and Timber Product Outputs",
        height: 350,
        width: 420,
        responsive: true,
        showlegend: false,
      };

      var stackedData = [trace1, trace2];
      Plotly.newPlot(tester, stackedData, layout, { staticPlot: true });
    } else if (graph_type == "stack") {
      tester = document.getElementsByClassName("non-active " + graph_class)[0];
      console.log(tester);
      const data = d3.csvParse(json_data);
      stackedData = [];
      year_data = [];
      emissions_present = false;
      solid_present = false;
      for (i in data.columns) {
        if (data.columns[i].includes("co2e")) {
          emissions_present = true;
        }
        if (
          !data.columns[i].includes("co2e") &&
          !data.columns[i].includes("Year")
        ) {
          solid_present = true;
        }
      }
      for (i in data.columns) {
        column = data.columns[i];
        if (i == 0) {
          for (j in data) {
            year_data.push(data[j][column]);
          }
        } else {
          temp = [];
          for (j in data) {
            temp.push(data[j][column]);
          }
          if (column == "products_in_use") {
            y_name = "Products in Use";
          }
          if (column == "products_in_use_present_co2e") {
            y_name = "Products in Use";
          }
          if (column == "SWDS") {
            y_name = "SWDS";
          }
          if (column == "SWDS_present_co2e") {
            y_name = "SWDS";
          }
          if (column == "emitted_w_energy_capture_emitted_co2e") {
            y_name = "Emitted with <br>Energy Capture";
          }
          if (column == "emitted_w_energy_capture") {
            y_name = "Emitted with <br>Energy Capture";
          }
          if (column == "emitted_wo_energy_capture") {
            y_name = "Emitted without <br>Energy Capture";
          }
          if (column == "emitted_wo_energy_capture_emitted_co2e") {
            y_name = "Emitted without <br>Energy Capture";
          }
          if (column == "Fuel_emitted_co2e") {
            y_name = "Fuelwood Emissions";
          }
          if (column == "Composted_emitted_co2e") {
            y_name = "Compost Emissions";
          }
          if (column == "Dumps_emitted_mgc") {
            y_name = "Dump Emissions";
          }
          if (column == "Dumps_emitted_co2e") {
            y_name = "Dump Emissions";
          }
          if (column == "Landfills_emitted_co2e") {
            y_name = "Landfill Emissions";
          }
          if (column == "Dumps_present_mgc") {
            y_name = "Carbon in Dumps";
          }
          if (column == "Landfills_present_mgc") {
            y_name = "Carbon in Landfills";
          }
          if (emissions_present == true && solid_present == false) {
            var temp_trace = {
              x: year_data,
              y: temp,
              name: y_name,
              stackgroup: "one",
            };
          }
          if (emissions_present == true && solid_present == true) {
            if (column.includes("emit")) {
              var temp_trace = {
                x: year_data,
                y: temp,
                yaxis: "y2",
                name: y_name,
                stackgroup: "one",
              };
            } else {
              var temp_trace = {
                x: year_data,
                y: temp,
                name: y_name,
                stackgroup: "one",
              };
            }
          }
          if (emissions_present == false && solid_present == true) {
            var temp_trace = {
              x: year_data,
              y: temp,
              name: y_name,
              stackgroup: "one",
            };
          }
          stackedData.push(temp_trace);
        }
      }

      if (emissions_present == true && solid_present == false) {
        var layout = {
          title: title,
          responsive: true,
          showlegend: false,
          height: 350,
          width: 420,
        };
      }
      if (emissions_present == true && solid_present == true) {
        var layout = {
          title: title,
          responsive: true,
          showlegend: false,
          height: 350,
          width: 420,
        };
      }
      if (emissions_present == false && solid_present == true) {
        var layout = {
          title: title,
          responsive: true,
          showlegend: false,
          height: 350,
          width: 420,
        };
      }

      Plotly.newPlot(tester, stackedData, layout, { staticPlot: true });
    } else {
      tester = document.getElementsByClassName("non-active " + graph_class)[0];
      const data = d3.csvParse(json_data, function (d) {
        return {
          year: d[Object.keys(d)[0]],
          products_in_use_change: d[Object.keys(d)[1]],
          SWDS_change: d[Object.keys(d)[2]],
        };
      });

      year_array = [];
      prod_array = [];
      swds_array = [];
      for (i in data) {
        year_array.push(data[i].year);
        prod_array.push(data[i].products_in_use_change);
        swds_array.push(data[i].SWDS_change);
      }
      year_array = year_array.slice(0, -2);
      prod_array = prod_array.slice(0, -2);
      swds_array = swds_array.slice(0, -2);
      var trace1 = {
        x: year_array,
        y: prod_array,
        name: "Change in Products in Use",
        type: "bar",
      };

      var trace2 = {
        x: year_array,
        y: swds_array,
        name: "Change in SWDS",
        type: "bar",
      };

      stackedData = [trace1, trace2];

      var layout = {
        barmode: "relative",
        height: 350,
        width: 420,
        responsive: true,
        title: "Annual Net Change Carbon Stocks",
        showlegend: false,
      };

      Plotly.newPlot(tester, stackedData, layout, { staticPlot: true });
    }
  } else if (is_active == "active") {
    $("." + graph_class).html("");
    if (graph_type == "line") {
      tester = document.getElementsByClassName(
        "active-graph " + graph_class
      )[0];
      const data = d3.csvParse(json_data);

      minDateYear = data[0].year;
      maxDateYear = data[data.length - 1].year;
      caption[0].text = caption[0].text.replace("[minimum year]", minDateYear);
      caption[0].text = caption[0].text.replace("[maximum year]", maxDateYear);
      year_array = [];
      value_array = [];

      for (i in data) {
        year_array.push(data[i][data.columns[0]]);
        value_array.push(data[i][data.columns[1]]);
      }

      var trace1 = {
        x: year_array,
        y: value_array,
        name: data_dict[graph_class][1],
        type: "scatter",
      };

      var layout = {
        title: data_dict[graph_class][1],
        xaxis: { title: "Years<br><br><sup>" + caption[0].text + "</sup>" },
        yaxis: { title: data_dict[graph_class][3] },
        automargin: true,
        height: 700,
        margin: { l: 100, r: 50, b: 100, t: 100, pad: 4 },
        responsive: true,
      };

      var stackedData = [trace1];

      Plotly.newPlot(tester, stackedData, layout);
    } else if (graph_type == "multiline") {
      console.log("graph type is active multiline");
      tester = document.getElementsByClassName(
        "active-graph " + graph_class
      )[0];
      const data = d3.csvParse(json_data, function (d) {
        return {
          year: d[Object.keys(d)[0]],
          value1: d[Object.keys(d)[1]],
          value2: d[Object.keys(d)[2]],
        };
      });

      minDateYear = data[0].year;
      maxDateYear = data[data.length - 1].year;
      caption[0].text = caption[0].text.replace("[minimum year]", minDateYear);
      caption[0].text = caption[0].text.replace("[maximum year]", maxDateYear);

      year_array = [];
      value1_array = [];
      value2_array = [];
      for (i in data) {
        year_array.push(data[i].year);
        value1_array.push(data[i].value1);
        value2_array.push(data[i].value2);
      }

      var trace1 = {
        x: year_array,
        y: value1_array,
        name: "Annual Harvest",
        type: "scatter",
      };

      var trace2 = {
        x: year_array,
        y: value2_array,
        yaxis: "y2",
        name: "Annual Timber Harvest",
        type: "scatter",
      };

      var layout = {
        title: "Annual Harvest and Timber Product Outputs",
        xaxis: { title: "Years<br><br><sup>" + caption[0].text + "</sup>" },
        yaxis: { title: "Hundred Cubic Feet (CCF)" },
        yaxis2: {
          title: "Megagrams Carbon (Mg C)",
          titlefont: { color: "rgb(148, 103, 189)" },
          tickfont: { color: "rgb(148, 103, 189)" },
          overlaying: "y",
          side: "right",
        },
        automargin: true,
        height: 700,
        margin: { l: 100, r: 50, b: 100, t: 100, pad: 4 },
        responsive: true,
      };

      var stackedData = [trace1, trace2];
      Plotly.newPlot(tester, stackedData, layout);
    } else if (graph_type == "stack") {
      tester = document.getElementsByClassName(
        "active-graph " + graph_class
      )[0];
      const data = d3.csvParse(json_data);
      stackedData = [];
      year_data = [];
      emissions_present = false;
      solid_present = false;
      console.log(data);
      minDateYear = data[0].Year;
      maxDateYear = data[data.length - 1].Year;
      caption[0].text = caption[0].text.replace("[minimum year]", minDateYear);
      caption[0].text = caption[0].text.replace("[maximum year]", maxDateYear);

      for (i in data.columns) {
        if (data.columns[i].includes("co2e")) {
          emissions_present = true;
        }
        if (
          !data.columns[i].includes("co2e") &&
          !data.columns[i].includes("Year")
        ) {
          solid_present = true;
        }
      }
      for (i in data.columns) {
        column = data.columns[i];
        if (i == 0) {
          for (j in data) {
            year_data.push(data[j][column]);
          }
        } else {
          temp = [];
          for (j in data) {
            temp.push(data[j][column]);
          }
          if (column == "products_in_use") {
            y_name = "Products in Use";
          }
          if (column == "products_in_use_mgc") {
            y_name = "Products in Use";
          }
          if (column == "products_in_use_present_co2e") {
            y_name = "Products in Use";
          }
          if (column == "SWDS") {
            y_name = "SWDS";
          }
          if (column == "SWDS_mgc") {
            y_name = "SWDS";
          }
          if (column == "SWDS_present_co2e") {
            y_name = "SWDS";
          }
          if (column == "emitted_w_energy_capture_emitted_co2e") {
            y_name = "Emitted with <br>Energy Capture";
          }
          if (column == "emitted_w_energy_capture") {
            y_name = "Emitted with <br>Energy Capture";
          }
          if (column == "emitted_wo_energy_capture") {
            y_name = "Emitted without <br>Energy Capture";
          }
          if (column == "emitted_wo_energy_capture_emitted_co2e") {
            y_name = "Emitted without <br>Energy Capture";
          }
          if (column == "Fuel_emitted_co2e") {
            y_name = "Fuelwood Emissions";
          }
          if (column == "Composted_emitted_co2e") {
            y_name = "Compost Emissions";
          }
          if (column == "Dumps_emitted_mgc") {
            y_name = "Dump Emissions";
          }
          if (column == "Dumps_emitted_co2e") {
            y_name = "Dump Emissions";
          }
          if (column == "Landfills_emitted_co2e") {
            y_name = "Landfill Emissions";
          }
          if (column == "Dumps_present_mgc") {
            y_name = "Carbon in Dumps";
          }
          if (column == "Landfills_present_mgc") {
            y_name = "Carbon in Landfills";
          }
          if (emissions_present == true && solid_present == false) {
            var temp_trace = {
              x: year_data,
              y: temp,
              name: y_name,
              stackgroup: "one",
            };
          }
          if (emissions_present == true && solid_present == true) {
            if (column.includes("emit")) {
              var temp_trace = {
                x: year_data,
                y: temp,
                yaxis: "y2",
                name: y_name,
                stackgroup: "one",
              };
            } else {
              var temp_trace = {
                x: year_data,
                y: temp,
                name: y_name,
                stackgroup: "one",
              };
            }
          }
          if (emissions_present == false && solid_present == true) {
            var temp_trace = {
              x: year_data,
              y: temp,
              name: y_name,
              stackgroup: "one",
            };
          }
          stackedData.push(temp_trace);
        }
      }

      if (emissions_present == true && solid_present == false) {
        var layout = {
          title: title,
          xaxis: { title: "Years<br><br><sup>" + caption[0].text + "</sup>" },
          yaxis: { title: "Carbon Emissions (CO2e)" },
          automargin: true,
          height: 700,
          margin: { l: 100, r: 50, b: 200, t: 100, pad: 4 },
          responsive: true,
        };
      }
      if (emissions_present == true && solid_present == true) {
        var layout = {
          title: title,
          autosize: true,
          xaxis: { title: "Years<br><br><sup>" + caption[0].text + "</sup>" },
          yaxis: { title: "Megagrams Carbon (Mg C)" },
          yaxis2: {
            title: "Carbon Emissions (CO2e)",
            // titlefont: {color: 'rgb(148, 103, 189)'},
            // tickfont: {color: 'rgb(148, 103, 189)'},
            overlaying: "y",
            side: "right",
          },
          automargin: true,
          height: 700,
          margin: { l: 100, r: 55, b: 200, t: 100, pad: 4 },
          responsive: true,
          legend: { x: 1.05, y: 1 },
        };
      }
      if (emissions_present == false && solid_present == true) {
        var layout = {
          title: title,
          xaxis: { title: "Years<br><br><sup>" + caption[0].text + "</sup>" },
          yaxis: { title: "Megagrams Carbon (Mg C)" },
          automargin: true,
          height: 700,
          margin: { l: 100, r: 50, b: 200, t: 100, pad: 4 },
          responsive: true,
        };
      }

      // var layout = {
      //     title: title,
      //     xaxis: { title: "Years<br><sup>" + caption[0].text + "</sup>" },
      //     yaxis: {}
      // }
      Plotly.newPlot(tester, stackedData, layout);
    } else {
      console.log("graph type is active bar");
      tester = document.getElementsByClassName(
        "active-graph " + graph_class
      )[0];
      const data = d3.csvParse(json_data, function (d) {
        return {
          year: d[Object.keys(d)[0]],
          products_in_use_change: d[Object.keys(d)[1]],
          SWDS_change: d[Object.keys(d)[2]],
        };
      });
      minDateYear = data[0].year;
      maxDateYear = data[data.length - 1].year;
      caption[0].text = caption[0].text.replace("[minimum year]", minDateYear);
      caption[0].text = caption[0].text.replace("[maximum year]", maxDateYear);

      year_array = [];
      prod_array = [];
      swds_array = [];
      net_change_array = [];

      for (i in data) {
        year_array.push(data[i].year);
        prod_array.push(data[i].products_in_use_change);
        swds_array.push(data[i].SWDS_change);

        temp1 = parseInt(data[i].products_in_use_change);
        temp2 = parseInt(data[i].SWDS_change);
        temp3 = temp1 + temp2;

        net_change_array.push(temp3);
      }
      console.log(net_change_array);
      year_array = year_array.slice(0, -2);
      prod_array = prod_array.slice(0, -2);
      swds_array = swds_array.slice(0, -2);
      net_change_array = net_change_array.slice(0, -2);

      var trace1 = {
        x: year_array,
        y: prod_array,
        name: "Change in Products in Use",
        type: "bar",
      };

      var trace2 = {
        x: year_array,
        y: swds_array,
        name: "Change in SWDS",
        type: "bar",
      };

      var trace3 = {
        x: year_array,
        y: net_change_array,
        name: "Net Change",
        type: "scatter",
      };

      stackedData = [trace1, trace2, trace3];

      var layout = {
        barmode: "relative",
        xaxis: { title: "Years<br><br><sup>" + caption[0].text + "</sup>" },
        yaxis: { title: "Megagrams C (Mg C)" },
        title: "Annual Net Change Carbon Stocks",
        automargin: true,
        height: 700,
        margin: { l: 100, r: 50, b: 150, t: 100, pad: 4 },
        responsive: true,
      };
      plot = Plotly.newPlot(tester, stackedData, layout);
    }
  } else {
    console.log("I broke add error logic here");
  }
};

generate_hidden_graph = function (
  json_data,
  graph_class,
  title,
  w,
  h,
  graph_type,
  y_label = "",
  caption
) {
  console.log(graph_class);

  $("." + graph_class).html("");
  if (graph_type == "line") {
    tester = document.getElementsByClassName("hidden " + graph_class)[0];
    const data = d3.csvParse(json_data);

    minDateYear = data[0].Year;
    maxDateYear = data[data.length - 1].Year;
    caption[0].text = caption[0].text.replace("[minimum year]", minDateYear);
    caption[0].text = caption[0].text.replace("[maximum year]", maxDateYear);
    // svg
    //     .append("g")
    //     .attr("class", graph_class + "caption")
    //     .attr("transform", "translate( 0 ," + (height + margin.top + 30) + ")")

    year_array = [];
    value_array = [];

    for (i in data) {
      year_array.push(data[i][data.columns[0]]);
      value_array.push(data[i][data.columns[1]]);
    }

    var trace1 = {
      x: year_array,
      y: value_array,
      name: data_dict[graph_class][1],
      type: "scatter",
    };

    var layout = {
      title: data_dict[graph_class][1],
      xaxis: { title: "Years<br><br><sup>" + caption[0].text + "</sup>" },
      yaxis: { title: data_dict[graph_class][3] },
      automargin: true,
      height: 700,
      margin: { l: 100, r: 50, b: 200, t: 100, pad: 4 },
      responsive: true,
    };

    var stackedData = [trace1];

    Plotly.newPlot(tester, stackedData, layout);
  } else if (graph_type == "multiline") {
    console.log("graph type is active multiline");
    tester = document.getElementsByClassName("hidden " + graph_class)[0];
    const data = d3.csvParse(json_data, function (d) {
      return {
        year: d[Object.keys(d)[0]],
        value1: d[Object.keys(d)[1]],
        value2: d[Object.keys(d)[2]],
      };
    });
    // const data2 = d3.csvParse(json_data,
    //     function (d) {
    //         return { date: d3.timeParse("%Y")(d[Object.keys(d)[0]]), value: d[Object.keys(d)[2]] }
    //     })

    minDateYear = data[0].year;
    maxDateYear = data[data.length - 1].year;
    caption[0].text = caption[0].text.replace("[minimum year]", minDateYear);
    caption[0].text = caption[0].text.replace("[maximum year]", maxDateYear);

    year_array = [];
    value1_array = [];
    value2_array = [];
    for (i in data) {
      year_array.push(data[i].year);
      value1_array.push(data[i].value1);
      value2_array.push(data[i].value2);
    }

    var trace1 = {
      x: year_array,
      y: value1_array,
      name: "Annual Harvest",
      type: "scatter",
    };

    var trace2 = {
      x: year_array,
      y: value2_array,
      yaxis: "y2",
      name: "Annual Timber Harvest",
      type: "scatter",
    };

    var layout = {
      title: "Annual Harvest and Timber Product Outputs",
      xaxis: { title: "Years<br><br><sup>" + caption[0].text + "</sup>" },
      yaxis: { title: "Hundred Cubic Feet (CCF)" },
      yaxis2: {
        title: "Megagrams Carbon (Mg C)",
        titlefont: { color: "rgb(148, 103, 189)" },
        tickfont: { color: "rgb(148, 103, 189)" },
        overlaying: "y",
        side: "right",
      },
      automargin: true,
      height: 700,
      margin: { l: 100, r: 50, b: 150, t: 100, pad: 4 },
      responsive: true,
    };

    var stackedData = [trace1, trace2];

    Plotly.newPlot(tester, stackedData, layout);

    // caption[0].text = caption[0].text.replace("[minimum year]", minDateYear)
    // caption[0].text = caption[0].text.replace("[maximum year]", maxDateYear)
    // svg
    //     .append("g")
    //     .attr("class", graph_class + "caption")
    //     .attr("transform", "translate( 0 ," + (height + margin.top + 30) + ")")
  } else if (graph_type == "stack") {
    tester = document.getElementsByClassName("hidden " + graph_class)[0];
    const data = d3.csvParse(json_data);
    // keys = Object.keys(data[0])
    minDateYear = data[0].Year;
    maxDateYear = data[data.length - 1].Year;
    caption[0].text = caption[0].text.replace("[minimum year]", minDateYear);
    caption[0].text = caption[0].text.replace("[maximum year]", maxDateYear);

    stackedData = [];
    year_data = [];
    emissions_present = false;
    solid_present = false;
    for (i in data.columns) {
      if (data.columns[i].includes("co2e")) {
        emissions_present = true;
      }
      if (
        !data.columns[i].includes("co2e") &&
        !data.columns[i].includes("Year")
      ) {
        solid_present = true;
      }
    }
    for (i in data.columns) {
      column = data.columns[i];
      if (i == 0) {
        for (j in data) {
          year_data.push(data[j][column]);
        }
      } else {
        temp = [];
        for (j in data) {
          temp.push(data[j][column]);
        }
        if (column == "products_in_use") {
          y_name = "Products in Use";
        }
        if (column == "products_in_use_mgc") {
          y_name = "Products in Use";
        }
        if (column == "products_in_use_present_co2e") {
          y_name = "Products in Use";
        }
        if (column == "SWDS") {
          y_name = "SWDS";
        }
        if (column == "SWDS_mgc") {
          y_name = "SWDS";
        }
        if (column == "SWDS_present_co2e") {
          y_name = "SWDS";
        }
        if (column == "emitted_w_energy_capture_emitted_co2e") {
          y_name = "Emitted with <br>Energy Capture";
        }
        if (column == "emitted_w_energy_capture") {
          y_name = "Emitted with <br>Energy Capture";
        }
        if (column == "emitted_wo_energy_capture") {
          y_name = "Emitted without <br>Energy Capture";
        }
        if (column == "emitted_wo_energy_capture_emitted_co2e") {
          y_name = "Emitted without <br>Energy Capture";
        }
        if (column == "Fuel_emitted_co2e") {
          y_name = "Fuelwood Emissions";
        }
        if (column == "Composted_emitted_co2e") {
          y_name = "Compost Emissions";
        }
        if (column == "Dumps_emitted_mgc") {
          y_name = "Dump Emissions";
        }
        if (column == "Dumps_emitted_co2e") {
          y_name = "Dump Emissions";
        }
        if (column == "Landfills_emitted_co2e") {
          y_name = "Landfill Emissions";
        }
        if (column == "Dumps_present_mgc") {
          y_name = "Carbon in Dumps";
        }
        if (column == "Landfills_present_mgc") {
          y_name = "Carbon in Landfills";
        }
        if (emissions_present == true && solid_present == false) {
          var temp_trace = {
            x: year_data,
            y: temp,
            name: y_name,
            stackgroup: "one",
          };
        }
        if (emissions_present == true && solid_present == true) {
          if (column.includes("emit")) {
            var temp_trace = {
              x: year_data,
              y: temp,
              yaxis: "y2",
              name: y_name,
              stackgroup: "one",
            };
          } else {
            var temp_trace = {
              x: year_data,
              y: temp,
              name: y_name,
              stackgroup: "one",
            };
          }
        }
        if (emissions_present == false && solid_present == true) {
          var temp_trace = {
            x: year_data,
            y: temp,
            name: y_name,
            stackgroup: "one",
          };
        }
        stackedData.push(temp_trace);
      }
    }

    if (emissions_present == true && solid_present == false) {
      var layout = {
        title: title,
        xaxis: { title: "Years<br><br><sup>" + caption[0].text + "</sup>" },
        yaxis: { title: "Carbon Emissions (CO2e)" },
        automargin: true,
        height: 700,
        margin: { l: 100, r: 50, b: 200, t: 100, pad: 4 },
        responsive: true,
      };
    }
    if (emissions_present == true && solid_present == true) {
      var layout = {
        title: title,
        autosize: true,
        xaxis: { title: "Years<br><br><sup>" + caption[0].text + "</sup>" },
        yaxis: { title: "Megagrams Carbon (Mg C)" },
        yaxis2: {
          title: "Carbon Emissions (CO2e)",
          // titlefont: {color: 'rgb(148, 103, 189)'},
          // tickfont: {color: 'rgb(148, 103, 189)'},
          overlaying: "y",
          side: "right",
        },
        automargin: true,
        height: 700,
        margin: { l: 100, r: 55, b: 200, t: 100, pad: 4 },
        responsive: true,
        legend: { x: 1.05, y: 1 },
      };
    }
    if (emissions_present == false && solid_present == true) {
      var layout = {
        title: title,
        xaxis: { title: "Years<br><br><sup>" + caption[0].text + "</sup>" },
        yaxis: { title: "Megagrams Carbon (Mg C)" },
        automargin: true,
        height: 700,
        margin: { l: 100, r: 50, b: 200, t: 100, pad: 4 },
        responsive: true,
      };
    }

    // var stackedData = [trace1, trace2];
    Plotly.newPlot(tester, stackedData, layout);
  } else {
    console.log("graph type is active bar");
    tester = document.getElementsByClassName("hidden " + graph_class)[0];
    const data = d3.csvParse(json_data, function (d) {
      return {
        year: d[Object.keys(d)[0]],
        products_in_use_change: d[Object.keys(d)[1]],
        SWDS_change: d[Object.keys(d)[2]],
      };
    });

    minDateYear = data[0].Year;
    maxDateYear = data[data.length - 1].Year;
    caption[0].text = caption[0].text.replace("[minimum year]", minDateYear);
    caption[0].text = caption[0].text.replace("[maximum year]", maxDateYear);

    year_array = [];
    prod_array = [];
    swds_array = [];
    for (i in data) {
      year_array.push(data[i].year);
      prod_array.push(data[i].products_in_use_change);
      swds_array.push(data[i].SWDS_change);
    }
    year_array = year_array.slice(0, -2);
    prod_array = prod_array.slice(0, -2);
    swds_array = swds_array.slice(0, -2);
    var trace1 = {
      x: year_array,
      y: prod_array,
      name: "Change in Products in Use",
      type: "bar",
    };

    var trace2 = {
      x: year_array,
      y: swds_array,
      name: "Change in SWDS",
      type: "bar",
    };

    stackedData = [trace1, trace2];

    var layout = {
      barmode: "relative",
      xaxis: { title: "Years<br><br><sup>" + caption[0].text + "</sup>" },
      yaxis: { title: "Megagrams C (Mg C)" },
      title: "Annual Net Change Carbon Stocks",
      automargin: true,
      height: 700,
      margin: { l: 100, r: 50, b: 150, t: 100, pad: 4 },
      responsive: true,
    };

    plot = Plotly.newPlot(tester, stackedData, layout);
  }
};

generate_table = function (json_data, table_class, title) {
  tester = document.getElementsByClassName("hidden " + table_class)[0];

  // var data = d3.csvParse(json_data, function (d) { return process_data(d) } );
  var data = d3.csvParse(json_data);
  process_data(data);
  function process_data(rows) {
    function unpack(rows, key) {
      return rows.map(function (row) {
        return row[key];
      });
    }

    var headerNames = Object.keys(rows[0]);

    console.log(headerNames);

    let imageWidth = 0;
    console.log(headerNames.length);

    if (headerNames.length <= 5) {
      imageWidth = 1225; // pdf exports at letter mm size, 2551px will give it 144ppi 'resolution'
    } else {
      imageWidth = 1582;
    }

    var headerColor = "grey";
    var rowEvenColor = "lightgrey";
    var rowOddColor = "white";

    var headerValues = [];
    var cellValues = [];
    for (i = 0; i < headerNames.length; i++) {
      headerValue = [headerNames[i]];
      headerValues[i] = headerValue;
      cellValue = unpack(rows, headerNames[i]);
      if (i >= 1) {
        temp = [];
        for (j = 0; j < cellValue.length; j++) {
          temp.push(parseFloat(cellValue[j]).toFixed(2));
        }
        cellValues[i] = temp;
      } else {
        cellValues[i] = cellValue;
      }
    }

    // clean date
    for (i = 0; i < cellValues[1].length; i++) {
      var dateValue = cellValues[1][i].split(" ")[0];
      cellValues[1][i] = dateValue;
    }

    var data_layout = [
      {
        type: "table",
        columnwidth: [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25],
        columnorder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        header: {
          values: header_dict[table_class],
          line: { width: 1, color: "rgb(50, 50, 50)" },
          fill: { color: headerColor },
          font: { family: "Open Sans", size: 14, color: "white" },
        },
        cells: {
          values: cellValues,
          height: 25,
          align: ["center", "center"],
          line: { color: "gray", width: 1 },
          // fill: { color: "white" },
          font: { family: "Open Sans", size: 12, color: ["black"] },
        },
      },
    ];

    var layout = {
      title: title,
      height: (cellValues[0].length + 5) * 30 + 100,
      width: imageWidth,
    };

    Plotly.newPlot(tester, data_layout, layout);
  }
};

$(".non-active").click(function (e) {
  var non_active_div = $(e.target).parent().parent();
  var non_active_div_siblings = $(e.target).parent().parent().siblings();
  console.log(non_active_div_siblings);
  var current_tabs_active_graph_sibling = non_active_div
    .parent()
    .closest("div");

  var current_tabs_active_graph = current_tabs_active_graph_sibling
    .siblings()
    .closest("div");
  for (let i = 0; i < non_active_div[0].classList.length; i++) {
    if (
      non_active_div[0].classList[i] != "graph" &&
      non_active_div[0].classList[i] != "js-plotly-plot" &&
      non_active_div[0].classList[i] != "non-active"
    ) {
      non_active_id = non_active_div[0].classList[i];
    }
  }

  for (let i = 0; i < current_tabs_active_graph[0].classList.length; i++) {
    if (
      current_tabs_active_graph[0].classList[i] != "graph" &&
      current_tabs_active_graph[0].classList[i] != "active-graph" &&
      current_tabs_active_graph[0].classList[i] != "js-plotly-plot"
    ) {
      current_tabs_active_id = current_tabs_active_graph[0].classList[i];
    }
  }
  current_tabs_active_graph[0].classList.remove(current_tabs_active_id);
  current_tabs_active_graph[0].classList.add(non_active_id);
  non_active_div[0].classList.remove(non_active_id);
  non_active_div[0].classList.add(current_tabs_active_id);
  generate_graph(
    data_dict[non_active_id][0],
    non_active_id,
    "active",
    data_dict[non_active_id][1],
    1300,
    700,
    data_dict[non_active_id][2],
    data_dict[non_active_id][3],
    captions_dict[non_active_id]
  );
  generate_graph(
    data_dict[current_tabs_active_id][0],
    current_tabs_active_id,
    "inactive",
    data_dict[current_tabs_active_id][1],
    400,
    250,
    data_dict[current_tabs_active_id][2]
  );
  if (non_active_div_siblings.length != 0) {
    for (i = 0; i < non_active_div_siblings.length; i++) {
      for (let j = 0; j < non_active_div_siblings[i].classList.length; j++) {
        if (
          non_active_div_siblings[i].classList[j] != "graph" &&
          non_active_div_siblings[i].classList[j] != "js-plotly-plot" &&
          non_active_div_siblings[i].classList[j] != "non-active"
        ) {
          non_active_div_sibling_id = non_active_div_siblings[i].classList[j];
        }
      }

      generate_graph(
        data_dict[non_active_div_sibling_id][0],
        non_active_div_sibling_id,
        "inactive",
        data_dict[non_active_div_sibling_id][1],
        400,
        250,
        data_dict[non_active_div_sibling_id][2]
      );
    }
  }
});

$(".non-active").keydown(function (e) {
  if (e.keyCode == 13 || e.keyCode == 32) {
    var non_active_div = $(e.target).parent().parent();
    var non_active_div_siblings = $(e.target).parent().parent().siblings();
    console.log(non_active_div_siblings);
    var current_tabs_active_graph_sibling = non_active_div
      .parent()
      .closest("div");

    var current_tabs_active_graph = current_tabs_active_graph_sibling
      .siblings()
      .closest("div");
    for (let i = 0; i < non_active_div[0].classList.length; i++) {
      if (
        non_active_div[0].classList[i] != "graph" &&
        non_active_div[0].classList[i] != "js-plotly-plot" &&
        non_active_div[0].classList[i] != "non-active"
      ) {
        non_active_id = non_active_div[0].classList[i];
      }
    }

    for (let i = 0; i < current_tabs_active_graph[0].classList.length; i++) {
      if (
        current_tabs_active_graph[0].classList[i] != "graph" &&
        current_tabs_active_graph[0].classList[i] != "active-graph" &&
        current_tabs_active_graph[0].classList[i] != "js-plotly-plot"
      ) {
        current_tabs_active_id = current_tabs_active_graph[0].classList[i];
      }
    }
    current_tabs_active_graph[0].classList.remove(current_tabs_active_id);
    current_tabs_active_graph[0].classList.add(non_active_id);
    non_active_div[0].classList.remove(non_active_id);
    non_active_div[0].classList.add(current_tabs_active_id);
    generate_graph(
      data_dict[non_active_id][0],
      non_active_id,
      "active",
      data_dict[non_active_id][1],
      1300,
      700,
      data_dict[non_active_id][2],
      data_dict[non_active_id][3],
      captions_dict[non_active_id]
    );
    generate_graph(
      data_dict[current_tabs_active_id][0],
      current_tabs_active_id,
      "inactive",
      data_dict[current_tabs_active_id][1],
      400,
      250,
      data_dict[current_tabs_active_id][2]
    );
    if (non_active_div_siblings.length != 0) {
      for (i = 0; i < non_active_div_siblings.length; i++) {
        for (let j = 0; j < non_active_div_siblings[i].classList.length; j++) {
          if (
            non_active_div_siblings[i].classList[j] != "graph" &&
            non_active_div_siblings[i].classList[j] != "js-plotly-plot" &&
            non_active_div_siblings[i].classList[j] != "non-active"
          ) {
            non_active_div_sibling_id = non_active_div_siblings[i].classList[j];
          }
        }

        generate_graph(
          data_dict[non_active_div_sibling_id][0],
          non_active_div_sibling_id,
          "inactive",
          data_dict[non_active_div_sibling_id][1],
          400,
          250,
          data_dict[non_active_div_sibling_id][2]
        );
      }
    }
  }
});

$("#allYearsBtn").click(function (e) {
  console.log("all year");
  $("#yearfilter").attr(
    "href",
    "/output?p=" + data_bucket + "&q=" + data_file_name
  );
});

$("#singleYearBtn").click(function (e) {
  console.log("single year");
  console.log($("#singleYear").val());
  $("#yearfilter").attr(
    "href",
    "/output?p=" +
      data_bucket +
      "&q=" +
      data_file_name +
      "&y=" +
      $("#singleYear").val()
  );
});

$("#singleYear").on("change", function (e) {
  console.log("hello");
  console.log($("#singleYear").val());
  $("#yearfilter").attr(
    "href",
    "/output?p=" +
      data_bucket +
      "&q=" +
      data_file_name +
      "&y=" +
      $("#singleYear").val()
  );
});

$(document).ready(function () {
  $("#yearfilter").attr(
    "href",
    "/output?p=" + data_bucket + "&q=" + data_file_name
  );
  $("#singleYear").attr({
    min: harvestminDateYear,
    max: harvestmaxDateYear,
    value: harvestminDateYear,
  });

  // $("#startYear").attr({
  //     "min": harvestminDateYear,
  //     "max": harvestmaxDateYear,
  //     "value": harvestminDateYear
  // })

  // $("#endYear").attr({
  //     "min": harvestminDateYear,
  //     "max": harvestmaxDateYear,
  //     "value": harvestmaxDateYear
  // })
});

// Harvest Years Controls

$(function () {
  $("#blk-" + $("[name=harvestYears]:checked").val()).show();
  $("[name=harvestYears]").click(function () {
    $(".toHide").hide();
    $("#yearInput-" + $(this).val()).show("fast");
  });
});

d3.select("#dl-closed").on("click", function () {
  generate_table(
    data_dict["annual_timber_harvest_table"][0],
    "annual_timber_harvest_table",
    data_dict["annual_timber_harvest_table"][1]
  );
  generate_table(
    data_dict["total_yearly_net_change"][0],
    "total_yearly_net_change",
    data_dict["total_yearly_net_change"][1]
  );
  generate_table(
    data_dict["total_selected_net_change"][0],
    "total_selected_net_change",
    data_dict["total_selected_net_change"][1]
  );
  generate_table(
    data_dict["total_yearly_dispositions"][0],
    "total_yearly_dispositions",
    data_dict["total_yearly_dispositions"][1]
  );
  generate_table(
    data_dict["total_selected_dispositions"][0],
    "total_selected_dispositions",
    data_dict["total_selected_dispositions"][1]
  );

  generate_hidden_graph(
    data_dict["all_results_final_hidden"][0],
    "all_results_final_hidden",
    data_dict["all_results_final_hidden"][1],
    1300,
    700,
    data_dict["all_results_final_hidden"][2],
    data_dict["all_results_final_hidden"][3],
    captions_dict["all_results_final"]
  );
  generate_hidden_graph(
    data_dict["total_solid_carbon_dispositions_hidden"][0],
    "total_solid_carbon_dispositions_hidden",
    data_dict["total_solid_carbon_dispositions_hidden"][1],
    1300,
    700,
    data_dict["total_solid_carbon_dispositions_hidden"][2],
    data_dict["total_solid_carbon_dispositions_hidden"][3],
    captions_dict["total_solid_carbon_dispositions"]
  );
  generate_hidden_graph(
    data_dict["total_emissions_dispositions_hidden"][0],
    "total_emissions_dispositions_hidden",
    data_dict["total_emissions_dispositions_hidden"][1],
    1300,
    700,
    data_dict["total_emissions_dispositions_hidden"][2],
    data_dict["total_emissions_dispositions_hidden"][3],
    captions_dict["total_emissions_dispositions"]
  );
  generate_hidden_graph(
    data_dict["annual_net_change_carbon_stocks_hidden"][0],
    "annual_net_change_carbon_stocks_hidden",
    data_dict["annual_net_change_carbon_stocks_hidden"][1],
    1300,
    700,
    data_dict["annual_net_change_carbon_stocks_hidden"][2],
    data_dict["annual_net_change_carbon_stocks_hidden"][3],
    captions_dict["annual_net_change_carbon_stocks"]
  );
  generate_hidden_graph(
    data_dict["annual_harvest_and_timber_product_output_hidden"][0],
    "annual_harvest_and_timber_product_output_hidden",
    data_dict["annual_harvest_and_timber_product_output_hidden"][1],
    1300,
    700,
    data_dict["annual_harvest_and_timber_product_output_hidden"][2],
    data_dict["annual_harvest_and_timber_product_output_hidden"][3],
    captions_dict["annual_harvest_and_timber_product_output"]
  );
  generate_hidden_graph(
    data_dict["burned_with_energy_capture_emissions_hidden"][0],
    "burned_with_energy_capture_emissions_hidden",
    data_dict["burned_with_energy_capture_emissions_hidden"][1],
    1300,
    700,
    data_dict["burned_with_energy_capture_emissions_hidden"][2],
    data_dict["burned_with_energy_capture_emissions_hidden"][3],
    captions_dict["burned_with_energy_capture_emissions"]
  );
  generate_hidden_graph(
    data_dict["burned_without_energy_capture_emissions_hidden"][0],
    "burned_without_energy_capture_emissions_hidden",
    data_dict["burned_without_energy_capture_emissions_hidden"][1],
    1300,
    700,
    data_dict["burned_without_energy_capture_emissions_hidden"][2],
    data_dict["burned_without_energy_capture_emissions_hidden"][3],
    captions_dict["burned_without_energy_capture_emissions"]
  );
  generate_hidden_graph(
    data_dict["swds_emissions_hidden"][0],
    "swds_emissions_hidden",
    data_dict["swds_emissions_hidden"][1],
    1300,
    700,
    data_dict["swds_emissions_hidden"][2],
    data_dict["swds_emissions_hidden"][3],
    captions_dict["swds_emissions"]
  );
});

// exports

window.jsPDF = window.jspdf.jsPDF;

var img_png = d3.select("#png-export");
let zip = new JSZip();

big_count = 0;
small_count = 0;
function export_tables() {
  //export plotly tables as pngs

  var tables = document.getElementsByClassName("graph table");

  for (var i = 0; i < tables.length; i++) {
    // Plotly.toImage(tables[i], { format: 'png' });
    console.log(tables[i]);
    big_count += 1;
    generate_tables(
      tables[i],
      { format: "png" },
      tables[i].classList[3] + ".pdf"
    );
  }
}

function savePDF(imageDataURL, file_name) {
  var image = new Image();
  image.onload = function () {
    var imgData = imageDataURL;
    imageWidth = image.naturalWidth;
    imageHeight = image.naturalHeight;
    let orientation = "";
    let imgWidth = 0;
    let pageHeight = 0;

    if (imageWidth >= 1582) {
      console.log("landscape");
      orientation = "landscape";
      imgWidth = 270;
      pageHeight = 236;
    } else {
      console.log("portrait");
      orientation = "portrait";
      imgWidth = 210;
      pageHeight = 279;
    }

    var imgHeight = (imageHeight * imgWidth) / imageWidth;
    var heightLeft = imgHeight;

    var pdf = new jsPDF({
      orientation: orientation,
      unit: "mm",
      format: "letter",
    });
    var position = 10; // give some top padding to first page

    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight + 10; // top padding for other pages
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }
    var blob = pdf.output("blob");
    zip.file(file_name, blob, { binary: true });
    small_count += 1;
    if (small_count == big_count) {
      if (document.getElementById("official_check").checked == true) {
        fetch(`/set-official?p=` + data_bucket)
          .then(function (response) {
            return response.text();
          })
          .then(function (text) {
            console.log("GET response text:");
            console.log(text);
          });
      }
      zip.generateAsync({ type: "blob" }).then(function callback(content) {
        saveAs(content, data_file_name + ".zip");
      });
    }
  };
  image.src = imageDataURL;
}

async function generate_tables(div, options, file_name) {
  url = await Plotly.toImage(div, options);
  // console.log(url)
  savePDF(url, file_name);
}

function export_plots() {
  var image_array = [];

  $(".dl-files")
    .children()
    .each(function () {
      tempChk = $(this).children()[0];
      // console.log(tempChk.checked)
      if (tempChk.checked == true) {
        png_options = { format: "png", width: 1300, height: 700 };
        console.log(document.getElementsByClassName(tempChk.value)[0]);
        gen = generate_image(
          document.getElementsByClassName(tempChk.value)[0],
          png_options,
          tempChk.value.slice(0, -7) + ".png"
        );
      }
    });
}

async function generate_image(div, options, file_name) {
  url = await Plotly.toImage(div, options);
  await zip.file(file_name, urlToPromise(url), { binary: true });
}

function export_csv() {
  for (let i in data_dict) {
    if (i.includes("hidden") == false && i.includes("2") == false) {
      zip.file(i + ".csv", data_dict[i][0], { binary: true });
    }
  }
}
//export csv files

function urlToPromise(url) {
  return new Promise(function (resolve, reject) {
    JSZipUtils.getBinaryContent(url, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

d3.select("#download").on("click", function () {
  export_tables();
  export_csv();
  export_plots();
});
