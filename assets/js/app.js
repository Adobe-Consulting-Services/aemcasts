$(function() {
	$('body').on('click', '#filters a', function() {
		var $this = $(this),
			$episodes = $('#episode-list .episode-row'),
			$listTitle = $('#list-title'),
			tags = $this.data('tags').split(' ');

			$listTitle.text($this.text() + ' Episodes');

			$episodes.each(function(index) {
				var $episode = $(this).find('.episode');

				if (!tags
						|| (tags.length > 0 && tags[0] === 'all')
						|| $episode.is('[data-tags*=' + tags + ']')) {
					$episode.show();
				} else {
					$episode.hide();
				}
			});

			return false;
	});
});
