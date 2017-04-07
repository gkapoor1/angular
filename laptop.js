//Laptop Data fetching controller.
app.controller('laptop_controller', function($scope, $http){

$scope.init_laptop = function()
{
        $http({
        	url: 'http://magento.gktwlab.com/index.php/rest/V1/integration/admin/token',
        	method: "POST",
        	data: {'username': 'Magento' , 'password': 'Magento17'}
        })
    .then(function(response) {
            var token = response.data;
            $http({
                url: 'http://magento.gktwlab.com/index.php/rest/V1/products/6',
                method: "GET",
                headers: {'Authorization': 'Bearer '+token}
            }).then(function(response){
                console.log(response.data);
                $scope.laptop_1_name = response.data.name;
                $scope.laptop_1_price = response.data.price;
                $scope.laptop_1_image_url = "http://magento.gktwlab.com/pub/media/catalog/product"+response.data.media_gallery_entries[0].file;
                console.log($scope.laptop_1_image_url);
            })

            $http({
            url: 'http://magento.gktwlab.com/index.php/rest/V1/products/7',
            method: "GET",
            headers: {'Authorization': 'Bearer '+token}
        }).then(function(response){
                console.log(response.data);
                $scope.laptop_2_name = response.data.name;
                $scope.laptop_2_price = response.data.price;
                $scope.laptop_2_image_url = "http://magento.gktwlab.com/pub/media/catalog/product"+response.data.media_gallery_entries[0].file;
            })

            $http({
            url: 'http://magento.gktwlab.com/index.php/rest/V1/products/8',
            method: "GET",
            headers: {'Authorization': 'Bearer '+token}
        }).then(function(response){
                console.log(response.data);
                $scope.laptop_3_name = response.data.name;
                $scope.laptop_3_price = response.data.price;
                $scope.laptop_3_image_url = "http://magento.gktwlab.com/pub/media/catalog/product"+response.data.media_gallery_entries[0].file;
            })

            $http({
            url: 'http://magento.gktwlab.com/index.php/rest/V1/products/9',
            method: "GET",
            headers: {'Authorization': 'Bearer '+token}
        }).then(function(response){
                console.log(response.data);
                $scope.laptop_4_name = response.data.name;
                $scope.laptop_4_price = response.data.price;
                $scope.laptop_4_image_url = "http://magento.gktwlab.com/pub/media/catalog/product"+response.data.media_gallery_entries[0].file;
            })

            $http({
            url: 'http://magento.gktwlab.com/index.php/rest/V1/products/10',
            method: "GET",
            headers: {'Authorization': 'Bearer '+token}
        }).then(function(response){
                console.log(response.data);
                $scope.laptop_5_name = response.data.name;
                $scope.laptop_5_price = response.data.price;
                $scope.laptop_5_image_url = "http://magento.gktwlab.com/pub/media/catalog/product"+response.data.media_gallery_entries[0].file;
            })

            $http({
            url: 'http://magento.gktwlab.com/index.php/rest/V1/products/22',
            method: "GET",
            headers: {'Authorization': 'Bearer '+token}
        }).then(function(response){
                console.log(response.data);
                $scope.laptop_6_name = response.data.name;
                $scope.laptop_6_price = response.data.price;
                $scope.laptop_6_image_url = "http://magento.gktwlab.com/pub/media/catalog/product"+response.data.media_gallery_entries[0].file;
            })
    }, 
    function(response) { // optional
            $scope.laptop_data = "Please Try Again";
    });

}
});