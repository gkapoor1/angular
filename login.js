//Controller for sign up page.
app.controller('login_controller', function($scope,$http,$location) {
  $scope.isLoggedIn=function(){
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));

    //console.log("came here"+currentUser)
    if(!currentUser){
      return false;
    }
    else{
      var currentUserName=currentUser.name;
      $scope.currentUserName=currentUserName;
      return true;

    }
  }
$scope.submitLogin = function(){
  var email = $scope.loginEmail;
  var password = $scope.loginPassword;
  var customerToken;
  var customerName;
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
                      //  console.log(response.data);
                        customerName=response.data.firstname;
                        localStorage.setItem('currentUser', JSON.stringify({ token: customerToken, name: customerName }));
                        $scope.isLoggedIn();

                      });     
                });
 
        $location.path("/");
 }
});
