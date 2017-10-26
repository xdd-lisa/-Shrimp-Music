
App.controller("musicController",["$scope","$http",function($scope,$http){
	var params = {};

	//1-发送请求，渲染页面
	$scope.findMusic = function(){
		$http({
		url:"../api/music/findMusic.php",
		method:"get"
		}).success(function(data){
			// console.log(data);
			$scope.musicList = data;	
		})
	}
	$scope.findMusic();

	//2-点击上传图片按钮，上传图片
	$('#fileupload').fileupload({
        autoLoad:true,
        done: function (data, e) {
           // console.log(e);
           // console.log(data);
           params.authorUrl = e.result;
           $(".authorImg").attr("src","../"+e.result).show().animate({marginLeft:50},1000);
        }
    }); 


    // 3-点击上传音频
    $('#filemusicload').fileupload({
        autoLoad:true,
        done: function (data, e) {
           // console.log(e);
          var musicUrl = e.result;
          params.musicUrl = musicUrl;
          // console.log(musicUrl);
          $(".tips").html(musicUrl.split("/").pop());
        }
    });


    //4-点击保存按钮，发送请求，上传文件，并且要注意清空表单的内容，方便下次输入
    $scope.saveMusic = function(){
    	params.authorName = $scope.authorMsg;  
    	params.musicName = $scope.musicMsg;
    	params.categoryId = $scope.categoryId;
    	$http({
    		url:"../api/music/addMusic.php",
    		method:"get",
    		params:params
    	}).success(function(data){
    		// console.log(data);
        if(data.status == "ok"){
          //重新赋值所有的input框内容，方便下次输入
          $scope.authorMsg = "";
          $scope.musicMsg = "";
          $(".tips").html("");
          $(".authorImg").removeAttr("src").hide().animate({marginLeft:0},1000);
        
          //刷新数据
          $scope.findMusic();
        }
    	})
    }
  
  
  //4-点击取消按钮，需要清空表单的所有内容，方便下次输入
  $scope.cancel = function () {
    $scope.authorMsg = "";
    $scope.musicMsg = "";
    $(".tips").html("");
    $(".authorImg").removeAttr("src").hide().animate({marginLeft:0},1000);
  }

}])