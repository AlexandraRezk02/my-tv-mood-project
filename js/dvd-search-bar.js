function myFunction(){
	//Declare variables
	var input, filter, div, description, dvdBtn, i;
	input = document.getElementById('filter-search');
	filter = input.value.toLowerCase;
	div = document.getElementsByClassName('accordion-panel');
	description = div.getElementsByTagName('p');
	
	//Loop through all list items and hide those who don't match the search query
	for (i = 0, i < description.length; i++){
		dvdBtn = description[i].getElementsByTagName('img')[0];
		if(div.innerHTML.toLowerCase().indexOf(filter) > -1) {
			dvdBtn[i].style.display = "";
		} 
			else {
				dvdBtn[i].style.display = "none";
			}
	}
}