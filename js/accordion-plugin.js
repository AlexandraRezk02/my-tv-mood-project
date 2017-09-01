(function($) {											//Use $ as variable name
	$.fn.accordion = function (speed) {					//Return the jQuery selection
		this.on('click', '.accordion-control', function(e) { //When clicked
			$(this)										//Get the element the user clicked on
			.next('.accordion-panel')					//Select following panel
			.not(':animated')							//If it is not currently animating
			.slideToggle(speed);						//Use slide toggle to show or hide it
		});
		return this;									//Return the jQuery selection
	};
}(jQuery));												//Pass in JQuery object