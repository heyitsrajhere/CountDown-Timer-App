let date = new Date(); 

const countDownTime = document.getElementsByClassName("display__time-left")[0];     //show count down time
const endTime = document.getElementsByClassName("display__end-time")[0];           //show end time

let currTime;  //current time

function countDownClock() { 

  let date = new Date(); 
  let hours = date.getHours(); 
  let minutes = date.getMinutes(); 
  let seconds = date.getSeconds(); 

  if (hours == 0) { 
    hours = 0; 
  } 

  currTime = `${changeValue(hours)} : ${changeValue(minutes)} : ${changeValue( seconds )}`; 

  endTime.innerHTML = `${currTime}`; 

  setTimeout(function() { 
   countDownClock(); 
   }, 1000); 
   return currTime;
  }

  // format time value like 00:00:00
  function changeValue(digit) { 
    if (digit >= 10) { 
      digit = digit; 
    } 
    else { 
      digit = "0" + digit; 
    } 
    return digit;
  } 

  countDownClock(); 

  let buttons = document.querySelectorAll(".timer__button");

  let showTime; 

  //for loop to add button
  for (let i = 0; i < buttons.length; i++){ 
    buttons[i].addEventListener("click", function() { 
      showTime = this.value; 
    });
  } 

  
    //countdown at mouse click
    setInterval (function() { 
      var minutes = Math.floor(showTime / 60); 
      var sec = showTime % 60; 
   
      let a = date.getMinutes() + Number(changeValue(minutes)) + 1;   // show minute input +  current
  
      // end time value findd
      if (a > 59) { 
    
       let b = Number(changeValue(minutes)) - (60 - date.getMinutes()) + 1; 
       endTime.innerHTML = `Will Be Back At ${changeValue( date.getHours() + 1 )} : ${changeValue(b)}`; 
      } 
      else if ("0" + a === "0NaN") {
      endTime.innerHTML = ""; 
      } 
      else { 
       //change minutes of end time
      let b1 = Number( changeValue(date.getMinutes() + Number(changeValue(minutes)) + 1) ); 
      endTime.innerHTML = `Will Be Back At ${changeValue( date.getHours() )} : ${changeValue(b1)}`; } 
      if (showTime > 0) { 
      countDownTime.innerHTML = `${changeValue(minutes)} : ${changeValue(sec)}`; 
      } 
       else { 
        countDownTime.innerHTML = "00" + ":" + "00"; 
      } 
      showTime--;
    }, 1000);
  

  //change time when press enter 

  document.getElementById("input").addEventListener("keypress", function(event) { 

    if (event.key === "Enter") { 
      event.preventDefault(); 
      showTime = Number(this.value) * 60;     //show time when user enter number

      if (Number(this.value) > 60)  { 
        alert("Please add value is less then 60");       
        showTime = 00; 
         endTime.innerHTML = ""; 
        } 
      } 
      
  }); 

