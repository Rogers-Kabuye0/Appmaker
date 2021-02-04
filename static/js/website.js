$(document).ready(function(){
	$('.cot1').click(function(){
		$('.cot1').css('color','#ba6868');
		$('.cot2').css('color','#2487ce');
		$('.cot3').css('color','#2487ce');
		$('#cont1').show();
		$('#cont2').hide();
		$('#cont3').hide();
	});
	$('.cot2').click(function(){
		$('.cot2').css('color','#ba6868');
		$('.cot1').css('color','#2487ce');
		$('.cot3').css('color','#2487ce');
		$('#cont2').show();
		$('#cont1').hide();
		$('#cont3').hide();
	});
	$('.cot3').click(function(){
		$('.cot3').css('color','#ba6868');
		$('.cot2').css('color','#2487ce');
		$('.cot1').css('color','#2487ce');
		$('#cont3').show();
		$('#cont2').hide();
		$('#cont1').hide();
	});
	$('.showit').click(function(){
		$(this).toggleClass('showyty');
		$('.menuyt').toggle();
		$('.mopamo').toggleClass('col-xxl-9');
	});
	$('.bli1').click(function(){
		$(this).addClass('maty');
		$('.bli2').removeClass('maty');
		$('.bli3').removeClass('maty');
		$('.bli4').removeClass('maty');
	});
	$('.bli2').click(function(){
		$(this).addClass('maty');
		$('.bli1').removeClass('maty');
		$('.bli3').removeClass('maty');
		$('.bli4').removeClass('maty');
	});
	$('.bli3').click(function(){
		$(this).addClass('maty');
		$('.bli2').removeClass('maty');
		$('.bli1').removeClass('maty');
		$('.bli4').removeClass('maty');
	});
	$('.bli4').click(function(){
		$(this).addClass('maty');
		$('.bli2').removeClass('maty');
		$('.bli3').removeClass('maty');
		$('.bli1').removeClass('maty');
	});
});



