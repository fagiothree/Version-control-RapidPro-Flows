var fs = require('fs');
var path = require("path");




var input_path_scheleton = path.join(__dirname, "../split_flows/plh_scheleton.json");
var json_string_scheleton = fs.readFileSync(input_path_scheleton).toString();
var scheleton_obj = JSON.parse(json_string_scheleton);


const flows_to_add_directoryPath = path.join(__dirname, '../split_flows/to_add');

var flows_file_names = fs.readdirSync(flows_to_add_directoryPath);

for (var f=0; f< flows_file_names.length; f++){
    var json_file_name = flows_file_names[f];
    var input_path = flows_to_add_directoryPath + "/" + json_file_name;
        console.log("M: " + json_file_name)
    
    
    var json_string = fs.readFileSync(input_path).toString();
    var flow_json = JSON.parse(json_string);
    scheleton_obj.flows.push(flow_json);

}

var full_flow_obj =  JSON.stringify(scheleton_obj, null, 2);

console.log(scheleton_obj.flows.length)

var output_path = path.join(__dirname, '../output_flows/json_with_flows_to_add.json');

    fs.writeFile(output_path, full_flow_obj, function (err, result) {
        if (err) console.log('error', err);
    });
