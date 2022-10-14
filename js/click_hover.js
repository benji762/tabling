$(function(){
	var referrer = document.referrer;
	$('.page_back').click(function(){
		history.go(-1); // 방법1
	})
	})


$(function(){
	$('#section2 .btn_time').each(function(){
		$(this).click(function(){
			$('#section2 .btn_time').removeClass('on');
			$(this).addClass('on');
		})
	})
	})