// Put all your code in your document ready area
jQuery(function($){
  show = 0;

  $("#naam-keuze input.submit").click(function(){
		$('#naam-keuze').toggleClass('hidden');
		$('.afterLogin .modal').toggleClass('hidden');
    //get personal data
    $.ajax({
      url: 'https://testen.solviteers.nl/MijnApp/api/v1/personen/950051998/wijzignaamgebruik?naamgebruik='+$('.form-group input[type=radio]:checked').val(),
      type: 'POST',
      dataType: 'json',
      success: function (json) {
        console.log(json);
      },
      error: function () {
        console.log('boo!');
      },
      beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization',
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDExMTk5MTAsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTM5MjUvIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo1MzkyNS8ifQ.lxlaXPg7V8aMT5ViLanqUH6kBmCHx_VGN0oQ9wgNvUg');
      }
    });

		$('#selected-result').text($('.form-group input[type=radio]:checked').val());
    return false;
	});

  $(".afterLogin button.close").click(function(){
		$('.afterLogin .modal').toggleClass('hidden');
		$('#naam-keuze').toggleClass('hidden');
    return false;
	});

});
