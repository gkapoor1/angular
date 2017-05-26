//Controller for sign up page.
app.controller('signup_controller', function($scope,$http) {
$scope.submit = function(){
  var first_name = $scope.first_name;
  var last_name = $scope.last_name;
  var email = $scope.email;
  var password = $scope.password;
  var confirm_password = $scope.confirm_password;
  if(password != confirm_password) {
    $scope.error_message = "Password doesn't match with confirm password";
  }
  else {
    $http({
      url: "http://magento.gktwlab.com/index.php/rest/V1/integration/admin/token",
      method: "POST",
      data: {'username': 'Magento' , 'password': 'Magento17'}
    }).then(
        function(response){
          var token = response.data;
          $http({
                url: 'http://magento.gktwlab.com/index.php/rest/V1/customers',
                method: "POST",
                data: {"customer":{"email": email , "firstname": first_name , "lastname": last_name}, "password" : password},
                headers: {'Authorization': 'Bearer '+token}
                }).then(function(response){
                 $scope.error_message = "Account Created . You can now login to start Shopping.";
                 $scope.first_name = "";
                 $scope.last_name = "";
                 $scope.email = "";
                 $scope.password = "";
                 $scope.confirm_password = "";
                },  
                function(response){
                $scope.error_message = response.data.message;
          });
          },function(response){
            $scope.error_message = response.data.message;
          });
      }
}
});

