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
            console.log(token);
            $http({
                url: 'http://magento.gktwlab.com/index.php/rest/V1/products/1',
                method: "GET",
                headers: {'Authorization': 'Bearer '+token}
            }).then(function(response){
                console.log(response.data);
                $scope.mobile_1_name = response.data.name;
                $scope.mobile_1_price = response.data.price;
                $scope.mobile_1_image_url = "http://magento.gktwlab.com/pub/media/catalog/product"+response.data.media_gallery_entries[0].file;
                console.log($scope.mobile_1_image_url);
            })

            $http({
            url: 'http://magento.gktwlab.com/index.php/rest/V1/products/2',
            method: "GET",
            headers: {'Authorization': 'Bearer '+token}
        }).then(function(response){
                console.log(response.data);
                $scope.mobile_2_name = response.data.name;
                $scope.mobile_2_price = response.data.price;
                $scope.mobile_2_image_url = "http://magento.gktwlab.com/pub/media/catalog/product"+response.data.media_gallery_entries[0].file;
            })

            $http({
            url: 'http://magento.gktwlab.com/index.php/rest/V1/products/3',
            method: "GET",
            headers: {'Authorization': 'Bearer '+token}
        }).then(function(response){
                console.log(response.data);
                $scope.mobile_3_name = response.data.name;
                $scope.mobile_3_price = response.data.price;
                $scope.mobile_3_image_url = "http://magento.gktwlab.com/pub/media/catalog/product"+response.data.media_gallery_entries[0].file;
            })

            $http({
            url: 'http://magento.gktwlab.com/index.php/rest/V1/products/4',
            method: "GET",
            headers: {'Authorization': 'Bearer '+token}
        }).then(function(response){
                console.log(response.data);
                $scope.mobile_4_name = response.data.name;
                $scope.mobile_4_price = response.data.price;
                $scope.mobile_4_image_url = "http://magento.gktwlab.com/pub/media/catalog/product"+response.data.media_gallery_entries[0].file;
            })

            $http({
            url: 'http://magento.gktwlab.com/index.php/rest/V1/products/5',
            method: "GET",
            headers: {'Authorization': 'Bearer '+token}
        }).then(function(response){
                console.log(response.data);
                $scope.mobile_5_name = response.data.name;
                $scope.mobile_5_price = response.data.price;
                $scope.mobile_5_image_url = "http://magento.gktwlab.com/pub/media/catalog/product"+response.data.media_gallery_entries[0].file;
            })

            $http({
            url: 'http://magento.gktwlab.com/index.php/rest/V1/products/21',
            method: "GET",
            headers: {'Authorization': 'Bearer '+token}
        }).then(function(response){
                console.log(response.data);
                $scope.mobile_6_name = response.data.name;
                $scope.mobile_6_price = response.data.price;
                $scope.mobile_6_image_url = "http://magento.gktwlab.com/pub/media/catalog/product"+response.data.media_gallery_entries[0].file;
            })
    }, 
    function(response) { // optional
            $scope.mobile_data = "Please Try Again";
    });

}
});