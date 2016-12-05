"use strict";

var app = angular.module("WideWorldApp", ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/books.html',
		controller: 'bookCtrl'
	})
	.otherwise('/');
});