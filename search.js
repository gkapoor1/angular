app.controller('search_controller', function($scope, $http){
  $scope.init_search = function(){
    $scope.searchResult = "No products";

  }		
  $scope.press_search = function(){
  	var token = "";
  	$http({
        url: 'http://magento.gktwlab.com/index.php/rest/V1/integration/admin/token',
        method: "POST",
        data: {'username': 'Magento' , 'password': 'Magento17'}
    })
    .then(function(response) {
       token = response.data;
		$http({
  		url: "http://magento.gktwlab.com/index.php/rest/V1/search",
  		method: "GET",
  		data: { "searchCriteria": {
        			"filter_groups": [
            		{
                		"filters": [
                    	{
                        	"field": "products",
                        	"value": "%"+$scope.searchText+"%",
                        	"condition_type": "like"
                    	}
               			]
            		}
        			],
       			"current_page": 1,
        		"page_size": 1
    		}
    	},
    	headers: {'Authorization': 'Bearer '+token}
  	}).then(function(response){
  		$scope.search_result = response.data;
  	});   
    });


  }	
});