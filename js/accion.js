$(document).ready(function() {
	$("a").click(function(){ //Id del elemento cliqueable
		$('html, body').animate({scrollTop:0}, 'slow');
		return false;
	});
});