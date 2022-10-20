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

	$(function(){
	$('#review_feed .btn_hash').each(function(){
		$(this).click(function(){
			$('#review_feed .btn_hash').removeClass('on');
			$(this).addClass('on');
		})
	})
	})

	$(function(){
		$('.btn_person .add').click(function(){
			$(".person_val").val(parseInt($(".person_val").val())+1);
		})
		$('.btn_person .minus').click(function(){
			$(".person_val").val(parseInt($(".person_val").val())-1);
		})
		})