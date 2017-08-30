(function(){
	var $imgs = $('#dvdGallery img'); 					//Stores all images
	var $buttons = $('#buttons');						//Stores button elements
	var myMovies = [];									//Create empty DVD array
    var previousDVD;
	
	$imgs.each(function(){								//Loop through images
	var img = this;										//Store image in variable
	myMovies.push(img);									//Stores images in array
	});
	
	//Buttons, event handlers, and filters go here
	$('<button/>', {
		text: 'Random',
		class: 'active',
		click: function(){
			$(this)
			.addClass('active')
			.siblings()
			.removeClass('active');
			//Generate a random number based on the myMovies array
			var randomDVD = 
				myMovies[Math.floor(Math.random() * myMovies.length)]; 
			$imgs
			.hide()
			.filter(randomDVD)
			.show();
		}
	}).appendTo($buttons);
}());