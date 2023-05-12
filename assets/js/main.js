/** 
* Theme Name: Grunt Start 
* Theme URI: www.sitedoprojeto.com 
* Description: Coloque a descrição do seu projeto aqui. 
* Author: E-deas 
* Author URI: http://www..com.br 
* Version: 1.0 
**/
jQuery(document).ready(function($){$("#owl-demo").owlCarousel({animateOut:"fadeOut",items:1,nav:!0,loop:!0,margin:0,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0})}),jQuery(document).ready(function($){$("#logo").owlCarousel({items:4,nav:!0,loop:!0,margin:10,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,navigation:!0,navigationText:["prev","next"],responsive:{0:{items:1},600:{items:3},1e3:{items:5}}})}),$("ul.nav li.dropdown").hover(function(){$(this).find(".dropdown-menu").stop(!0,!0).delay(200).fadeIn(500)},function(){$(this).find(".dropdown-menu").stop(!0,!0).delay(200).fadeOut(500)});