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
.controller('CourseDetailCtrl', function($scope, $stateParams, courses,chapters,$ionicModal) {
  $ionicModal.fromTemplateUrl("tabs.html", {
    scope: $scope,
    animation: "slide-in-up"
  }).then(function(modal) {
    alert('fffff');
    $scope.modal = modal;
  });
  $scope.index = 1;
  $scope.course = courses.get($stateParams.courseId);
  $scope.chapters = chapters.all();
  $scope.navItems = [{title:'简介',index:0},{title:'课时',index:1}];
  $scope.navViews = [{title:'简介',index:0},{title:'课时',index:1}];
  $scope.goPage = function(index){
     $scope.index = index;
  }
  $scope.openModel = function() {
    alert($scope.modal);
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });

})
.controller('LessonCtrl', function($scope, $stateParams, courses,chapters) {
   $scope.tabItems = [{title:'概述'},{title:'资源'}];

})

