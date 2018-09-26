// Put all your code in your document ready area
jQuery(function($){
  show = 0;

  $("#naam-keuze input.submit").click(function(){
		$('#naam-keuze').toggleClass('hidden');
		$('.afterLogin .modal').toggleClass('hidden');
    return false;
	});

  $(".afterLogin button.close").click(function(){
		$('.afterLogin .modal').toggleClass('hidden');
		$('#naam-keuze').toggleClass('hidden');
    return false;
	});

});
