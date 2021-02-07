var fs = require('fs');
var path = require("path");




var input_path_scheleton = path.join(__dirname, "../split_flows/plh_master_no_flows.json");
var json_string_scheleton = fs.readFileSync(input_path_scheleton).toString();
var scheleton_obj = JSON.parse(json_string_scheleton);


const master_directoryPath = path.join(__dirname, '../split_flows/international');
const flavour_directoryPath = path.join(__dirname, '../split_flows/philippines');

var master_file_names = fs.readdirSync(master_directoryPath);
var flavour_file_names = fs.readdirSync(flavour_directoryPath);

for (var f=0; f< master_file_names.length; f++){
    var json_file_name = master_file_names[f];
    //console.log(json_file_name)
    if (flavour_file_names.includes(json_file_name)){
        var input_path = flavour_directoryPath + "/" + json_file_name;
        console.log("F: " + json_file_name)
    }else{
        var input_path = master_directoryPath + "/" + json_file_name;
        console.log("M: " + json_file_name)
    }
    
    var json_string = fs.readFileSync(input_path).toString();
    var flow_json = JSON.parse(json_string);
    scheleton_obj.flows.push(flow_json);

}

var full_flow_obj =  JSON.stringify(scheleton_obj, null, 2);

console.log(scheleton_obj.flows.length)

var output_path = path.join(__dirname, '../output_flows/philippines_flavour_flows.json');

    fs.writeFile(output_path, full_flow_obj, function (err, result) {
        if (err) console.log('error', err);
    });
