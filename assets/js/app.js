$(function() { 
	$('body').on('click', '#filters a', function() { 
		var $this = $(this),
			$episodes = $('#episode-list .episode-row'),
			$listTitle = $('#list-title'),
			tags = $this.data('tags').split(' ');
		
			$listTitle.text($this.text() + ' Episodes');
		
			$episodes.each(function(index) { 
				var $episode = $(this).find('.episode');
				episodeTags = $episode.data('tags').split(' ');
				
				if(containsAny(tags, ['all']) || containsAny(episodeTags, tags)) {
					$episode.show();
				} else {
					$episode.hide();
				}
			});
		
			return false;
	});
	
	
	function containsAny(arr1, arr2) {
		for(var i = 0; i < arr1.length; i++) {
			for(var j = 0; j < arr2.length; j++) {
				if(arr1[i] === arr2[j]) {
					return true;
				}			
			}
		}
		
		return false;		
	}
});
