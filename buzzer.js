var buzzed = false;

var countdown;

function sleep(ms) {
 return new Promise(resolve => setTimeout(resolve, ms));
}

function killcountdown(){
	clearTimeout(countdown);
  resetBuzzer();
}

// Reset buzzer colors to initial state
function resetBuzzer(){
  $('.left').css("width", "33.33%");
  $('.middle').css("width", "33.33%");
  $('.right').css("width", "33.33%");
	$('.left').css("background-color", "#FFCDD2");
	$('.middle').css("background-color", "#BBDEFB");
	$('.right').css("background-color", "#C8E6C9");
  buzzed = false;
}

window.onkeyup = function(e) {
    var key = e.keyCode ? e.keyCode : e.which;
    
    if (key == 65 && !buzzed) {
    		buzzed = true;
        $('.left').css("background-color", "#F44336");
        $('.left').css("width", "98%");
        $('.middle').css("width", "1%");
        $('.right').css("width", "1%");
        countdown = setTimeout(resetBuzzer, 5000);
    }else if (key == 72 && !buzzed) {
    		buzzed = true;
        $('.middle').css("background-color", "#2196F3");
        $('.left').css("width", "1%");
        $('.middle').css("width", "98%");
        $('.right').css("width", "1%");
        countdown = setTimeout(resetBuzzer, 5000);
    }else if (key == 76 && !buzzed) {
    		buzzed = true;
        $('.right').css("background-color", "#4CAF50");
        $('.left').css("width", "1%");
        $('.middle').css("width", "1%");
        $('.right').css("width", "98%");
        countdown = setTimeout(resetBuzzer, 5000);
    }else if (key == 27 && buzzed){
    		killcountdown();
    }
    
}