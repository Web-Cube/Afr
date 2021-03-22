var defaults = {

	events: () => {
		$('.js-search-open').click(function(){
			$('.js-search').addClass('is-active');
		});
		$('.js-search-close').click(function(){
			$('.js-search').removeClass('is-active');
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

	init: () => {

		defaults.events();
		
		$(document).on('click', '.js-select-head', defaults.selectToggle);
		
		$(document).on('click', '.js-select-close', defaults.selectClose);
		
		$(document).on('click', defaults.selectOutside);

	}
}

export { defaults }