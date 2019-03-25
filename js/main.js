$(document).ready(function() {

	// Tabs

	$('#menu-tabs li').click(function(){
		var thisClass = this.className.slice(0,2);
		
		$('div.t1').hide();
		$('div.t2').hide();
		$('div.t3').hide();
		$('div.' + thisClass).fadeIn(500);
		$('#menu-tabs li').removeClass('active');
		$(this).addClass('active');
		return false;
	});
	$('li.t1').click();


	// Slick-slider

	$('.slideshow-container').slick({
  
 	});


	// Mobile-menu

	var menuElem = document.getElementById('touch-menu');
    var titleElem = menuElem.querySelector('.title');

    titleElem.onclick = function() {
      menuElem.classList.toggle('open');
    };
});