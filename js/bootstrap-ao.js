// JavaScript Document
/********** common functions **********/
//get browser info
var bWidth = document.documentElement.clientWidth;
var bHeight = document.documentElement.clientHeight;
var bAgent	= navigator.userAgent;
var isMobile = false;
if(bWidth < 1024) {
	isMobile = true;
}

//no backward
var modeNoBk = true;
if(modeNoBk){
	history.pushState(null, null, location.href);
	window.onpopstate = function() {
		'use strict';
		history.go(1);
	};
}

//refresh on orientation change
$(function() {
	'use strict';
	$(window).on("orientationchange", function() {
	  window.location.reload();
	});
});

/** notice **/
//show notice
function notice(type, status, action, stay){
	'use strict';
	var nIndex;
	if(status !== ''){
		var nIcon;
		switch(type){
			case 'success':
				nIcon = 'check-circle';
				break;
			case 'info':
				nIcon = 'info-circle';
				break;
			case 'warning':	
				nIcon = 'exclamation-triangle';
				break;
			case 'danger':
				nIcon = 'times-circle';
				break;
			default:
				type = 'primary';
				nIcon = 'question-circle';
		}
		nIndex = $('#shoulder .alert').length;
		$('#shoulder').append('<div class="alert alert-' + type + ' alert-dismissible" role="alert" id="notice_' + nIndex + '"><button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button><div><i class="fa fa-fw fa-' + nIcon + ' transition-hs"></i><strong class="status transition-hs">' + status + '</strong><span class="action transition-hs">' + action + '</span></div></div>');
		$('#shoulder .alert').eq(nIndex).slideDown();
		if(!stay){
			setTimeout(function(){
				$('#shoulder .alert').eq(nIndex).slideUp();
			}, 3500);
		}
	}
	return nIndex;
}

//change notice
function notice_change(type, status, action, index){
	'use strict';
	if(status !== ''){
		var nIcon;
		switch(type){
			case 'success':
				nIcon = 'check-circle';
				break;
			case 'info':
				nIcon = 'info-circle';
				break;
			case 'warning':	
				nIcon = 'exclamation-triangle';
				break;
			case 'danger':
				nIcon = 'times-circle';
				break;
			default:
				type = 'primary';
				nIcon = 'question-circle';
		}
		var cNotice = $('#shoulder .alert').eq(index);
		cNotice.removeClass('alert-success alert-info alert-warning alert-danger alert-primary');
		cNotice.addClass('alert-' + type);
		cNotice.find('i').removeClass('fa-check-circle fa-info-circle fa-exclamation-triangle fa-times-circle fa-question-circle');
		cNotice.find('i').addClass('fa-' + nIcon);
		cNotice.find('.status').text(status);
		cNotice.find('.action').text(action);
		if(cNotice.css('display') === 'none'){
			cNotice.slideDown();
			setTimeout(function(){
				cNotice.slideUp();
			}, 3500);
		}
	}
}

//close notice
$(function() {
	'use strict';
	$('#shoulder').delegate('.alert', 'click', function(){
		$(this).slideUp();
	});
});

//image lazy load
function imgLazy(type){
	'use strict';
	if(type === 2){
		if($('body').hasClass('lazy')){
			$('<img/>').attr('src', $('body').data('src')).load(function() {
				$(this).remove();
				$('body').removeClass('lazy').css('background-image', 'url(' + $('body').data('src') + ')');
			});
		}
	} else {
		$('img.lazy').each(function(){
			$(this).addClass('transition');
			if($(this).data('type') !== 3){					//no placeholder
				$(this).before('<div class="img-placeholder"><i class="fa fa-spinner fa-pulse text-primary"></i></div>');
			}
		});
		setTimeout(function(){
			$('img.lazy').each(function(){
				var image = $(this);
				var iUrl = $(this).data('src');
				$('<img/>').attr('src', iUrl).load(function() {
					$(this).remove();
					image.parent().find('.img-placeholder').remove();
					image.removeClass('lazy').attr('src', iUrl);
				});
			});
		}, 200);
	}
}

//disabled link
$(function() {
	'use strict';
	setTimeout(function(){
		$('a').each(function() {
			if($(this).hasClass('inactive')){
				var da = $(this);
				da
					.data('toggle', 'tooltip')
					.tooltip({ title: 'not ready', trigger: 'click' })
					.click(function(e){
						e.preventDefault();
						e.stopPropagation();
						setTimeout(function(){
							da.tooltip('hide');
					}, 1500);
				});
			}
		});
	}, 500);
});

//go to top
function gotoTop(){
	'use strict';
	$('html, body').animate({ scrollTop: 0 }, 1500);
}

//toggle page mask
function toggleMask(){
	'use strict';
	if($('body').hasClass('mask-on')){
		$('body').removeClass('mask-on');
		$('.page-mask').remove();
	} else {
		$('body').addClass('mask-on');
		$('body').append('<div class="page-mask"></div>');
	}
}

//squeeze (toggle slide)
jQuery.fn.squeeze = function(speed){
	'use strict';
	return this.each(function(){
		var sEle = $(this);
		var sHeight = 0;
		sEle.children().each(function(){
			var cHeight = $(this).css('height');
            sHeight += parseInt(cHeight.substr(0, (cHeight.length - 2)));
        });
		sEle.css('max-height', sHeight);
		if(!sEle.hasClass('transition')){
			sEle.addClass('transition');
		}
		if(!sEle.hasClass('squeeze')){
			sEle.addClass('squeeze').removeClass('fast slow');
			switch(speed){
				case 'fast':
					sEle.addClass('fast');
					break;
				case 'slow':
					sEle.addClass('slow');
					break;
				default:
			}
		}
		if(sEle.hasClass('squeezed')){
			sEle.removeClass('squeezed');
		} else {
			setTimeout(function(){
				sEle.addClass('squeezed');
			}, 100);
		}
	});
};

//change url
function urlChng(param, value, push){
	'use strict';
	var query = $.url('?');
	if(value === ''){
		if(query !== undefined){
			delete query[param];
		}
	} else {
		if(query === undefined){
			query = new Object();
		}
		query[param] = value;
	}
	var url = ($.url('file') || './') + ($.isEmptyObject(query) ? '' : ('?' + $.param(query)));
	if(push){
		window.history.pushState(null, null, url);
	} else {
		window.history.replaceState(null, null, url);
	}
}