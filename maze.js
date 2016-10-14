$(document).ready(function(){
	var start_clicked = false;
	//mouse touches boundary
	$(".boundary").mouseover(function(){
			$(".boundary").css({"background-color":"red"});//changed
		});
	
	//start button clicked
	$("#start").click(function(){
			$(this).css({"border":"4px solid blue"});
			start_clicked = true;
		});
	
	//end point successfully reached
	$("#end").click(function(){
			var boundary = $(".boundary").css("background-color");
			 if(start_clicked && boundary != "red"){
					alert(boundary);
				 }                                                                                                                                                                                                                                                                                                                                                                       
		});
});
