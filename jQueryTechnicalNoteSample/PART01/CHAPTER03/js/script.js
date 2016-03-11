////////////////////////////////////////
//　SCRIPT
////////////////////////////////////////
$(function(){
	$('#mddNav > ul > li').hover(function(){
		var $childPanel = $(this).children('.mddWrap');
		$childPanel.css({height:'0',display:'block',opacity:'0'}).css({height:'200px',opacity:'1'},500,'swing');
	},function(){
		var $childPanel = $(this).children('.mddWrap');
		$childPanel.css({display:'none'});
	});
});

