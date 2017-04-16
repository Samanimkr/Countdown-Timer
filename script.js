var secondsLeft, minutesLeft, hoursLeft, daysLeft, clock, secString, minString, hourString, dayString;

$(document).ready(function() {

    setInterval(function(){
      clock = calculateTimeLeft();
      document.getElementById('clock').innerHTML = clock;
    }, 1000);

  function calculateTimeLeft(){
    secondsLeft = 0, minutesLeft = 0, hoursLeft = 0, daysLeft = 0;

    var today = new Date(); //currentday
    today.setFullYear(today.getFullYear());
    today.setMonth(today.getMonth());
    today.setDate(today.getDate());
    today.setHours(today.getHours());
    today.setMinutes(today.getMinutes());
    today.setSeconds(today.getSeconds()); //added one to fix the countdown being off
    today.setMilliseconds(today.getMilliseconds()); //same here

    var fdate = new Date(2017, 4, 10, 0, 0, 0, 0);
    var secondsLeft = Math.floor((fdate - today) / 1000);

    if(secondsLeft >= 0){
      while(secondsLeft>=60){
        secondsLeft -= 60;
        minutesLeft += 1;
      }
      while(minutesLeft>=60){
        minutesLeft -= 60;
        hoursLeft += 1;
      }
      while(hoursLeft>=24){
        hoursLeft -= 24;
        daysLeft += 1;
      }
      secString = secondsLeft; minString = minutesLeft; hourString = hoursLeft; dayString = daysLeft;
      if (secondsLeft<10){secString = "0" + secondsLeft}
      if (minutesLeft<10){minString = "0" + minutesLeft}
      if (hoursLeft<10){hourString = "0" + hoursLeft}
      if (daysLeft<10){dayString = "0" + daysLeft}
      return dayString + ":" + hourString + ":" + minString + ":" + secString;
    } else {
      return "00:00:00:00"
    }


}

});
