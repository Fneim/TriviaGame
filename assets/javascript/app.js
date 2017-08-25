$(document).ready(function() {

        var count = 60;

        var timer = setInterval(function() {
            $("h1").text("00:" + count);
            count--
            if (count < 10) {
                $("h1").text("00:0" + count);
            }
            if (count === 0) {
                clearInterval(timer);
            }
        }, 1000);

        var answers = { q1: "Wool's Orphanage", q2: 6, q3: "Merope Guant", q4: 70, q5: "Death eaters" };


        var correct = 0;
        var incorrect = 0;


        $("#nextButton").click(function() {
            // for (var i = 0; i < answers.length; i++) {
            // var answers = answers[i];

            //     if($("input:radio:checked").length == true) {
            //             correct++;
            //     console.log("correct");
            // } else {
            //     incorrect++;
            //     console.log("incorrect");
            // }
            // var wool = $("#wools").val();

            if ($("#wools").attr('value') == "Wool's Orphanage") {
               
                    correct++;
                    console.log("correct");
                } else {
                    incorrect++;
                    console.log("incorrect");
                }
            

            if ($("#six").val() == "6") {
            
                    correct++;
                    console.log("correct");
                } else {
                    incorrect++;
                    console.log("incorrect");
                }
        


            if ($("[name=q3]").length) {
                if ($("merope") == answers.q3) {
                    correct++;
                    console.log("correct");
                } else {
                    incorrect;
                    console.log("incorrect");
                }
            }

            if ($("[name=q4").length) {
                if ($("#seventy") == answers.q4) {
                    correct++;
                    console.log("correct");
                } else {
                    incorrect++;
                    console.log("incorrect");
                }
            }

            if ($("[name=q5").length) {
                if ($("#deathEaters") == answers.q5) {
                    correct++;
                    console.log("correct");
                } else {
                    incorrect++;
                    console.log("incorrect");
                }
            }
        })
    });