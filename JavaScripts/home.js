document.addEventListener("DOMContentLoaded", function () {
  var audio = document.getElementById("background-audio");

  function playAudio() {
    audio.play();
    // Remove event listeners after playing audio to prevent multiple calls
    document.removeEventListener("click", playAudio);
    document.removeEventListener("scroll", playAudio);
  }

  // Add event listeners for user interaction
  document.addEventListener("click", playAudio);
  document.addEventListener("scroll", playAudio);
});

function clock(){
                
    var monthNames = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ]; 
    var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

    var today = new Date();

    document.getElementById('Date').innerHTML = (dayNames[today.getDay()] + " " + 
    today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' +today.getFullYear());

    
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var day = h<11 ? 'AM': 'PM';

    h = h<10? '0'+h: h;
    m = m<10? '0'+m: m;
    s = s<10? '0'+s: s;               

    document.getElementById('hours').innerHTML = h;
    document.getElementById('min').innerHTML = m;
    document.getElementById('sec').innerHTML = s;

}var inter = setInterval(clock,400);

