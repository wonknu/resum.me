'use strict';

/* Controllers */


function AppController($scope, $http) {
	$scope.angle = 0;
	$scope.world = null;
	$scope.currentAngle = 0;
	$scope.pickSkills = function($event) {
		$event.preventDefault();
		var world = $scope.world,
			angle = $scope.angle,
			_this = $event.target,
			index = $(_this).parent().index(),
			wheel = world.add(document.getElementById('wheel')),
			currentAngle = wheel.state.rotate[2];

		wheel.animate({
			rotate : [0, 0, -angle * index],
			duration : 300,
			ease : 'ease-in-out-circ',
			delay : 50
		});
	}
		
    $scope.$on('$viewContentLoaded', function() {
	    displayNavigation($scope);	
	    displayData($scope, $http);
    });
}
AppController.$inject = ['$scope', '$http'];