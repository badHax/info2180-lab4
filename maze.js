$(document).ready(function(){
	var start_clicked = false;
	var wall_touched = false;
	//mouse touches boundary
	$(".boundary").mouseover(function(){
			if(start_clicked){
				$(".boundary").css({"background-color":"red"});//changed
				wall_touched = true;
			}
			
		});
	
	//start button clicked
	$("#start").click(function(){
			$(this).css({"border":"4px solid blue"});
			start_clicked = true;
			
			//reset the canvas
			if(wall_touched){
				restart();
				}
		});
	
	//end point successfully reached
	$("#end").click(function(){
			var boundary = $(".boundary").css("background-color");
			 if(start_clicked && !wall_touched){
					alert("You Win");
					restart();
				 }                                                                                                                                                                                                                                                                                                                                                                       
		});
		
	function restart(){
			$(".boundary").css({"background-color":"#eeeeee"});
				$("#start").css({"border":"1px solid black"});
				wall_touched = false;
				start_clicked = false;
		}
});
