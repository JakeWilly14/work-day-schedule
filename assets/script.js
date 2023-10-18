// Creating variable for date display 
// Using jQuery method on date ID and entering it into the HTML text.
var currentDate = dayjs().format('dddd MMMM D,');
$('#current-date').text(currentDate);

// Assign each hour variables with dayjs values
// We will check dayjs values for expired hours of the day
var nineAm = dayjs().hour(9).hour();
console.log(nineAm);
var tenAm = dayjs().hour(10).hour();
var elevenAm = dayjs().hour(11).hour();
var twelvePm = dayjs().hour(12).hour();
var onePm = dayjs().hour(13).hour();
var twoPm = dayjs().hour(14).hour();
var threePm = dayjs().hour(15).hour();
var fourPm = dayjs().hour(16).hour();
var fivePM = dayjs().hour(17).hour();
console.log(fivePM);