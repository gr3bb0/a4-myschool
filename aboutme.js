$(document).ready(function() {
	$("#myinfo").hide();
	$("#aboutme").click(function() {
		$("#myinfo").fadeToggle(500);
	});
	// start of mouseover
	$(".mousechange").mouseenter(function() {
		$(this).css("color", "#0000ff");
	});
	$(".mousechange").mouseleave(function() {
		$(this).css("color", "#ffffff");
	});
});
