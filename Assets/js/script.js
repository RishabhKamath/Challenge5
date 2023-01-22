// var todayDate = moment().format('dddd, MMM Do YYYY');
// $("#today").text(todayDate);

// function whatTime() {
//     var timeNow = moment().hour();

//     $(".time-block").each(function () {
//         var timeHour = parseInt($(this).attr("id").split("hour")[1]);

//         if (timeHour < timeNow) {
//             $(this).addClass("past");
//         }
//         else if (timeHour === timeNow) {
//             $(this).addClass("present");
//         }
//         else if (timeHour > timeNow) {
//             $(this).addClass("future");
//         }
//     })

// }

function whatTime() {
    var timeNow = moment().hour();

    $(".time-block").each(function () {
        var timeHour = parseInt($(this).find('.hour').text().split(':')[0]);
        if (timeHour < timeNow) {
            className = "past";
        }
        else if (timeHour === timeNow) {
            className = "present";
        }
        else if (timeHour > timeNow) {
            className = "future";
        }
        $(this).removeClass("past present future").addClass(className);
    });
}

$(document).ready(function () {
    whatTime();
})

