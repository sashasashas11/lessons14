/**
 * Created by sasha on 02.12.13.
 */
;(function($){
	$.post(
			'text.txt',
			{
				name: 'sasha',
				age: 22
			},
			function(result){
		console.log(result);
	});
})(jQuery);