app.controller('product_controller', function($scope, $http,$routeParams){
$scope.init_product = function()
{
	$scope.productID = $routeParams.productID;
	var purl = "http://magento.gktwlab.com/index.php/rest/V1/products/"+$scope.productID;
	console.log(purl);
	$http({
        	url: 'http://magento.gktwlab.com/index.php/rest/V1/integration/admin/token',
        	method: "POST",
        	data: {'username': 'Magento' , 'password': 'Magento17'}
        })
    .then(function(response) {
            var token = response.data;
            console.log(token);
            $http({
                url: purl,
                method: "GET",
                headers: {'Authorization': 'Bearer '+token}
            }).then(function(response){
                console.log(response.data);
                $scope.product_name = response.data.name;
                $scope.product_price = response.data.price;
                $scope.product_image_url = "http://magento.gktwlab.com/pub/media/catalog/product"+response.data.media_gallery_entries[0].file;
                $scope.product_details = response.data.custom_attributes[0].value;
                var text = $scope.product_details;
                $scope.product_details =   text ? String(text).replace(/<[^>]+>/gm, '') : '';
            })
		})
}
});
