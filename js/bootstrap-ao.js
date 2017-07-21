/******************************************
* project: bootstrap ao                   *
* author : horans@gmail.com               *
* website: github.com/horans/bootstrap-ao *
* version: build 170719                   *
******************************************/

/********** common functions **********/
//get browser info
var bWidth, bHeight;
var bAgent	= window.navigator.userAgent.toLowerCase();
var isMobile = false;
var isTablet = false;
var isDesktop = true;
function bDevice(){
	bWidth = document.documentElement.clientWidth;
	bHeight = document.documentElement.clientHeight;
	if(bWidth < 1200){			//tablet break point
		isDesktop = false;
		if(bWidth < 800){		//mobile break point
			isMobile = true;
		} else {
			isTablet = true;
		}
	}
}
$(window).on('load resize', function(){
	bDevice();
});

//mode
var sMode = {
    noback  : false,
    refresh : false
};

//no backward
if(sMode.noback){
	window.history.pushState(null, null, location.href);
	window.onpopstate = function() {
		'use strict';
		history.go(1);
	};
}

//refresh on orientation change
if(sMode.refresh){
	$(window).on("orientationchange", function() {
		'use strict';
		window.location.reload();
	});
}

//go to top
function gotoTop(){
	'use strict';
	$('html, body').animate({ scrollTop: 0 }, 1500);
}

//toggle page mask
function toggleMask(sw){
	'use strict';
	if($('body').hasClass('mask-on')){
		if(sw === undefined || sw === 'off'){
			$('body').removeClass('mask-on');
			$('.page-mask').remove();
		}
	} else {
		if(sw === undefined || sw === 'on'){
			$('body').addClass('mask-on');
			$('body').append('<div class="page-mask"></div>');
		}
	}
}

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
			query = {};
		}
		query[param] = value;
	}
	var url = window.location.pathname + ($.isEmptyObject(query) ? '' : ('?' + $.param(query)));
	if(push){
		window.history.pushState(null, null, url);
	} else {
		window.history.replaceState(null, null, url);
	}
}

//scroll to hash
$(function(){
	'use strict';
	$('body').on('click', 'a', function(e){
		var hash = $(this).attr('href');
		if(hash){
			if(hash.indexOf('#') === 0){
				e.preventDefault();
				if(hash !== '#' && $(this).data('toggle') !== 'tab'){
					var anch = $(hash);
					if($(hash).length === 0){
						anch = $('[name="' + hash.substr(1) +'"]');
					}
					if(anch.length === 1 && anch.css('display') !== 'none'){
						$('html, body').animate({ scrollTop: anch.offset().top }, 1500);
					}
				}
			}
		}
	});
});