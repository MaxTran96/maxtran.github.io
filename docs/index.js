window.onload = function() {
	$('.websites').on("click", function() { 
		var url = $(this).attr("data-link");
    	window.open(url,'_blank');
    	return false;
	});
	 $('.websites').hover(function() {
        $(this).css('cursor','pointer');
    });
};

