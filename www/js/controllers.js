angular.module('starter.controllers', [])
.controller('CoursesCtrl', function($scope,$ionicPlatform,courses,moocService) {

  $scope.courses = courses.all();
    console.log('开始');
//            $ionicPlatform.ready(function() {
//                                  console.log('开始1111');
//                                 $AppVersionPlugin.getAppVersion().then(success, error);
//                                 });
    /*
    moocService.clientActive()
    .then(function(data){
        console.log(data);
      }, function(data){
        console.log('结束');
      })
*/
  $scope.getItemHeight = function(item, index) {
    //使索引项平均都有10px高，例如
    return 280;
  };
  $scope.remove = function(course) {
    Courses.remove(chat);
  }
  $scope.gotoCourseDetail = function(courseId) {
    Courses.remove(chat);
  }
})
.controller('CourseDetailCtrl', function($scope, $stateParams,courses,chapters) {

  $scope.index = 1;
  $scope.course = courses.get($stateParams.courseId);
  $scope.chapters = chapters.all();
  $scope.navItems = [{title:'简介',index:0},{title:'课时',index:1}];
  $scope.navViews = [{title:'简介',index:0},{title:'课时',index:1}];
  $scope.goPage = function(index){
     $scope.index = index;
  }


})
.controller('LessonCtrl', function($scope, $stateParams,$sce,user) {
  $scope.user = user.get();
  if (user.role === 0) {
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

