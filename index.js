const clock = function clock(){
  let date = new Date();
  let second = date.getSeconds();
  let minute = date.getMinutes(); 
  let hour = date.getHours(); 
  let meridiem = "AM";
  
  if(hour == 0){
    hour = 12;
  }
  
  if(hour > 12){
    hour = hour - 12;
    meridiem = "PM";
  }
  
  if (hour < 10 ) {
    hour = '0' + hour;
  }

  if (minute < 10){
    minute = '0' + minute;
  }

  if (second < 10){
    second = '0' + second;
  }

  
  let time = hour + ":" + minute + ":" + second + " " + meridiem;

  document.getElementById("ClockTower").innerText = time;
    
  setTimeout(clock, 1000);
  
}

clock();
