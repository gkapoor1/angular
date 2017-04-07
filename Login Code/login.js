//Controller for sign up page.
app.controller('login_controller', function($scope,$http) {
$scope.submitLogin = function(){
  var email = $scope.loginEmail;
  var password = $scope.loginPassword;
  var customerToken;
  console.log("here");
  $http({
      url: "http://magento.gktwlab.com/index.php/rest/V1/integration/customer/token",
      method: "POST",
      data: {'username': email , 'password': password}
    }).then(
        function(response){
          customerToken=response.data
          console.log(customerToken);
        }).then(
                function(){
                  var urln="http://magento.gktwlab.com/index.php/rest/V1/customers/me/";
                  $http({
                        url:urln ,
                        method:"GET",
                        headers: {'Authorization': 'Bearer '+customerToken}
           
                      }).then(function(response){
                        console.log(response.data);
                      });     
                });
 
});
