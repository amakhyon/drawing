
$(document).ready(function(){

	builder(squares());
	show();
});



function squares(){ //ask user for number of squares 
	do {square = prompt("enter number of squares (max 40)");
	}while (square > 40);
	return square;
}

function builder(hw){ //build grid using user input

	
	for (var i =0; i < hw; i++){
		for(var j=0; j< hw; j++){
			$('.wrapper').append('<div class="unit"> </div>');
		};
		$('.wrapper').append('<div class="clear"> </div>');
	};
};

function show(){  //change color of divisions when hovered on
	$('.unit').on('mouseover',function(){
		$(this).removeClass('unit');
		$(this).addClass('showed');
	});
};
function reset() {  //reset all divisions to original color
	$('.wrapper').empty();
	builder(squares());
	show();
}
