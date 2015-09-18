//Read this. Thank you.
var i;
$(document).ready(function(e) {
    $("body").hide();
	$(".msg").hide();	
	for(i=1;i<=12;i++){
		var s = document.createElement("script");
		document.getElementsByTagName("head")[0].appendChild(s);
		s.textContent =	'$("#l'+i+'").on("click", function(event){$("#m'+i+'").toggle("fast").css("left",event.pageX).css("top",event.pageY);$(".msg").not($("#m'+i+'")).hide()});';
		}
});
$(window).load(function(){
	$("body").show();
});