/* Make sure functions only start when page fully loads */
$(document).ready(function () {

// Gets current hour from moment.js
var currentHour = moment().format("H");

// Activates when saved btn is clicked
  $('.saveBtn').on('click', function () {
    
// get values from nearby from sibling and parent elements
    var eventDesc = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

// Save to local storage
localStorage.setItem(time, eventDesc); 


// Display notification that confirms event is added to local storage
    $('.event-confirm').addClass('show');

// Timeout function to hide confirmation after 6 seconds
    setTimeout (function () {
        $('.event-confirm').removeClass('show');
      }, 6000);

});

  // Retrieve saved events from localStorage
  $('#h-9 .description').val(localStorage.getItem('h-9'));
  $('#h-10 .description').val(localStorage.getItem('h-10'));
  $('#h-11 .description').val(localStorage.getItem('h-11'));
  $('#h-12 .description').val(localStorage.getItem('h-12'));
  $('#h-13 .description').val(localStorage.getItem('h-13'));
  $('#h-14 .description').val(localStorage.getItem('h-14'));
  $('#h-15 .description').val(localStorage.getItem('h-15'));
  $('#h-16 .description').val(localStorage.getItem('h-16'));
  $('#h-17 .description').val(localStorage.getItem('h-17'));




// Create a loop to change background depending on time by addung classes 
    for (i = 8; i < 18; i++) {
    if (currentHour == i) {
        $ (`#${i}`).addClass("present")
    } 
    else if (currentHour < i ) {
        $ (`#${i}`).addClass("future")
    }    
    else $ (`#${i}`).addClass("past")
}

/* Update heading with current date and time */
var today = moment().format('MMMM Do YY, H:mm')
$("#currentDay").text(today);

})