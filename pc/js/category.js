
App.controller("categoryController",["$scope","$rootScope","$http",function($scope,$rootScope,$http){
	//1-点击添加分类按钮，收集输入框的内容，然后发送请求
	$scope.saveCategory = function(){
		var categoryName = $scope.categoryMsg;
		$http({
			url:"../api/category/addCategory.php",
			method:"get",
			params:{
				categoryName:categoryName
			}
		}).success(function(data){
			// console.log(data)
			// 需要渲染至页面，所以要重新发送http请求，去修改categoryList，所以选择直接调用
      $("#recipient-name").html("");
      $scope.categoryMsg = "";
			$rootScope.findCategory();
		})
	}

	//2-点击删除按钮，发送请求，删除数据库中的数据，并重新刷新数据
	$scope.delete = function(categoryId){
		$http({
			url:"../api/category/removeCategory.php",
			method:"get",
			params:{
				categoryId:categoryId
			}
		}).success(function(data){
			console.log(data)
			// 需要渲染至页面，所以要重新发送http请求，去修改categoryList，所以选择直接调用
			$rootScope.findCategory();
		})
	}
	
}])