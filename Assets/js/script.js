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

