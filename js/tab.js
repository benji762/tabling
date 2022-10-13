$(function(){
		// 1. 각각의 tabSet 별로 따로 처리되게한다
		$('.tabSet').each(function(){ //각각의 tabSet 별로 처리
		// 4. 기본상태 일 때 선택되어 있는 anchor의 panel이 보이게 한다.
			var anchor_on = $(this).find('.tabs a.on'); // on 클래스를 가진 anchor를 anchor_on으로 선언
			var href_on = anchor_on.attr('href'); // anchor_on의 href 값을 href_on의 선언
			$(href_on).show(); //  anchor_on인 panel을 보여준다
		// 2. 각 버튼(anchor)을 클릭했을 때 각각의 내용(panel)이 나오게하고 클릭되지않은 상태의 내용(panel)은 안나오게 한다.
			var anchor = $(this).find('.tabs a'); //버튼(anchor)를 anchor로 선언
			var panel = $(this).find('.panel');
			
			anchor.each(function(){ //각각의 anchor 별로 처리
				var href = $(this).attr('href'); //각각의 anchor의 href 속성값을 href로 선언
				$(this).click(function(e){ //각각의 anchor를 클릭했을 때 
					e.preventDefault();
					panel.hide(); // 클릭되지않은 anchor의 panel은 안나오게 한다.
					$(href).show(); //클릭된 anchor의 panel이 나오게한다.	(href값을 선택자로 쓰기위해 $()로 감싸줘야함) 
		// 3. 각 버튼(anchor)을 클릭했을 때 클릭 된 버튼의 배경색이 바뀌게한다(class on / off)
					anchor.removeClass('on'); // anchor의 배경색을 없애주고
					$(this).addClass('on') // 클릭된 anchor만 배경색이 생기게 한다.
					
				}) //$(this).click
			}) //anchor.each
		}) //$('.tabSet').each
	})