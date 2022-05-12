
// WHEN I open the planner // THEN the current day is displayed at the top of the calendar
$('#currentDay').text(moment().format('dddd MMM Do'));


// WHEN I click the save button for that timeblock // THEN the text for that event is saved in local storage

$('.saveBtn').on('click',function(){
let key = $(this).parent().attr('id');
let value = $(this).siblings('.description').val();

localStorage.setItem(key,value)

});

// WHEN I refresh the page // THEN the saved events persist


$('#9 .description').val(localStorage.getItem('9'))
$('#10 .description').val(localStorage.getItem('10'))
$('#11 .description').val(localStorage.getItem('11'))
$('#12 .description').val(localStorage.getItem('12'))
$('#13 .description').val(localStorage.getItem('13'))
$('#14 .description').val(localStorage.getItem('14'))
$('#15 .description').val(localStorage.getItem('15'))
$('#16 .description').val(localStorage.getItem('16'))
$('#17 .description').val(localStorage.getItem('17'))
$('#18 .description').val(localStorage.getItem('18'))

// WHEN I view the timeblocks for that day // THEN each timeblock is color coded to indicate whether it is in the past, present, or future

console.log();

function timeEL(){
  let currentTime = moment().hours();

  $('.time-block').each(function(){
    let time = parseInt( $(this).attr('id'));
    if (time < currentTime ){
      $(this).addClass('past')
    }
   else if (time === currentTime){
    $(this).addClass('present')
    $(this).removeClass('past')
  } else {
    $(this).addClass('future')
    $(this).removeClass('present')
  }
})
};

timeEL();

