var App = angular.module("app",["ngRoute"]);

//1-初始化页面，发送请求，去渲染页面
App.controller("navsController",["$scope","$http",function ($scope,$http) {
  $http({
    url:"../api/category/findCategory.php",
    method:"get"
  }).success(function (data) {
    // console.log(data);
    $scope.categoryList = data;
  })
}])

//2-配置路由
App.config(["$routeProvider",function ($routeProvider) {
  $routeProvider.when("/category/:categoryId",{
    templateUrl:"tmp/musicList.html",
    controller:"musicController"
  }).otherwise({
    redirectTo:"/category/0",
  })
}])



