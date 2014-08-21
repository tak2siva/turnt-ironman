angular.module('ProductApp',[
	'ProductApp.controllers',
	'ProductApp.services'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/products", {templateUrl: "drivers.html", controller: "productsController"}).
	when("/products/:id", {templateUrl: "partials/driver.html", controller: "driverController"}).
	otherwise({redirectTo: '/drivers'});
}]);