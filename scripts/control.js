//Read this. Thank you.
//function takeme() {window.location='http://dtu.sakshamsaxena.in/index2.htm'};
var i;
var pre_1 = new TimelineMax();
var pre_2 = new TimelineMax();
var main_q = new TimelineMax({delay:3});
//if( localStorage.getItem("hits") ){takeme()}
//else{localStorage.setItem("hits",1)}

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
	pre_1
	.from("#sem1", 2, {left:"50%", autoAlpha:0, ease:Back.easeOut});
	
	pre_2
	.from("#sem2", 2, {right:"50%", autoAlpha:0, ease:Back.easeOut});
	
	main_q
	.from(".welcome", 0.5, {y:"-20px", autoAlpha:0, ease:Sine.easeIn})
	.from(".toDTU", 0.5, {y:"20px", autoAlpha:0, ease:Sine.easeIn})
	.fromTo(".smiley", 1, {scale:0, autoAlpha:0,ease:Back.easeIn}, {x:"30px", y:"10px", scale:2, autoAlpha:1, rotation:90,ease:Back.easeOut})
	.to([".smiley",".welcome", ".toDTU"], 1, {autoAlpha:0, easing:Quad.easeOut, delay:1.5})
	.fromTo("header", 1, {autoAlpha:0, y:"20px"}, {autoAlpha:1,y:"0px",ease:Back.easeIn})
	.staggerFromTo($(".sem_head"), 1, {autoAlpha:0,y:"-20px"}, {autoAlpha:1,y:"20%",ease:Back.easeIn}, 0.02)
	.staggerFromTo("li", 1, {autoAlpha:0, x:"0px"}, {autoAlpha:1, x:"40px", ease:Back.easeIn}, 0.2)
	.fromTo("footer", 1, {autoAlpha:0}, {autoAlpha:1, ease:Back.easeIn, delay:1});
});