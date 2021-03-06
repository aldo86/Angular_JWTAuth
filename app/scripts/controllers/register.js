'use strict';

angular.module('psJwtApp')
  .controller('RegisterCtrl', function ($scope, $rootScope, $http, alert) {
    $scope.submit = function(){

    	var url = 'http://localhost:3000/register';
    	var user = {
            email: $scope.email,
            password: $scope.password
        };
    	$http.post(url, user).success(function(res) {
    		alert('success', 'Good', 'You are now registered');
    	}).error(function(err){
    		alert('warning', 'Oops', 'Could not register');
    	});
    
    };
  });
