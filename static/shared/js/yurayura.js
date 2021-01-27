jQuery( function() {
	jQuery.fn.yurayura = function( config ){
		var obj = this;
		var i = 0;
		var defaults = {
			'move' : 5,			// å‹•ãé‡
			'duration' : 1000,	// ç§»å‹•ã«ã‹ã‘ã‚‹æ™‚é–“
			'delay' : 0			// ä¸¡ç«¯ã§åœæ­¢ã™ã‚‹æ™‚é–“
		};
		var setting = jQuery.extend( defaults, config );
		( function move() {
			i = i > 0 ? -1 : 1;
			var p = obj.position().top;
			jQuery( obj )
				.delay( setting.delay )
				.animate( { top : p + i * setting.move }, { 
					duration : setting.duration,
					complete : move
				});
		})();
	};
});