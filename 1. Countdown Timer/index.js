const countdown = () => {
  // - Get today's day.
  const today = new Date().getTime();

  // - Get date you want.
  const eidDate = new Date("April 21,2023 00:00:00").getTime();

  // - Calculate remaining days.
  const distance = eidDate - today;

  // - Get days, hours, minutes, seconds.
  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  // - Calculate the time
  const remainingDays = Math.floor(distance / days); 
  const remainingHours = Math.floor((distance % days / hours)); 
  const remainingMinutes = Math.floor((distance % hours / minutes)); 
  const remainingSeconds = Math.floor((distance % minutes / seconds)); 

  // - Showing the time
  document.querySelector(".days").innerHTML = remainingDays
  document.querySelector(".hours").innerHTML = remainingHours
  document.querySelector(".minutes").innerHTML = remainingMinutes
  document.querySelector(".seconds").innerHTML = remainingSeconds

// - When Eid Day has come we should end the timer
const expired = "Expired"
if(distance<10000){
    document.querySelector(".days").innerHTML = expired
  document.querySelector(".hours").innerHTML = expired
  document.querySelector(".minutes").innerHTML = expired
  document.querySelector(".seconds").innerHTML = expired
}
};

setInterval(countdown,1000)

