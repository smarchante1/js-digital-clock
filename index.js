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


  $('#purple-button').on('click', 'button', function(event) {
    let target = $('#ClockTower');
      target.removeClass().addClass('purple');
  });

  $('#blue-button').on('click', 'button', function(event) {
    let target = $('#ClockTower');
      target.removeClass().addClass('blue');
  });

  $('#yellow-button').on('click', 'button', function(event) {
    let target = $('#ClockTower');
      target.removeClass().addClass('yellow');
  });

  $('#pink-button').on('click', 'button', function(event) {
    let target = $('#ClockTower');
      target.removeClass().addClass('clock');
  });

  $('#left-button').on('click', 'button', function(event) {
    let target = $('#ClockTower');
      target.css('text-align', 'left');
  });

  $('#right-button').on('click', 'button', function(event) {
    let target = $('#ClockTower');
      target.css('text-align', 'right');
  });

  $('#center-button').on('click', 'button', function(event) {
    let target = $('#ClockTower');
      target.css('text-align', 'center');
  });

  $('#arial-button').on('click', 'button', function(event) {
    let target = $('#ClockTower');
      target.css('font-family', 'Arial');
  });

  $('#quicksand-button').on('click', 'button', function(event) {
    let target = $('#ClockTower');
      target.css('font-family', 'Quicksand');
  });

  $('#fantasy-button').on('click', 'button', function(event) {
    let target = $('#ClockTower');
      target.css('font-family', 'fantasy');
  });
};  

// $('.btn').click(function() {
//   $('#clock').removeClass().addClass("clock");
//   $('#clock').addClass($(this).html());
//   this.css('text-align', 'left');
//   this.css('text-align', 'right');

// });



clock();
