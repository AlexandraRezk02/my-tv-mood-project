(function(){
	var $imgs = $('#dvdGallery img'); 							//Stores all images
	var $buttons = $('#buttons');								//Stores button elements
	var tagged = {};											//Create tagged elements

	$imgs.each(function(){										//Loop through images
		var img = this;											//Store image in variable
		var tags = $(this).data('tags');						//Get this element's tags
		if(tags){												//If the element had tags
			tags.split(',').forEach(function(tagName){			//Split at comma
				if(tagged[tagName] == null){					//If object doesn't have tag
					tagged[tagName] = [];						//Add empty array to object
				}
				tagged[tagName].push(img);						//Add the image to the array
			});
		}
	});
		
	//Buttons, event handlers, and filters go here
	$('<button/>', {
		text: 'Show All',
		class: 'active',
		click: function(){
			$(this)
			.addClass('active')
			.siblings()
			.removeClass('active');
			$imgs.show();
		}
	}).appendTo($buttons);
	
	$.each(tagged, function(tagName){
		$('<button/>', {
			text: tagName + ' (' + tagged[tagName].length + ')',
			click: function() {
				$(this)
				.addClass('active')
				.siblings()
				.removeClass('active');
				$imgs
				.hide()
				.filter(tagged[tagName])
				.show();
			}
		}).appendTo($buttons);
	});
}());