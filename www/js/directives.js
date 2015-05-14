angular.module('starter.directives',[])
.directive('outline', function() {
    return {
        restrict: 'E',
        template: ' <iframe class="pading" src="http://172.19.42.53:8080/" style="width:100%;height:100%"></iframe>'
    };
})

.directive('outlines', function() {
    return {
        restrict: 'E',
        template: ' <iframe class="pading" src="http://172.19.42.53:8080/"></iframe>',
        replase:true
    };
})
