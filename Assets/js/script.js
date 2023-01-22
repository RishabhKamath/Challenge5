function whatTime() {
    var timeNow = moment().hour();
    // console.log(timeNow);

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
    // console.log('yes')
});

$(document).ready(function() {
    // Get all the hours
    var hours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
  
    // Loop through each hour
    hours.forEach(function(hour) {
      // Get the stored text for the hour
      var text = localStorage.getItem(`hour${hour}`);
      // Find the text area for the hour and set the text
      $(`#hour${hour}`).find(".event").val(text);
    });
  
    $(".saveBtn").on("click", function() {
      // Get the value of the textarea
      var text = $(this).parent().siblings(".col-sm-10").find(".event").val();
      // Get the hour of the time-block
      var hour = $(this).parent().siblings(".col-sm-1").find(".hour").text();
      // Save the text and hour to local storage
      localStorage.setItem(`hour${hour}`, text);
    });
  });