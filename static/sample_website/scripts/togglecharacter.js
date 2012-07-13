//Roberto S.
//Code for animating the sprite:
//Uses the Spritely JQuery plugin
//Followed the tutorial on the Spritely website

//Register functions to get called when DOM has been loaded
$(document).ready(function() {
       //Look for deviruchi and make the sprite active 
	$('#deviruchi')
       	.sprite({
              	fps: 6, 
                     no_of_frames: 6,
                     start_at_frame: 1
                     })
		.active();
	

	//Register other functions
	window.actions = {
       	go_left: function() {
              	$('#deviruchi')
                     .fps(6)
                     .spState(1);
		},
              go_right: function() {
              	$('#deviruchi')
                     .fps(6)
                     .spState(2);
		},
		stand_left: function() {
              	$('#deviruchi')
                     .fps(6)
                     .spState(3);
		},
              stand_right: function() {
              	$('#deviruchi')
                     .fps(6)
                     .spState(4);

		}
	};

	//Moves Deviruchi on click checks left or right and changes state accordingly
	//Calls Spritely's flyToTap on the object
	$('body').click(function(e) {
		var deviruchi = $("#deviruchi");
		var position = deviruchi.position();
		if (e.pageX > position.left){
			actions.go_right();
		}
		if (e.pageX < position.left){
			actions.go_left();
		}		
	}).flyToTap();
	
	//Uncomment to enter regular standing mode for Deviruchi
	//window.setInterval("actions.stand_left()",1000);


	//Fades Deviruchi on click
	$('#deviruchi').isDraggable({
   		 start: function() {
        	$('#deviruchi').fadeTo('fast', 0.7);
   		 },
    		stop: function() {
      		  // Return fading back to normal
       	 $('#deviruchi').fadeTo('fast', 1);
    		},
   		 drag: function() {
       	 	//Gets called coninously while click
    		}
	});
});
