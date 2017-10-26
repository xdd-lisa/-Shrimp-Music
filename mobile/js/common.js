// var items = document.querySelector("[ng-cloak]");
// console.log(items);

try{
  angular.module('app',['ngTouch'])
  .directive('navsController',['$swipe',function($swipe){
       return {
            restrict:'EA',
            link:function(scope,ele,attrs,ctrl){
                var startX,startY,locked=false;
                $swipe.bind(ele,{
                  'start':function(coords){
                    startX = coords.x;
                    startY = coords.y;
                  },
                  'move':function(coords){
                    var delta = coords.x - startX;
                    if(delta<-300 && !locked){
                      console.log('trun right');
                    }else if(delta>300 && !locked){
                      console.log('trun left');
                    }
                  },
                  'end':function(coords){
                  },
                  'cancel':function(coords){
                  }
                });
              }
            }
       }
    ]);
}catch(e){
    console.error(e);
}