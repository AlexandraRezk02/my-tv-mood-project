(function(){
	var $imgs = $('#dvdGallery img'); 							//Stores all images
	var $buttons = $('#buttons');								//Stores button elements
	var myMovies = [];											//Create empty DVD array
    var previousDVD;
	
	$imgs.each(function(){										//Loop through images
	var img = this;											//Store image in variable
		myMovies.push(img);									//Stores images in array
	});
	
	Array.prototype.shuffle = function() {
		var input = this;
		for (var i = input.length-1; i >=0; i--){
			var randomIndex = Math.floor(Math.random() * (i+1));
			var itemAtIndex = input[randomIndex];
			
			input[randomIndex] = input[i];
			input[i] = itemAtIndex;
		}
		
		return input;
	}
	
	
	
	//Buttons, event handlers, and filters go here
	$('<button/>', {
		text: 'Random',
		class: 'active',
		click: function(){
			$(this)
			.addClass('active')
			.siblings()
			.removeClass('active');
			var randomDVD = myMovies[Math.floor(Math.random() * myMovies.length)]; //Generate a random number based on the myMovies array
			$imgs
			.hide()
			.filter(randomDVD)
			.show();
		}
	}).appendTo($buttons);
}());