$(document).ready(function() {
	$('#bcopy1').click(function(){
		var text = $('.copy1').html();
		var tempfilement = $('<input>').val(text).appendTo('body').select();
		document.execCommand('copy');
		tempfilement.remove();
		$(this).text('copied');
	});

	$('#bcopy2').click(function(){
		var text = $('.copy2').html();
		var tempfilement = $('<input>').val(text).appendTo('body').select();
		document.execCommand('copy');
		tempfilement.remove();
		$(this).text('copied');
	});

	$('#bcopy3').click(function(){
		var text = $('.copy3').html();
		var tempfilement = $('<input>').val(text).appendTo('body').select();
		document.execCommand('copy');
		tempfilement.remove();
		$(this).text('copied');
	});

	$('#bcopy4').click(function(){
		var text = $('.copy4').html();
		var tempfilement = $('<input>').val(text).appendTo('body').select();
		document.execCommand('copy');
		tempfilement.remove();
		$(this).text('copied');
	});

	$('#bcopy4').click(function(){
		var text = $('.copy4').html();
		var tempfilement = $('<input>').val(text).appendTo('body').select();
		document.execCommand('copy');
		tempfilement.remove();
		$(this).text('copied');
	});

	$('#bcopy5').click(function(){
		var text = $('.copy5').html();
		var tempfilement = $('<input>').val(text).appendTo('body').select();
		document.execCommand('copy');
		tempfilement.remove();
		$(this).text('copied');
	});

	$('#bcopy6').click(function(){
		var text = $('.copy6').html();
		var tempfilement = $('<input>').val(text).appendTo('body').select();
		document.execCommand('copy');
		tempfilement.remove();
		$(this).text('copied');
	});

	$('#bcopy7').click(function(){
		var text = $('.copy7').html();
		var tempfilement = $('<input>').val(text).appendTo('body').select();
		document.execCommand('copy');
		tempfilement.remove();
		$(this).text('copied');
	});

	$('#bcopy8').click(function(){
		var text = $('.copy8').html();
		var tempfilement = $('<input>').val(text).appendTo('body').select();
		document.execCommand('copy');
		tempfilement.remove();
		$(this).text('copied');
	});

	$('#bcopy9').click(function(){
		var text = $('.copy9').html();
		var tempfilement = $('<input>').val(text).appendTo('body').select();
		document.execCommand('copy');
		tempfilement.remove();
		$(this).text('copied');
	});

	$('#bcopy10').click(function(){
		var text = $('.copy10').html();
		var tempfilement = $('<input>').val(text).appendTo('body').select();
		document.execCommand('copy');
		tempfilement.remove();
		$(this).text('copied');
	});

	$('#bcopy11').click(function(){
		var text = $('.copy11').html();
		var tempfilement = $('<input>').val(text).appendTo('body').select();
		document.execCommand('copy');
		tempfilement.remove();
		$(this).text('copied');
	});

	$('#bcopy12').click(function(){
		var text = $('.copy12').html();
		var tempfilement = $('<input>').val(text).appendTo('body').select();
		document.execCommand('copy');
		tempfilement.remove();
		$(this).text('copied');
	});

	$('#bcopy13').click(function(){
		var text = $('.copy13').html();
		var tempfilement = $('<input>').val(text).appendTo('body').select();
		document.execCommand('copy');
		tempfilement.remove();
		$(this).text('copied');
	});

	$('#bcopy14').click(function(){
		var text = $('.copy14').html();
		var tempfilement = $('<input>').val(text).appendTo('body').select();
		document.execCommand('copy');
		tempfilement.remove();
		$(this).text('copied');
	});

	$('#bcopy15').click(function(){
		var text = $('.copy15').html();
		var tempfilement = $('<input>').val(text).appendTo('body').select();
		document.execCommand('copy');
		tempfilement.remove();
		$(this).text('copied');
	});

	$('#bcopy16').click(function(){
		var text = $('.copy16').html();
		var tempfilement = $('<input>').val(text).appendTo('body').select();
		document.execCommand('copy');
		tempfilement.remove();
		$(this).text('copied');
	});
	$('#bcopy17').click(function(){
		var text = $('.copy17').html();
		var tempfilement = $('<input>').val(text).appendTo('body').select();
		document.execCommand('copy');
		tempfilement.remove();
		$(this).text('copied');
	});
	$('#bcopy18').click(function(){
		var text = $('.copy18').html();
		var tempfilement = $('<input>').val(text).appendTo('body').select();
		document.execCommand('copy');
		tempfilement.remove();
		$(this).text('copied');
	});
	$('#bcopy19').click(function(){
		var text = $('.copy19').html();
		var tempfilement = $('<input>').val(text).appendTo('body').select();
		document.execCommand('copy');
		tempfilement.remove();
		$(this).text('copied');
	});
	$('#bcopy20').click(function(){
		var text = $('.copy20').html();
		var tempfilement = $('<input>').val(text).appendTo('body').select();
		document.execCommand('copy');
		tempfilement.remove();
		$(this).text('copied');
	});
	$('#bcopy21').click(function(){
		var text = $('21').html();
		var tempfilement = $('<input>').val(text).appendTo('body').select();
		document.execCommand('copy');
		tempfilement.remove();
		$(this).text('copied');
	});
	$('#bcopy22').click(function(){
		var text = $('.copy22').html();
		var tempfilement = $('<input>').val(text).appendTo('body').select();
		document.execCommand('copy');
		tempfilement.remove();
		$(this).text('copied');
	});
	$('#bcopy23').click(function(){
		var text = $('.copy23').html();
		var tempfilement = $('<input>').val(text).appendTo('body').select();
		document.execCommand('copy');
		tempfilement.remove();
		$(this).text('copied');
	});
	$('#bcopy24').click(function(){
		var text = $('.copy24').html();
		var tempfilement = $('<input>').val(text).appendTo('body').select();
		document.execCommand('copy');
		tempfilement.remove();
		$(this).text('copied');
	});
})