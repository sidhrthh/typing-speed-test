// Timer
let time = 60;
window.setInterval(function(){
 if (time > 0)
   time--;
      document.getElementById("timer").innerHTML = time;
}, 1000);
