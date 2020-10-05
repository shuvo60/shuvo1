/*----------background-color--------*/

$(document).ready(function(){
$("#color").click(function(){
	$("p").css("background-color",
	"green");
	
});
});

/*----------color--------*/
$(document).ready(function(){
$("#background-color").click(function(){
	$("h2").css({
		"background-color":"red",
		"color":"white"
	});
	
});
});
/*-- ----------Hide------------ -- --*/

$(document).ready(function(){
$("#Hide").click(function(){
	$("span").hide();
	
});
});

/*-- ----------Toggle------------ -- --*/
$(document).ready(function(){
	$("#toggle").click(function(){
		$("h1").toggle();
	});
});

/*-- ----------Arry---------- -- --*/
$(document).ready(function(){
    $("#flip").click(function(){
		$("#panel").slideToggle(1500);
    });
});

/*-----------parent----------------*/

$(document).ready(function(){
	 $("div").parent().css({
		 "color":"red",
		 
	 })
});
