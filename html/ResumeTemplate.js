$(document).ready(function(){

    $.getJSON("http://localhost:8000/html/ResumeTemplate.json", function(json) {

        function replaceAll(str,mapObj){
            var re = new RegExp(Object.keys(mapObj).join("|"),"gi");

            return str.replace(re, function(matched){
                return mapObj[matched];
            });
        };

        var record = '<div class="expRecord">' + $("#record1").html() + '</div>';
        $("#record1").remove();

        var roleItem = '<div class="roleItem">' + $("#role1").html() + '</div>';
        $("#role1").remove();

        //sets contact object to variable Contact
        var Contact = json["Contact"];

        //populates header with information from Contact object
        $("#emailText").text(Contact["Email"]);
        $("#phoneText").text(Contact["Phone"]);
        $("#locationText").text(Contact["Location"]);
        $("#name").text(Contact["Name"]);
        $("#score").text(Contact["Score"]);
        $("#profile").text(function(i, origText) {
            return origText.replace(/profile/, Contact["Profile"].toUpperCase());
        });
        $("#roles").text(function(i, origText) {
            var role1 = origText.replace(/Role1/, Contact["Roles"][0]);
            console.log(role1);
            return role1.replace(/Role2/, Contact["Roles"][1]);
        });

        //sets Background work experience array to variable Work
        var Work = json["Background"]["Work Experience"];
        console.log(Work);

        $.each(Work, function(i, exp) {

            var map = {
                "record1": exp["Id"],
                "nameReplace" : exp["Name"],
                "datesReplace": exp["Dates"]
            };

            var newRecord = replaceAll(record, map);

            $("#work").append(newRecord);
        });

        var Service = json["Background"]["Service and Leadership"];

        $.each(Service, function(i, exp) {

            var map = {
                "record1": exp["Id"],
                "nameReplace" : exp["Name"],
                "datesReplace": exp["Dates"]
            };

            var newRecord = replaceAll(record, map);

            $("#service").append(newRecord);
        });

        var Edu = json["Background"]["Education"];

        $.each(Edu, function(i, exp) {

            var map = {
                "record1": exp["Id"],
                "nameReplace" : exp["Name"],
                "datesReplace": exp["Dates"]
            };

            var newRecord = replaceAll(record, map);

            $("#education").append(newRecord);
        });

        var role = json["Skills and Accomplishments"]["Roles"];

        $.each(role, function(i, exp) {

            var map = {
                "role1": exp["Id"],
                "nameReplace" : exp["Name"],
            };

            var newRoleItem = replaceAll(roleItem, map);

            $("#roleList").append(newRoleItem);
        });
    });


});
