App.controller("musicController",["$scope","$http","$routeParams",function ($scope,$http,$routeParams) {
  var params = $routeParams;
  //1-渲染页面
  $http({
    url:"../api/music/findMusicByCategoryId.php",
    method:"get",
    params:params
  }).success(function (data) {
    // console.log(data);
    $scope.musicList = data;
  })
  
  
  //2-点击每个li，设置音乐播放
  $scope.play=function(musicUrl){
    document.querySelector("#musicPlay").style.display = "block";
    document.querySelector("#musicId").src="../"+musicUrl;
    document.querySelector("#musicId").play();
  }
}])


