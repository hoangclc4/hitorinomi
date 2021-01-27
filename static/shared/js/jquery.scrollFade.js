/**
 * jquery.scrollFade.js
 * Description: ã‚¹ã‚¯ãƒ­ãƒ¼ãƒ«ã«åˆã‚ã›ã¦è¦ç´ ã‚’ãƒ•ã‚§ãƒ¼ãƒ‰ã•ã›ã‚‹jQueryãƒ—ãƒ©ã‚°ã‚¤ãƒ³ï¼ˆè¦ jQuery Easing Pluginï¼‰
 * Version: 1.0.2
 * Author: Takashi Kitajima
 * Autho URI: http://2inc.org
 * created : July 30, 2013
 * modified: January 14, 2014
 * License: GPL2
 *
 * Copyright 2014 Takashi Kitajima (email : inc@2inc.org)
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License, version 2, as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 */
( function( $ ) {
	$.fn.scrollFade = function( config ) {
		var defaults = {
			out     : -200,	// ãƒ•ã‚§ãƒ¼ãƒ‰ã‚¢ã‚¦ãƒˆå‰ã®é€æ˜Žåº¦
			duration: 1000	// ãƒ•ã‚§ãƒ¼ãƒ‰ã«ã‹ã‘ã‚‹æ™‚é–“ï¼ˆmsï¼‰
		};
		var config = $.extend( defaults, config );
		var target = this;

		function fade() {
			target.each( function( i, e ) {
				var in_position = $( e ).offset().top + $( window ).height() / 5;
				var window_bottom_position = $( window ).scrollTop() + $( window ).height();
				if ( in_position < window_bottom_position ) {
					$( e ).animate( {
						opacity: 1
					}, {
						queue   : false,
						duration: config.duration,
						easing  : 'easeOutQuad'
					} );
				} else {
					if( $( e ).css( 'opacity' ) > config.out ) {
						$( e ).animate( {
							opacity: config.out
						}, {
							queue   : false,
							duration: config.duration,
							easing  : 'easeOutQuad'
						} );
					}
				}
			} );
		}
		fade();

		$( window ).scroll( function() {
			fade();
		} );
		return target;
	};
} )( jQuery );
