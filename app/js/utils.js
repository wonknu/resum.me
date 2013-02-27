/* Utils */

/* Display navigation in the wheel */
function displayNavigation(scope) {
	var elements = $('nav > ul > li'),
		nbElement = $('nav > ul > li').length, 
		total = 360,
		world = anima.js(),
		angle = total / nbElement;
	
	elements.each(function(index, element) {
		var item = world.add(element);
		item.animate([{
    		rotate : [0, 0, angle * index],
    		duration : 0,
    		ease : 'ease-in-quad',
    		delay : 0
    	}, {
    		translate : [-25 , 200 - ( 25 * index ), 0],
    		duration : 0,
    		ease : 'ease-in-quad',
    		delay : 0
    	}]).css();
	});
	scope.angle = angle;
	scope.world = world;
}

function displayData(scope, http) {
	http.get('resume.json').
		success(function(response) {
			scope.resume = response;
		});
}