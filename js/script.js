$(function(){
	console.log("ready")
	//jquery
	$('#contact').on('submit',function(e){
		console.log("form submitted")
		e.preventDefault();
		$.ajax({
		   url: "https://formspree.io/amit210889@gmail.com", 
		   method: "POST",
		   data: {	
		   	name: $('#name').val(),
		   	email: $('#email').val(),
		   	phone: $('#phone').val(),
		   	message: $('#msg').val(),
		   },
		   dataType: "json"
		})
		.done(function(){
			$('form').reset()
			console.debug('Form submiited successfully');
		})

	})
})

$(window).on('scroll', function() {
    var st = $(window).scrollTop() + 50;
    var fixedtotop = $(".scroller-anchor").offset().top;
    var hideonthis = $(".scroller-anchor-two").offset().top + 20;
    var s = $(".top-nav");
    s.show()
   if (st > fixedtotop && st <= hideonthis) {
        s.show()
        s.css({position: "fixed",top: "0px",zIndex : 99,marginTop :0,left:"0", right: "0px"});
        s.addClass('fixed-active');
    } else if (st < fixedtotop){
        s.css({position:"relative",top: "0px"})
        s.show()
        s.removeClass('fixed-active');
    }
    else  {
        s.hide()
        s.css({position:"relative"})
        s.removeClass('fixed-active');
        // s.show()
    }
})
