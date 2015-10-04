onlineBookStoreApp.controller('BookDataController',['$scope','$rootScope','$http',function($scope,$rootScope,$http) {
	//-------This function Gets the data to be filled in select box--------------------
	$scope.name="navnath";
	$http.get('data/books.json').success(function(data) {
		$scope.booksListData = data;
		console.log($scope.booksListData[0].bookName);
	});
	$scope.filterData=function(){
		$scope.bookNameFiltVal=$scope.bookName;
		$scope.authorFiltVal=$scope.author;
		$scope.priceFiltVal=$scope.price;
		console.log('Book Name:'+$scope.bookName +'Author:'+$scope.author+'Price'+$scope.price);
	};
}]);