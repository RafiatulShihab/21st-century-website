/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js


****************************************************/

(function ($) {
	"use strict";

	////////////////////////////////////////////////////
	// 01. Header Sticky
	window.addEventListener("scroll", function(){
        var header = document.querySelector(".header__bottom"); 
        header.classList.toggle("sticky", window.scrollY > 0); 
    }); 


	////////////////////////////////////////////////////
	// 02. Mobile Menu Js
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "991",
		meanExpand: ['<i class="fal fa-plus"></i>'],
	});


	////////////////////////////////////////////////////
	// 03. Sidebar Js
	$(".tp-menu-toggle").on("click", function () {
		$(".tp-sidebar-menu").addClass("sidebar-opened");
		$(".body-overlay").addClass("opened");
	});
	$(".close-sidebar").on("click", function () {
		$(".tp-sidebar-menu").removeClass("sidebar-opened");
		$(".body-overlay").removeClass("opened");
	});


	////////////////////////////////////////////////////
	// 04. Body overlay Js
	$(".body-overlay").on("click", function () {
		$(".tp-sidebar-menu").removeClass("sidebar-opened");
		$(".body-overlay").removeClass("opened");
	});

	////////////////////////////////////////////////////
	// 07. Data CSS Js
	$("[data-background]").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});
	
	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	$("[data-bg-color]").each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"));
    });


	

})(jQuery);


