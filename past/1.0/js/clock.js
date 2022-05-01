const today = new Date();
let weekdays = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
let calendar = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

let month = calendar[today.getMonth()];
let date = today.getDate();
let day = weekdays[today.getDay()];
let suffix = function(d) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
    }
};

document.getElementById('date').innerHTML =  day + ', ' + date + suffix(date) + ' of ' + month;

function checkTime(i) {
    if (i < 10) {
        i = '0' + i;
    };
    return i;
}

function time() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    hours = checkTime(hours);
    minutes = checkTime(minutes);
    document.getElementById('time').innerHTML =  hours + ":" + minutes ;

    setTimeout(time, 1000);
}