angular.module("ProductApp.controllers",[]).controller('productsController', function($scope, railsAPIService){
	$scope.productsList = [];
	
	railsAPIService.getDrivers().success(function(response){
		$scope.productList = response.MRData.StandingTable.StandingLists[0].DriverStandings;
	});
	
	$scope.productsList = [{
		name: "nexus"
	}, {
		name: "iphone"
	}];
});
