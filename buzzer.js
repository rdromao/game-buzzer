// Is it somebody's turn?
var buzzed = false;

// For how long the buzz will last
var buzzduration = 5;

// How many buzzers/teams are there
var buzzers = 5;

// Countdown timer global variable
var countdown;


// After turn's time is up or when Escape is pressed:
function killcountdown(){
	clearInterval(countdown)
  resetBuzzer();
}

// Reset buzzer colors and styles to initial state
function resetBuzzer(){

  $('.buzzer').css('width', (100/buzzers) +'%' );
  $('.buzzer').css('opacity', '.5');
  $('.leftmost .press-key-indicator').html('Press "A"');
  $('.left .press-key-indicator').html('Press "D"');
  $('.middle .press-key-indicator').html('Press "G"');
  $('.right .press-key-indicator').html('Press "J"');
  $('.rightmost .press-key-indicator').html('Press "L"');
  
  $('.press-key-indicator').removeClass('active');
  
  buzzed = false;
}

// Update seconds in buzzer as they pass and then reset
function countDown(i) {
    countdown = setInterval(
      function () {
        $('.press-key-indicator.active').html(i);
        i-- || killcountdown();  //if i is 0, then stop the countdown
      }, 1000);
}

// Buzz a buzzer
function buzz(classBuzzed){

  buzzed = true;

  $('.buzzer:not('+classBuzzed+')').css('width', (4/(buzzers-1)) +'%' );

  $(classBuzzed).css('opacity','1');
  $(classBuzzed).css('width', '96%');
  $(classBuzzed+' .press-key-indicator').addClass('active');
  $(classBuzzed+' .press-key-indicator').html(buzzduration);

  countDown(buzzduration-1);
}

// Listen for key presses and lock when a valid one is pressed
window.onkeyup = function(e) {
    var key = e.keyCode ? e.keyCode : e.which;
    
    if (key == 65 && !buzzed) {
        buzz('.leftmost');
    }else if (key == 68 && !buzzed && buzzers > 1) {
        buzz('.left');
    }else if (key == 71 && !buzzed && buzzers > 2) {
    		buzz('.middle');
    }else if (key == 74 && !buzzed && buzzers > 3) {
    		buzz('.right');
    }else if (key == 76 && !buzzed && buzzers > 4) {
        buzz('.rightmost');
    }else if (key == 27 && buzzed){
    		killcountdown();
    }
    
}

// Show/hide settings list
$(".settings .clickable").on('click', function(){
  $(".settings-list-container").slideToggle(150, function(){
    $('.settings').hide().show(0);
  });
});

// When buzzers duration changes, save the setting change
$("input[name=buzz-duration]").bind('keyup mouseup', function () {
    buzzduration = $(this).val();            
});

// When buzzers amount changes, save the setting change and apply it
$("input[name=buzzer-amount]").bind('keyup mouseup', function () {
    buzzers = $(this).val();

    resetBuzzer();
});