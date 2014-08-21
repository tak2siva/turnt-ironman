angular.module('ProductApp.services',[]).factory('railsAPIService', function(){
	var railsAPI = {};
	
	railsAPI.getDrivers = function(){
		return $http({
			method: 'JSON',
			url: '/products.json'
		});
	};
});
