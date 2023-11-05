var YTdeferred = jQuery.Deferred();

window.onYouTubeIframeAPIReady = function() {
	YTdeferred.resolve(window.YT);
};

(function($) {
	$.ajaxSetup({
		cache: true
	});

	$.getScript('https://www.youtube.com/iframe_api').done(function(script, textStatus) {});
	var playlist_id = jQuery('.video-player').attr("data-video");
    //console.log(playlist_id);
	$.fn.simplePlayer = function() {
		var video = $(this);
		var player;
		//var play = $('<div />', { class: 'play' }).hide();

		var defaults = {
			enablejsapi: 1,
			autoplay: 1,
			playlist:playlist_id,
			loop:1,
			autohide: 1,
			border: 0,
			wmode: 'opaque',
			modestbranding: 1,
			version: 3,
			hl: 'en_US',
			rel: 0,
			showinfo: 0,
			hd: 1,
			iv_load_policy: 3 // add origin
		
		};

		// onYouTubeIframeAPIReady

		YTdeferred.done(function(YT) {
			//play.appendTo( video ).fadeIn('slow');
		});

		function onPlayerStateChange(event) {
			event.target.playVideo();
			if (event.data == YT.PlayerState.ENDED) {
				play.fadeIn(500);
			}
		}

		function onPlayerReady(event) {
			var replay = document.getElementById('play');
			replay.addEventListener('click', function() {
				event.target.playVideo();
			});
		}

		video.each(function() {
			var that = $(this);
			that.find('.play').bind('click', function() {
				$('<iframe />', {
					class: 'player',
					src: 'https://www.youtube.com/embed/' + that.data('video') + '?' + $.param(defaults)
				})
					.attr({ width: that.width(), height: that.height(), seamless: 'seamless', allow:'autoplay'})
					.css('border', 'none')
					.appendTo(that);

				that.children('img').hide();
				$('img', that).hide();
				$('.banner-title', that).hide();
				//that.next().hide(); //.btn-cta

				// $(this)
				// 	.css('background-image', 'url(play-button.png), url(' + that.children().attr('src') + ')')
				// 	.hide();

				player = new YT.Player('.player', {
					events: { onStateChange: onPlayerStateChange, onReady: onPlayerReady }
				});

				$(this).hide();
			});
		});

		// play.bind('click', function () {

		// 	if ( !$('.player' ).length ) {

		// 		$('<iframe />', {
		// 			class: 'player',
		// 			src: 'https://www.youtube.com/embed/' + video.data('video') + '?' + $.param(defaults)
		// 		})
		// 		.attr({ width: video.width(), height: video.height(), seamless: 'seamless' })
		// 		.css('border', 'none')
		// 		.appendTo( video );

		// 		video.children('img').hide();

		// 		$(this).css('background-image', 'url(play-button.png), url(' + video.children().attr('src') + ')').hide();

		// 		player = new YT.Player('.player', {events: {'onStateChange': onPlayerStateChange, 'onReady': onPlayerReady}});
		// 	}

		// 	$(this).hide();
		// });

		return this;
	};
})(jQuery);
