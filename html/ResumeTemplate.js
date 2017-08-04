$(document).ready(function(){

    $.getJSON("http://localhost:8000/html/ResumeTemplate.json", function(json) {

        //function used to replace placeholders with JSON data
        function replaceAll(str,mapObj){
            var re = new RegExp(Object.keys(mapObj).join("|"),"gi");

            return str.replace(re, function(matched){
                return mapObj[matched];
            });
        };

        ////creates expRecord html
        var objectiveRecord = '<li id="obj1">' + $("#obj1").html() + '</li>';
        $("#obj1").remove();

        //creates expRecord html
        var record = '<div class="expRecord" id="exp1">' + $("#exp1").html() + '</div>';
        $("#exp1").remove();

        //creates roleItem html
        var roleItem = '<div class="roleItem" id="role1">' + $("#role1").html() + '</div>';
        $("#role1").remove();

        //creates roleItem html
        var accompRecord = '<div class="accompRecord" id="accomp1">' + $("#accomp1").html() + '</div>';
        $("#accomp1").remove();

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
        $("#roles").html(function(i, origText) {
            var role1 = origText.replace(/Role1/, Contact["Roles"][0]);
            return role1.replace(/Role2/, Contact["Roles"][1]);
        });

        //replaces template expRecord with JSON data and appends to work section
        var Work = json["Background"]["Work Experience"];

        $.each(Work, function(i, exp) {



            var map = {
                "exp1": exp["Id"],
                "nameReplace" : exp["Name"],
                "datesReplace": exp["Dates"]
            };

            var newRecord = replaceAll(record, map);

            $("#work").append(newRecord);

            var objSelector = "#" + exp["Id"] + " .objList ul";
            console.log(objSelector);

            $.each(exp["Objectives"], function(j, obj) {

                var subMap = {
                    "obj1": obj["Id"],
                    "objective": obj["Objective"]
                };

                var newObjective = replaceAll(objectiveRecord, subMap);

                $(objSelector).append(newObjective);

            });
        });

        //replaces template expRecord with JSON data and appends to service section
        var Service = json["Background"]["Service and Leadership"];

        $.each(Service, function(i, exp) {

            var map = {
                "exp1": exp["Id"],
                "nameReplace" : exp["Name"],
                "datesReplace": exp["Dates"]
            };

            var newRecord = replaceAll(record, map);

            $("#service").append(newRecord);
        });

        //replaces template expRecord with JSON data and appends to edu section
        var Edu = json["Background"]["Education"];

        $.each(Edu, function(i, exp) {

            var map = {
                "exp1": exp["Id"],
                "nameReplace" : exp["Name"],
                "datesReplace": exp["Dates"]
            };

            var newRecord = replaceAll(record, map);

            $("#education").append(newRecord);
        });

        //replaces template accompRecord with JSON data and appends to accomp section
        var Accomp = json["Skills and Accomplishments"]["Accomplishments"];

        $.each(Accomp, function(i, accomp) {

            var map = {
                "accomp1": accomp["Id"],
                "nameReplace" : accomp["Name"],
                "date1": accomp["Date"],
                "subReplace": accomp["Sub"]
            };

            var newRecord = replaceAll(accompRecord, map);

            $("#accomp").append(newRecord);
        });

        //replaces template roleItem with JSON data and appends to Skills and Accomplishments section
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
