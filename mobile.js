//Mobile Data fetching controller.
app.controller('mobile_controller', function($scope, $http){
$scope.init_mobile = function()
{
        $http({
        	url: 'http://magento.gktwlab.com/index.php/rest/V1/integration/admin/token',
        	method: "POST",
        	data: {'username': 'Magento' , 'password': 'Magento17'}
        })
    .then(function(response) {
            var token = response.data;
            $http({
                url: 'http://magento.gktwlab.com/index.php/rest/V1/products/1',
                method: "GET",
                headers: {'Authorization': 'Bearer '+token}
            }).then(function(response){
           //     console.log(response.data);
                $scope.mobile_1_name = response.data.name;
                $scope.mobile_1_price = response.data.price;
                $scope.mobile_1_image_url = "http://magento.gktwlab.com/pub/media/catalog/product"+response.data.media_gallery_entries[0].file;
             //   console.log($scope.mobile_1_image_url);
            })

            $http({
            url: 'http://magento.gktwlab.com/index.php/rest/V1/products/2',
            method: "GET",
            headers: {'Authorization': 'Bearer '+token}
        }).then(function(response){
              //  console.log(response.data);
                $scope.mobile_2_name = response.data.name;
                $scope.mobile_2_price = response.data.price;
                $scope.mobile_2_image_url = "http://magento.gktwlab.com/pub/media/catalog/product"+response.data.media_gallery_entries[0].file;
            })

            $http({
            url: 'http://magento.gktwlab.com/index.php/rest/V1/products/3',
            method: "GET",
            headers: {'Authorization': 'Bearer '+token}
        }).then(function(response){
              //  console.log(response.data);
                $scope.mobile_3_name = response.data.name;
                $scope.mobile_3_price = response.data.price;
                $scope.mobile_3_image_url = "http://magento.gktwlab.com/pub/media/catalog/product"+response.data.media_gallery_entries[0].file;
            })

            $http({
            url: 'http://magento.gktwlab.com/index.php/rest/V1/products/4',
            method: "GET",
            headers: {'Authorization': 'Bearer '+token}
        }).then(function(response){
            //    console.log(response.data);
                $scope.mobile_4_name = response.data.name;
                $scope.mobile_4_price = response.data.price;
                $scope.mobile_4_image_url = "http://magento.gktwlab.com/pub/media/catalog/product"+response.data.media_gallery_entries[0].file;
            })

            $http({
            url: 'http://magento.gktwlab.com/index.php/rest/V1/products/5',
            method: "GET",
            headers: {'Authorization': 'Bearer '+token}
        }).then(function(response){
            //    console.log(response.data);
                $scope.mobile_5_name = response.data.name;
                $scope.mobile_5_price = response.data.price;
                $scope.mobile_5_image_url = "http://magento.gktwlab.com/pub/media/catalog/product"+response.data.media_gallery_entries[0].file;
            })

            $http({
            url: 'http://magento.gktwlab.com/index.php/rest/V1/products/21',
            method: "GET",
            headers: {'Authorization': 'Bearer '+token}
        }).then(function(response){
            //    console.log(response.data);
                $scope.mobile_6_name = response.data.name;
                $scope.mobile_6_price = response.data.price;
                $scope.mobile_6_image_url = "http://magento.gktwlab.com/pub/media/catalog/product"+response.data.media_gallery_entries[0].file;
            })
    }, 
    function(response) { // optional
            $scope.mobile_data = "Please Try Again";
    });

}
/*
$scope.addToCart = function(pid)
{
    pid = pid.toString();
    //console.log(pid);
    $http({
      url: "http://localhost/angular/session_get.php",
      method: "GET",
    }).then(function(response){
        uid = response.data.userid;
        if(uid !== parseInt(uid, 10))
            window.alert("Login / Sign Up Buy Products");
        token = response.data.token;
        $http({
            url: "http://magento.gktwlab.com/index.php/rest/V1/carts/mine",
            method: "POST",
            data: {"customer_id":uid},
            headers: {'Authorization': 'Bearer '+response.data.token}
        }).then(function(response){
            cartId = response.data;

            console.log(response);
            console.log(pid);
            $http({
             //   url: "http://magento.gktwlab.com/index.php/rest/V1/carts/mine/items/",
             //   method: "PUT",
                //data: {"cartItem": {"itemId": 0,"qoute_id": "1" , "sku": "1" , "qty" : 1}},
                //cartItem: {"itemId": 0,"qoute_id": "1" , "sku": "1" , "qty" : 1},
               // parameters: {"customer_id": uid , "itemId":0 , "sku": pid , "qty" : 1 , "cartItem" : 1},
              //  data: {"cart_item":{"qoute_id":1,"sku":pid , "qty":1}},
             //   headers: {'Authorization': 'Bearer '+token}
           // }).then(function(response){
            //    console.log(response);
            });
        });
    },function(response){window.alert("Sign Up / Login to Buy Products")});
} */
$scope.addToCart = function(pid) {
    pid = pid.toString();  
    $http({
      url: "http://localhost/angular/session_get.php",
      method: "GET",
    }).then(function(response){
        uid = response.data.userid;
        if(uid !== parseInt(uid, 10))
            window.alert("Login / Sign Up Buy Products");
        else
        {
            $http({
                url: "http://localhost/angular/cart_set.php",
                method: "POST",
                data: {"userid": uid, "sku": pid}
            }).then(function(response){
                window.alert("Product Added to Cart");
            });
        }

});
}
});