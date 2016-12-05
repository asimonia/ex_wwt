"use strict";

app.controller("bookCtrl", function($scope, BookStorage) {

	$scope.reload = function () {
		location.reload();
	};

	BookStorage.getBooks()
	.then(function(data) {

		$scope.books = data;
		console.log($scope.books);
		$scope.$apply();
	});
});