let dayDisplay = document.querySelector('#day');
let dateDisplay = document.querySelector('#date');
let date = new Date();

let monts = [
   'Jan',
   'Feb',
   'Mar',
   'Apr',
   'May',
   'Jun',
   'Jul',
   'Aug',
   'Sep',
   'Oct',
   'Nov',
   'Dec',
];

let days = ['Monday',
'Tuesday',
'Wednesday',
'Thursday',
'Friday',
'Saturday',
'Sunday',
];

let year = date.getFullYear();
let month = date.getMonth();
let cDate = date.getDate();
let day = date.getDay() - 1;

let currentDate = `${cDate} - ${monts[month]} - ${year}`;

dateDisplay.innerHTML = currentDate;
dayDisplay.innerHTML = days[day];