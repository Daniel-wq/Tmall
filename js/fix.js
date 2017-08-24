$(function(){
	$(window).scroll(function(){
		var h = $(window).scrollTop();
		if(h>=200){
			$('.bg').stop().animate({'opacity':'1'},100)
		}else{
			$('.bg').stop().animate({'opacity':'0'},100);
		}
	})
})
