angular.module('foodService', [])

	.factory('Food', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/food');
			},
			create : function(foodData) {
				return $http.post('/api/food', foodData);
			},
			delete : function(id) {
				return $http.delete('/api/food/' + id);
			},
			getTotal: function(id){
				return $http.get('/api/total');
			}
		}
	}]);