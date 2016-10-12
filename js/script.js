$(function(){
	console.log("ready")
	//jquery
	$('#contact').on('submit',function(e){
		console.log("form submitted")
		e.preventDefault();
		alert("ok")
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
			console.debug('Form submiited successfully');
			alert("Form submiited successfully !!!")
		})

	})
})