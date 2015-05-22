angular.module('starter.directives',[])


.directive('outline', function() {
    return {
        restrict: 'E',
        template: ' <iframe  src="http://172.19.42.53:8080/"></iframe>',
    };
})

.directive('resource', function() {
    return {
        restrict: 'E',
        templateUrl:'templates/lesson-resource.html'
    }
})
.directive("quiz", function() {
    return {
        restrict: 'E',
        template: '<p>fffff</p>',
        replace:true
    }
})

.directive("hello",function(){
	return{		
	 restrict:'E',
	 template:'<div class="red">hello 2131313<strong>你好</strong>everyone</div>',
	 replace:true
	}

})
