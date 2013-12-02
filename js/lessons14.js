/**
 * Created by sasha on 02.12.13.
 */
;(function($){
	$.ajax(
			{
				url: 'text.txt',       //обезательный параметр
				type: 'GET',
				date: {name: 'sasha'},
				dataType: "jsonp",       //json, text......
				success: function(){

				},
				error: function(){
					console.log(arguments);

				},
				complete: function(){  //выплниться в любом случае

				}

			},
			function(result){
		console.log(result);
	});
})(jQuery);