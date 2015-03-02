(function(){
	angular.module('RateMyCustomer', ["firebase","ngRoute"])

	.config(function($routeProvider){

		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/default.html'
			})

			// route for the insert page
			.when('/insert', {
				templateUrl : 'pages/insert.html'
			})

			// route for the view & comment page
			.when('/view-comment/:item', {
				templateUrl : 'pages/review.html',
				controller: 'viewCompany'
			});

	})

	.controller('ConnectionData', function($scope,$firebase,$location){
		var url="https://radiant-fire-9839.firebaseio.com/aziende";
		var ref= new Firebase(url);
		 $scope.notfound=false;
		 $scope.data = $firebase(ref).$asArray();
		 $scope.newCompany={};
		 $scope.showItem=null;

		 $scope.insertCompany=function(){
		 	$scope.newCompany.recensioni=[];
		 	ref.push($scope.newCompany);
		 	$scope.newCompany={};
		 	$location.path("/");
		 }
		 
		
	})
	.controller("viewCompany",function($scope,$routeParams,$firebase){
		
		$scope.params = $routeParams;
		var url="https://radiant-fire-9839.firebaseio.com/aziende";
		var ref= new Firebase(url+"/"+$scope.params.item);
		$scope.aziendaView = $firebase(ref).$asObject();
		$scope.newReview={};
		$scope.showInsertReview=false;

		$scope.insertReview = function(){
			var recensioni= ref.child("recensioni");
			recensioni.push($scope.newReview);
		 	$scope.newReview={};
		    $scope.showInsertReview=false;
		};



	});


})();