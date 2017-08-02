$(document).ready(function(){

    var section = $("#section1").clone();
    var record = $("#record1").clone();
    var objective = $("#obj1").clone();
    var role = $("#role1").clone();
    var tag = $("#tag1").clone();

    $.getJSON("ResumeTemplate.json", function(json) {
        console.log("Success");
        console.log(json);
    });


});
