$(function(){
	//		大总管变量
		var c = 0;
//		设置定时器,让ul每隔一秒钟滑动一次
		setInterval(function(){
			c++;
			if (c==5) {
//				让ul做一个瞬时变化
				$(".laba ul").css({'top':'0px'});
				c=1;
			}
//			计算ul应该到达的top值
			var t = c*-37;
//			让ul滑动上去
			$(".laba ul").animate({'top':t+'px'},500);
		},2000)
})