angular.module('starter.controllers', [])

.controller('SignInCtrl', function($scope,$rootScope,$ionicPlatform,$state,moocService) {
  $rootScope.user = {
     username:'testls',
     password:'111111',
   };

  $scope.signIn = function(user) {
  console.log('Sign-In', user);
    moocService.signIn(user)
    .then(function(data){
        console.log('返回成功' + eval(data).success);
          if(eval(data).success === 1){
            $rootScope.user = eval(data).data;
            $state.go('courses');
          }
          else{
            alert(eval(data).message);
          }
      }, function(data){
        console.log('返回失败' + data);
      })
  };
})

.controller('CoursesCtrl', function($scope,$ionicPlatform,$rootScope,moocService) {
    console.log('开始请求课程列表');
    /*
    moocService.clientActive()
    .then(function(data){
        console.log(data);
      }, function(data){5

        console.log('结束');
      })
*/
            
//            $scope.downloadFile = function () {
//            $ionicPlatform.ready(function() {
//                                  console.log('开始download');
//                                 var db = $cordovaSQLite.openDB({ name: "my.db", bgType: 1 });
//                                 
//                                 $scope.execute = function() {
//                                 var query = "INSERT INTO test_table (data, data_num) VALUES (?,?)";
//                                 if(db){
//                                 console.log('开始download111');
//                                 }
//                                 $cordovaSQLite.execute(db, query, ["test", 100]).then(function(res) {
//                                                                                       console.log("insertId: " + res.insertId);
//                                                                                       }, function (err) {
//                                                                                       console.error(err);
//                                                                                       });
//                                 };
//                                 });
//
//            };
//            $scope.downloadFile();


  $scope.getItemHeight = function(item, index) {
    //使索引项平均都有10px高，例如
    return 280;
  };
  $scope.remove = function(course) {
    Courses.remove(chat);
  };
  $scope.gotoCourseDetail = function(courseId) {
    Courses.remove(chat);
  };
  $scope.doRefresh = function() {
          moocService.courseList($rootScope.user)
            .then(function(data){
                  console.log('返回成功' + eval(data).success);
                  if(eval(data).success === 1){
                    $scope.courses  =eval(data).data;
                    //$scope.$broadcast('scroll.refreshComplete');
                  }
                  else{
                    alert(eval(data).message);
                  }
                  }, function(data){
                      console.log('返回失败' + data);
               })
  };
  $scope.doRefresh();
})
.controller('CourseDetailCtrl', function($scope,$stateParams,moocService) {
  $scope.index = 1;
  $scope.course;
  $scope.chapters;
  console.log($stateParams.courseId);
  moocService.courseDetail($stateParams.courseId)
    .then(function(data){
          console.log('返回成功' + eval(data).success);
          if(eval(data).success === 1){
               $scope.course  =eval(data).data;
             }else{
               alert(eval(data).message);
            }        
           }, function(data){
             console.log('返回失败' + data);
  })
  $scope.navItems = [{title:'简介',index:0},{title:'课时',index:1}];
  $scope.navViews = [{title:'简介',index:0},{title:'课时',index:1}];
  $scope.goPage = function(index){
     $scope.index = index;
  };
})
.controller('LessonCtrl', function($scope,$stateParams,user,moocService) {
    moocService.lessonDetail($stateParams.lessonId)
    .then(function(data){
          console.log('返回成功' + eval(data).success);
          if(eval(data).success === 1){
               $scope.course  =eval(data).data;
             }else{
               alert(eval(data).message);
            }        
           }, function(data){
             console.log('返回失败' + data);
  })

  if ($rootScope.user.role === 0) {
    console.log('0');
  }
  else{
     console.log('1');
  };
   $scope.tabItems = [{title:'概述'},{title:'资源'}];
   $scope.lesson = {
                    id:'1',
                    outline:'http://www.baidu.com',
                    homework:'http://www.baidu.com',
                    quiz:'http://www.baidu.com',
                    discuss:'http://www.baidu.com',
                    comment:'http://www.baidu.com',
                    note:'http://www.baidu.com',
                    resources:[{
                                id: 0,
                                name: '计算机基础教程',
                                image: 'img/1.jpg',
                                fileUrl:'http://172.19.42.53:8080/data/uploads/Courses/644BEAB7-A863-0DF5-6AAB-9FDE5E61526D/44968693f66091eea1dad22a2c42c708.jpg'
                              },{
                                id: 0,
                                name: '计算机基础教程',
                                image: 'img/2.jpg',
                                fileUrl:'http://172.19.42.53:8080/data/uploads/Courses/644BEAB7-A863-0DF5-6AAB-9FDE5E61526D/44968693f66091eea1dad22a2c42c708.jpg'
                              }]
                  };

   $scope.outlineUrl = $sce.trustAsResourceUrl($scope.lesson.outline);
   console.log($scope.lesson);
})

