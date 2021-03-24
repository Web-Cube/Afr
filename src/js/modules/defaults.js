var defaults = {

	events: () => {
		$('.js-search-open').click(function(){
			$('.js-search').addClass('is-active');
		});
		$('.js-search-close').click(function(){
			$('.js-search').removeClass('is-active');
		});
		
		$(".js-scroll-to").click(function() {
			var attr_href = $(this).attr("href");
			var data_href = $(this).data("href");
			if ( data_href ) {
				attr_href = data_href;
			}
			$("html, body").animate({
				scrollTop: $(attr_href).offset().top + "px"
			}, {
				duration: 1000
			});
			return false;
		});
	},
	
	selectToggle: (e) => {
		
		let item = $(e.currentTarget).parent();
			
		if ( item.hasClass('is-active') ) {
			item.removeClass('is-active');
		} else {
			$('.js-select.is-active').removeClass('is-active');
			item.addClass('is-active');
		}
			
	},
	
	selectOutside: (e) => {
		let select = $(".js-select.is-active"); // тут указываем ID элемента
		if (!select.is(e.target) // если клик был не по нашему блоку
		    && select.has(e.target).length === 0) { // и не по его дочерним элементам
			$(".js-select.is-active").removeClass('is-active'); // скрываем его
		}
	},
	
	selectClose: (e) => {
		
		let item = $(e.currentTarget).closest('.js-select');
		
		item.removeClass('is-active');
		
		return false;
			
	},
	
	selectChange: (e) => {
		
		let item = $(e.currentTarget).closest('.js-select');
		let value = $(e.currentTarget).data('value');
		
		item.removeClass('is-active');
		
		item.find('.js-select-input').val(value);
		item.find('.js-select-label').text(value);
		item.find('.js-select-item.is-active').removeClass('is-active');
		$(e.currentTarget).addClass('is-active');
			
	},
	
	toggle: (e) => {
		
		let item = $(e.currentTarget).closest('.js-toggle-item');
			
		if ( item.hasClass('is-active') ) {

			item.removeClass('is-active');
			item.find('.js-toggle-body').slideUp(200);
		} else {

			$('.js-toggle-item.is-active').removeClass('is-active');
			$('.js-toggle-body:visible').slideUp(200);
			item.find('.js-toggle-body').slideDown(200);
			item.addClass('is-active');

		}
			
	},
	
	mobileAccordion: (e) => {
		
		let item = $(e.currentTarget).parent();
			
		if ( item.hasClass('is-active') ) {

			item.removeClass('is-active');
			item.find('.js-accordion-body').slideUp(200);
		} else {

			$('.js-accordion-item.is-active').removeClass('is-active');
			$('.js-accordion-body:visible').slideUp(200);
			item.find('.js-accordion-body').slideDown(200);
			item.addClass('is-active');

		}
			
	},

	init: () => {

		defaults.events();
		
		$(document).on('click', '.js-select-head', defaults.selectToggle);
		
		$(document).on('click', '.js-select-close', defaults.selectClose);
		
		$(document).on('click', '.js-select-item', defaults.selectChange);
		
		$(document).on('click', defaults.selectOutside);
		
		$(document).on('click', '.js-toggle-head', defaults.toggle);
		
		if ( $(window).innerWidth() < 441 ) {
			$(document).on('click', '.js-accordion-head', defaults.mobileAccordion);
		}

	}
}

export { defaults }