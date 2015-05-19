angular.module('starter.controllers', [])
.controller('CoursesCtrl', function($scope, courses,moocService) {
  $scope.courses = courses.all();
    console.log('开始');
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
   $scope.lesson = {id:'1',outline:'http://www.baidu.com',homework:'http://www.baidu.com',quiz:'http://www.baidu.com',discuss:'http://www.baidu.com',comment:'http://www.baidu.com',note:'http://www.baidu.com'};
   $scope.outlineUrl = $sce.trustAsResourceUrl($scope.lesson.outline);
   console.log($scope.outlineUrl);
})

