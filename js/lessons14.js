/**
 * Created by sasha on 02.12.13.
 */
;(function($){
	$.ajax(
			{
				url: 'text.txt',       //обезательный параметр
				type: 'GET',
				date: {},
				dataType: "text",       //json, text......
				success: function(){
					
				},
				error: function(){

				},
				complete: function(){  //выплниться в любом случае

				}

			},
			function(result){
		console.log(result);
	});
})(jQuery);