$(document).ready(function(){
	var start_clicked = false;
	var wall_touched = false;
	var state_complete = false;
	var dflt_msg = "Move your mouse over the 'S' to begin.";
	
	//mouse touches boundary
	$(".boundary").mouseover(function(){
			if(start_clicked){
				$(".boundary").css({"background-color":"red"});//changed
				wall_touched = true;
				tell("--> YOU LOSE <--","red");
			}
			
		});
	
	//start button clicked
	$("#start").click(function(){
			restart();
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
					tell("<-- YOU WIN!!! -->", "green");
					state_complete = true;
					restart();
				 }                                                                                                                                                                                                                                                                                                                                                                       
		});
		
	function restart(){
			$(".boundary").css({"background-color":"#eeeeee"});
				$("#start").css({"border":"1px solid black"});
				wall_touched = false;
				start_clicked = false;
				if(state_complete){
					state_complete = false;
					return;
					}
				tell(dflt_msg,"black");
		}
	function tell(msg, col){
			$("#status").html(msg);
			$("#status").css({"color": col});
		}
});
