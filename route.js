var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.html"
    })
    .when("/mobile", {
        templateUrl : "mobile.html"
    })
    .when("/laptop", {
        templateUrl : "laptop.html"
    })
    .when("/signup", {
        templateUrl : "signup.html"
    })
    .when("/search", {
        templateUrl : "search.html"
    })
    .when("/login", {
        templateUrl : "login.html"
    });    
});