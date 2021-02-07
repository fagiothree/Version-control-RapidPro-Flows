var fs = require('fs');
var path = require("path");



//var input_path_original_flows = path.join(__dirname, "./philippines/philippines-review_activities.json");
//var input_path_original_flows = path.join(__dirname, "./master/plh-master-renamed.json");
var input_path_original_flows = path.join(__dirname, "./welcome.json");
var json_string_or_fl = fs.readFileSync(input_path_original_flows).toString();
var original_flows_full_json = JSON.parse(json_string_or_fl);

for (var fl = 0; fl<original_flows_full_json.flows.length; fl++){
    var flow_name = original_flows_full_json.flows[fl].name;
    var flow_obj =  JSON.stringify(original_flows_full_json.flows[fl], null, 2);
    //var output_path = path.join(__dirname, './philippines/split_flows_current/activity/' + flow_name +'.json');
    //var output_path = path.join(__dirname, './master/split_flows/' + flow_name +'.json');
    var output_path = path.join(__dirname, './' + flow_name +'.json');
    fs.writeFile(output_path, flow_obj, function (err, result) {
        if (err) console.log('error', err);
    });

}

original_flows_full_json.flows = [];


var full_flow_obj =  JSON.stringify(original_flows_full_json, null, 2);
/*
//var output_path = path.join(__dirname, './philippines/split_flows_localised/plh_master_no_flows.json');
var output_path = path.join(__dirname, './master/split_flows/plh_master_no_flows.json');
    fs.writeFile(output_path, full_flow_obj, function (err, result) {
        if (err) console.log('error', err);
    });
*/