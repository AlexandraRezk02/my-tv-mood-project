(function(){
	var $imgs = $('#dvdGallery img'); 							//Stores all images
	var $buttons = $('#buttons');								//Stores button elements
	var tagged = {};											//Create tagged elements
	var myMovies = [];											//Create empty DVD array
	
	$imgs.each(function(){										//Loop through images
		var img = this;											//Store image in variable
		var tags = $(this).data('tags');						//Get this element's tags
		 myMovies.push(img);									//Stores images in array
		if(tags){												//If the element had tags
			tags.split(',').forEach(function(tagName){			//Split at comma
				if(tagged[tagName] == null){					//If object doesn't have tag
					tagged[tagName] = [];						//Add empty array to object
				}
				tagged[tagName].push(img);						//Add the image to the array
			});
		}
	});
	
	var randomDVD = Math.floor(Math.random() * myMovies.length); //Generate a random number based on the myMovies array
		
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
	
	$('<button/>', {
		text: 'Random',
		class: 'active',
		click: function(){
			$(this)
			.addClass('active')
			.siblings()
			.removeClass('active');
			$imgs
			.hide()
			.filter(myMovies[randomDVD])
			.show();
		}
	}).appendTo($buttons);
}());