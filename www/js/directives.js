angular.module('starter.directives',[])


.directive('outline', function() {
    return {
        restrict: 'E',
        template: ' <iframe  src="http://172.19.42.53:8080/"></iframe>',
        templateUrl:'',
        replase:true
    };
})
