// Creating variable for date display 
// Using jQuery method on date ID and entering it into the HTML text.
var currentDate = dayjs().format('dddd MMMM D,');
$('#current-date').text(currentDate);

// Assign each hour variables with dayjs values
// We will check dayjs values for expired hours of the day
var nineAm = $('#nine-am');
nineAm = dayjs().hour(9).hour();
//console.log(nineAm);

var tenAm = $('#ten-am');
tenAm = dayjs().hour(10).hour();
//console.log(tenAm);

var elevenAm = $('#eleven-am');
elevenAm = dayjs().hour(11).hour();
//console.log(elevenAm);

var twelvePm = $('#twelve-pm');
twelvePm = dayjs().hour(12).hour();
//console.log(twelvePm);

var onePm = $('#one-pm');
onePm = dayjs().hour(13).hour();
//console.log(onePm);

var twoPm = $('#two-pm');
twoPm = dayjs().hour(14).hour();
//console.log(twoPm);

var threePm = $('#three-pm');
threePm = dayjs().hour(15).hour();
//console.log(threePm);

var fourPm = $('#four-pm');
fourPm = dayjs().hour(16).hour();
//console.log(fourPm);

var fivePm =$('#five-pm');
fivePm = dayjs().hour(17).hour();
//console.log(fivePm);

// Creating variable for just the hour of the day
var currentHour = dayjs().hour();
console.log(currentHour);

// Nine Am if statement
if (dayjs() >= nineAm && dayjs() < tenAm) {
  $('#nine-text').addClass('current');
} else if (dayjs() >= 1 && dayjs() < dayjs().hour(7).minute(59)){
  $('#nine-text').addClass('upcoming');
} else {
  $('#nine-text').addClass('expired');
}
// Ten Am if statement
if (dayjs() >= tenAm && dayjs() < elevenAm) {
  $('#ten-text').addClass('current');
} else if (dayjs() >= 1 && dayjs() < dayjs().hour(8).minute(59)){
  $('#ten-text').addClass('upcoming');
} else {
  $('#ten-text').addClass('expired');
}
// Eleven Am if statement
if (dayjs() >= elevenAm && dayjs() < twelvePm) {
  $('#eleven-text').addClass('current');
} else if (dayjs() >= 1 && dayjs() < dayjs().hour(9).minute(59)){
  $('#eleven-text').addClass('upcoming');
} else {
  $('#eleven-text').addClass('expired');
}
// Twelve Pm if statement
if (dayjs() >= twelvePm && dayjs() < onePm) {
  $('#twelve-text').addClass('current');
} else if (dayjs() >= 1 && dayjs() < dayjs().hour(11).minute(59)){
  $('#twelve-text').addClass('upcoming');
} else {
  $('#twelve-text').addClass('expired');
}
// One Pm if statement
if (dayjs() >= onePm && dayjs() < twoPm) {
  $('#one-text').addClass('current');
} else if (dayjs() >= 1 && dayjs() < dayjs().hour(12).minute(59)){
  $('#one-text').addClass('upcoming');
} else {
  $('#one-text').addClass('expired');
}
// Two Pm if statement
if (dayjs() >= twoPm && dayjs() < threePm) {
  $('#two-text').addClass('current');
} else if (dayjs() >= 1 && dayjs() < dayjs().hour(13).minute(59)){
  $('#two-text').addClass('upcoming');
} else {
  $('#two-text').addClass('expired');
}
// Three Pm if statement
if (dayjs() >= threePm && dayjs() < fourPm) {
  $('#three-text').addClass('current');
} else if (dayjs() >= 1 && dayjs() < dayjs().hour(14).minute(59)){
  $('#three-text').addClass('upcoming');
} else {
  $('#three-text').addClass('expired');
}
// Four Pm if statement
if (dayjs() >= fourPm && dayjs() < fivePm) {
  $('#four-text').addClass('current');
} else if (dayjs() >= 1 && dayjs() < dayjs().hour(15).minute(59)){
  $('#four-text').addClass('upcoming');
} else {
  $('#four-text').addClass('expired');
}
// Five Pm if statement
if (dayjs() > fivePm && dayjs() < dayjs().hour(18)) {
  $('#five-text').addClass('current');
} else if (dayjs() >= 1 && dayjs() < dayjs().hour(16).minute(59)){
  $('#five-text').addClass('upcoming');
} else {
  $('#five-text').addClass('expired');
}
console.log(dayjs().hour());

// Add event listeners for Save buttons
// Write function to save written message to local storage 