var app = angular.module("myApp", ["ngRoute"]);
localStorage.removeItem('currentUser');

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
    .when("/product/:productID", {
        templateUrl : "product.html"
    })
    .when("/login", {
        templateUrl : "login.html"
    });    
});

angular.module('myApp.filters', []).
  filter('htmlToPlaintext', function() {
    return function(text) {
      return  text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
  }
);