$( document ).ready(function() {
    var windowHeight = $(window).height() - 20;
    console.log(windowHeight);
    $("#color-sections").css("height", windowHeight);
    $("#girl").css("height", windowHeight);
    $("#down-triangle").css("top", windowHeight+20);
    $("#about-section").css("height", windowHeight);
    $("#about-section").css("top", windowHeight+20);

    $(window).scroll(function () {
	    if ($(this).scrollTop() > windowHeight+20) {
	        $("#down-triangle").css('position', 'fixed');
	        $("#down-triangle").css('top', 0);
	    }
	    if ($(this).scrollTop() > windowHeight-60) {
    		$("#girl").css('top', (windowHeight*-1) + 60);
	        $("#girl").css('position', 'fixed');
	        $(".tagline").hide();
	        $(".down-carrot").hide();
	    } else {
	    	$("#girl").css('top', 0);
	        $("#girl").css('position', 'absolute');
	        $("#down-triangle").css('position', 'absolute');
	        $("#down-triangle").css('top', windowHeight+20);
	        $(".tagline").show();
	        $(".down-carrot").show();
	    }

	});

});

function pinkGirl() {
	$("#girl").css("background-color", "#f492a7");
	$("#hair").attr("fill", "#f44780");
	$("#shape").attr("fill", "#f44780");
}

function redGirl() {
	$("#girl").css("background-color", "#ff7a65");
	$("#hair").attr("fill", "#b73023");
	$("#shape").attr("fill", "#b73023");
}
function orangeGirl() {
	$("#girl").css("background-color", "#ffb35c");
	$("#hair").attr("fill", "#ff8700");
	$("#shape").attr("fill", "#ff8700");
}
function yellowGirl() {
	$("#girl").css("background-color", "#FFE06C");
	$("#hair").attr("fill", "#FCD100");
	$("#shape").attr("fill", "#FCD100");
}
function greenGirl() {
	$("#girl").css("background-color", "#00B50D");
	$("#hair").attr("fill", "#086108");
	$("#shape").attr("fill", "#086108");
}
function turquoiseGirl() {
	$("#girl").css("background-color", "#08B5EE");
	$("#hair").attr("fill", "#00DCB4");
	$("#shape").attr("fill", "#00DCB4");
}
function blueGirl() {
	$("#girl").css("background-color", "#0b31aa");
	$("#hair").attr("fill", "#3291F9");
	$("#shape").attr("fill", "#3291F9");
}
function purpleGirl() {
	$("#girl").css("background-color", "#462959");
	$("#hair").attr("fill", "#a27994");
	$("#shape").attr("fill", "#a27994");
}
function lightsOn() {
	$("#girl").css("background-color", "#fff");
	$("#hair").attr("fill", "#000");
	$("#shape").attr("fill", "#a27994");
}
function lightsOff() {
	$("#girl").css("background-color", "#000");
	$("#hair").attr("fill", "#fff");
	$("#shape").attr("fill", "#fff");
}
