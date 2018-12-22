

$('document').ready(function(){

	// +++++++++++ animete menu scroll+++++++++
	$('#my-menu').on('click','a',function(event){
		
		event.preventDefault();

		var id = $(this).attr('href')
			tar = $(id).offset().top;
		$('body,html').animate({scrollTop:tar},900);
		return false;
	});


// ++++++++++ button show& hide ++++++++++
		$(window).scroll(function() {
		    var height = $(window).scrollTop();

		    if(height  > 500) {
		        $('.top').addClass("active")
		    }
		    else{
		    	$('.top').removeClass("active")
		    }
		});

// ++++++++++++button up ++++++++
	$('.top').on('click',function(event){
		
		$('body,html').animate({scrollTop:0},900);
	});

// ___________fixed show menu____________

				$(window).scroll(function() {
		    var x = $(window).scrollTop();

		    if(x  > 200) {
		        $('#my-menu2').addClass('active2')
		    }
		    else{
		    	$('#my-menu2').removeClass('active2')
		    }
		});

	// ++++++++++++++++ MODAL window +++++++++++++++++
		// $('#modal-1').hide();

	$('.button-main').click(function(){
		swal("Here's the title!", "...and here's the text!");
	});


		
});	
