// ------------------------------------Home Section--------------------------------
$('.menuBtn').click(function(){
  $('.sidebar').addClass('active');

});


$('.closeBtn').click(function(){
  $('.sidebar').removeClass('active');


});


// -----------------------------Details Section-------------------------------
$('.singer-headline-one').click(function(){

    $('.singer-caption-one').slideToggle(1000)   
    
});


$('.singer-headline-two').click(function(){

    $('.singer-caption-two').slideToggle(1000)   
    
});


$('.singer-headline-three').click(function(){

    $('.singer-caption-three').slideToggle(1000)   
    
});


$('.singer-headline-four').click(function(){

    $('.singer-caption-four').slideToggle(1000)   
    
});


// -------------------------Duration Section------------------------------
// Set the date we're counting down to
let countDownDate = new Date("Dec 31, 2022 15:37:25").getTime();

// Update the count down every 1 second
let counter = setInterval(function() {

  // Get today's date and time
 let dateNow = new Date().getTime();
    
  // Find the distance between now and the count down date
 let datedifference = countDownDate - dateNow ;

//  Get Days
let days = Math.floor(datedifference / (1000 * 60 * 60 * 24));
let hours =Math.floor((datedifference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60) ));
let minutes = Math.floor((datedifference % (1000 * 60 *60)) / (1000 * 60));
let seconds = Math.floor((datedifference % (1000 * 60)) / (1000))
document.querySelector(".days").innerHTML = days + ` ` + `D`;
document.querySelector(".hours").innerHTML = hours  + ` ` + `h`;
document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}`: minutes + ` ` + `m`;
document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}`: seconds + ` ` + `s`;

if (datedifference < 0){
  clearInterval(counter);
}    
}, 1000);


// -------------------------ContactUs Section------------------------------
let myTextarea = document.getElementById("myTextarea");
let mySpan = document.getElementById("mySpan");
myTextarea.onkeyup = function(){
  'use strict',
  mySpan.textContent = 100 - this.value.length;
if (mySpan.textContent < 0){
  mySpan.innerHTML = 'your available character finished';
}
};

