var App = angular.module("app",["ngRoute"]);
	// 1-配置路由
	App.config(["$routeProvider",function($routeProvider){
		$routeProvider.when("/categoryManager",{
			templateUrl:"tmp/category.html",
			controller:"categoryController"
		})
		.when("/musicManager",{
			templateUrl:"tmp/music.html",
			controller:"musicController"
		})
		.otherwise({
			redirectTo:"/categoryManager"
		})
	}])


	// 2-初始化，发送请求，获取数据渲染页面
	App.run(["$rootScope","$http",function($rootScope,$http){
		$rootScope.findCategory = function(){
			$http({
			url:"../api/category/findCategory.php",
			method:"get"
			}).success(function(data){
				// console.log(data);
				$rootScope.categoryList = data;
			})
		}

		$rootScope.findCategory();
		
	}])