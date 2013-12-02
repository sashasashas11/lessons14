/**
 * Created by sasha on 02.12.13.
 */
;(function($){
	$.get('text.txt', function(result){
		console.log(result);
	}, 'text')
})(jQuery);