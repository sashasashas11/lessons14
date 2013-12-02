/**
 * Created by sasha on 02.12.13.
 */
;(function($){
	$.post('text.txt', function(result){
		console.log(result);
	}, 'text')
})(jQuery);