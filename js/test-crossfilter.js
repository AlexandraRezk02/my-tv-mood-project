(function(){
	var $dvdContainer = $('.dvdGallery li'); 					//Stores all li elements
	var $buttons = $('#buttons');								//Stores button elements
	var tagged = {};											//Create tagged elements

	$dvdContainer.each(function(){								//Loop through images
		var dvd = this;											//Store image in variable
		var tags = $(this).data('tags');						//Get this element's tags
		if(tags){												//If the element had tags
			tags.split(',').forEach(function(tagName){			//Split at comma
				if(tagged[tagName] == null){					//If object doesn't have tag
					tagged[tagName] = [];						//Add empty array to object
				}
				tagged[tagName].push(dvd);						//Add the image to the array
			});
		}
	});
		
	//Buttons, event handlers, and filters go here
	$('<button/>', {										//Create empty button
		text: 'Show All',									//Add text 'show all'
		class: 'active',									//make it active
		click: function(){									//Add onclick handler to it
			$(this)											//Get the clicked on button
			.addClass('active')								//Add the class of active
			.siblings()										//Get its siblings
			.removeClass('active');							//Remove active from them
			$dvdContainer.show();							//Show all dvds
		}
	}).appendTo($buttons);									//Add to buttons container
	
	$.each(tagged, function(tagName){						//For each tag name
		$('<button/>', {									//Create empty button
			text: tagName + ' (' + tagged[tagName].length + ')', //Add tag name
				.on('click', function(e) {					
				if ($(this).hasClass('')) {								//The button clicked on
				.addClass('active')
				$dvdContainer								//With all of the dvds
				.hide()										//Hide them
				.filter(tagged[tagName])					//Find ones with this tag
				.show();
				}	else {
					.removeClass('active');	
				}
			}
		}).appendTo($buttons);								//Add to the buttons
	});
}());