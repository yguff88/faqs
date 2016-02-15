$(document).ready(function(){
	$('p').hide();
});

$(document).ready(function(){
	$('#description').slideDown	();
});

$('#question1').on('click',function(){
	$('#answer1').slideDown();
});

$('#question2').on('click',function(){
	$('#answer2').slideDown();
});

$('#question3').on('click',function(){
	$('#answer3').slideDown();
});
// Tip: You can either hide the answer on page load with js or use display:none in css

