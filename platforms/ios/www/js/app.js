// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngCordova','starter.controllers','starter.services','starter.directives'])

.run(function($ionicPlatform,deviceService,$cordovaFile,$cordovaSQLite) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
      console.log('fff');
       $ionicPlatform.ready(function() {
            //var device = deviceService.get();
            console.log(device);
//                $cordovaFile.getFreeDiskSpace()
//      .then(function (success) {
//         // success in kilobytes
//            alert('success is'+success);
//         console.log(success);
//      }, function (error) {
//          // error
//      });
                             alert('1111');
         var db = $cordovaSQLite.openDB( "test.db",2 );
                           
  alert('2222');
 cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS test_table (data text, data_num integer)");
//  $scope.execute = function() {
//    var query = "INSERT INTO test_table (data, data_num) VALUES (?,?)";
//    $cordovaSQLite.execute(db, query, ["test", 100]).then(function(res) {
//      console.log("insertId: " + res.insertId);
//    }, function (err) {
//      console.error(err);
//    });
//  };

      alert('33333');
       });

    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);         
    }              
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  // setup an abstract state for the tabs directive
    .state('signin', {
      url: '/sign-in',
      templateUrl: 'templates/sign-in.html',
      controller: 'SignInCtrl'
    })
  .state('lesson', {
    url: "/lesson/:lessonId",
    templateUrl: "templates/lesson.html",
    controller: 'LessonCtrl'
  })
  .state('courses', {
    url: "/courses",
    templateUrl: "templates/courses.html",
    controller: 'CoursesCtrl'
  })
  .state('course-detail', {
      url: '/courses/:courseId',
      templateUrl: 'templates/course-detail.html',
      controller: 'CourseDetailCtrl'
   })
  // Each tab has its own nav history stack:
  // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/sign-in');
}); 