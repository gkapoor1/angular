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
    .when("/checkout", {
        templateUrl : "checkout.html"
    })
    .when("/signup", {
        templateUrl : "signup.html"
    })
    .when("/search", {
        templateUrl : "search.html"
    })
    .when("/cart", {
        templateUrl : "cart.html"
    })
    .when("/product/:productID", {
        templateUrl : "product.html"
    })
    .when("/login", {
        templateUrl : "login.html"
    });    
});
