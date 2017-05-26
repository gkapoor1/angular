//Controller for sign up page.
app.controller('login_controller', function($scope,$http,$location) {

  $scope.initialMenu = function(){
    $scope.signup_menu = true;
    $scope.hello_menu = false;
    $scope.logout_menu = false;
    $scope.login_menu = true;
  }
  $scope.login_menu = function()
  {
    $scope.signup_menu = false;
    $scope.hello_menu = true;
    $scope.logout_menu = true;
    $scope.login_menu = false;
  //  $scope.$apply();
    console.log("Works");
  }
  $scope.isLoggedIn=function(){
  //  var currentUser = JSON.parse(localStorage.getItem('currentUser'));

  //console.log("came here"+currentUser)
  //  if(!currentUser){
  //    return false;
  //  }
  //  else{
  //    var currentUserName=currentUser.name;
  //    $scope.currentUserName=currentUserName;
  //    return true;
  $scope.currentUserName = "";

  $http({
    url: "http://major.gktwlab.com/session_get.php",
    method: "GET",
  }).then(function(response){
    if(true)
    {  
      console.log(response);
      $scope.currentUserName = response.data.fname; 
      $scope.login_menu();
    }
    else
    {
      console.log("Error Check");
    }
  });

}
$scope.isSessionSet = function(){
     $http({
    url: "http://major.gktwlab.com/session_get.php",
    method: "GET",
  }).then(function(response){
    console.log(response.data);
  });
}


$scope.submitLogin = function(){
  var email = $scope.loginEmail;
  var password = $scope.loginPassword;
  var customerToken;
  var customerName;
  $http({
      url: "http://magento.gktwlab.com/index.php/rest/V1/integration/customer/token",
      method: "POST",
      data: {'username': email , 'password': password}
  }).then(function(response){
      customerToken=response.data;
      $http({
        url: "http://magento.gktwlab.com/index.php/rest/V1/customers/me/" ,
        method:"GET",
        headers: {'Authorization': 'Bearer '+customerToken} 
      }).then(function(response){
          customerName=response.data.firstname;
          $http({
            url: "http://major.gktwlab.com/session_set.php",
            method: "POST",
            data: {'userid': response.data.id , 'fname': response.data.firstname , 'lname': response.data.lastname , 'email': email , 'token': customerToken}
          }).then(function(response){
            console.log(response);
          });
          $scope.login_error_message = "Login Successfull";
          $scope.signup_menu = false;
          $scope.hello_menu = true;
          $scope.logout_menu = true;
          $scope.login_menu = false;
          $location.path("/");
        })
    },function(response){
        $scope.login_error_message = "Wrong Email ID or Password";
    });
}
});
      
