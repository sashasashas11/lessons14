/**
 * Created by sasha on 02.12.13.
 */
;(function($){
	$.ajax(
			{
				url: 'main.css',       //обезательный параметр
				type: 'GET',
				date: {name: 'sasha'},
				dataType: "jsonp",       //json, text......
				success: function(result){
					console.log(result);
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