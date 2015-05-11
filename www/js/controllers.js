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
.controller('CourseDetailCtrl', function($scope, $stateParams, courses) {
  console.log($stateParams);
  $scope.course = courses.get($stateParams.courseId);
})

