
$(document).ready(function(){

	builder(squares());
	show();
});



function squares(){
	do {square = prompt("enter number of squares (max 40)");
	}while (square > 40);
	return square;
}

function builder(hw){

	
	for (var i =0; i < hw; i++){
		for(var j=0; j< hw; j++){
			$('.wrapper').append('<div class="unit"> </div>');
		};
		$('.wrapper').append('<div class="clear"> </div>');
	};
};

function show(){
	$('.unit').on('mouseover',function(){
		$(this).removeClass('unit');
		$(this).addClass('showed');
	});
};
function reset() {
	$('.wrapper').empty();
	builder(squares());
	show();
}
