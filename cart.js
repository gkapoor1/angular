//Cart Data fetching controller.
app.controller('cart_controller', function($scope, $http, $timeout){
	$scope.init_cart = function(){
		$http({
      		url: "http://major.gktwlab.com/cart_get.php",
      		method: "GET",
    	}).then(function(response){
    		console.log(response);
            $scope.checkoutButton = false;
    		if(response.data == 0)
    		{
    			$scope.cart_error_message = "No Product in Cart";
                $scope.checkoutButton = false;
    		}
    		else
    		{
    			$scope.cart_message = [];
    			$scope.cart_error_message = "Products";
    			var products = response.data;
    			$scope.items = products;
    			var items = [];
    			var temp = {};
    			var token = "";
    			var i = 0;
    			$http({
        			url: 'http://magento.gktwlab.com/index.php/rest/V1/integration/admin/token',
        			method: "POST",
        			data: {'username': 'Magento' , 'password': 'Magento17'}
      			}).then(function(response) {
            	    var token = response.data;
            	    for(x in products)
            		{
            			$timeout(function(){
            				temp = $scope.fetchProduct(token,x,products);	
            			},100);
            			items.push(temp);            			
            		}
            		//$scope.cart_message = items;
            	});  
                $scope.checkoutButton = true;
    		}
		});
	}
	$scope.fetchProduct = function(token,x,products){
		$http({
            url: "http://magento.gktwlab.com/index.php/rest/V1/products/"+products[x],
            method: "GET",
            headers: {'Authorization': 'Bearer '+token}
        }).then(function(response){
            console.log(response);
            cp = {"name":response.data.name , "price": response.data.price , "image": "http://magento.gktwlab.com/pub/media/catalog/product"+response.data.media_gallery_entries[0].file}
            $timeout(function(){
            	$scope.cart_message.push(cp);
            },100);
            //console.log(items[i]);    					
        });
	}
});
