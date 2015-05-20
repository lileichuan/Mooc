var services = angular.module('starter.services', []);

services.factory('user', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
   var user = {id:'1',name:'李雷川',sex:'0',role:'1'};

  return {

    get: function() {
       return user;
    }
  };
});

services.factory('courses', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var courses = [{
    id: 0,
    name: '计算机基础教程',
    studynum: '选课人数:10',
    studytime: '开课时间:2015-03-1',
    image: 'img/1.jpg'
  }, {
    id: 1,
    name: '计算机基础教程',
    studynum: '选课人数:10',
    studytime: '开课时间:2015-03-1',
    image: 'img/2.jpg'
  },{
    id: 2,
    name: '计算机基础教程',
    studynum: '选课人数:10',
    studytime: '开课时间:2015-03-1',
    image: 'img/3.jpg'
  }, {
    id: 3,
    name: '计算机基础教程',
    studynum: '选课人数:10',
    studytime: '开课时间:2015-03-1',
    image: 'img/4.jpg'
  }, {
    id: 4,
    name: '计算机基础教程',
    studynum: '选课人数:10',
    studytime: '开课时间:2015-03-1',
    image: 'img/1.jpg'
  }];

  return {
    all: function() {
      return courses;
    },
    remove: function(course) {
      courses.splice(courses.indexOf(course), 1);
    },
    get: function(courseId) {
      for (var i = 0; i < courses.length; i++) {
        if (courses[i].id === parseInt(courseId)) {
          return courses[i];
        }
      }
      return null;
    }
  };
});


services.factory('chapters', function() {
  // Might use a resource here that returns a JSON array
  // Some fake testing data
  var chapters = [{
    id: 0,
    name: '计算机基础教程',
    lessons:[{
      id:0,
      name:'初中生物分支测验'},{
      id:1,  
      name:'生态系统分支测验'}]
  },{
    id: 1,
    name: '计算机基础教程',
    lessons:[{
      id:0,
      name:'初中生物分支测验'},{
      id:1,  
      name:'生态系统分支测验'}]
  },{
    id: 2,
    name: '计算机基础教程',
    lessons:[{
       id:0,
      name:'初中生物分支测验'},{
      id:1,  
      name:'生态系统分支测验'}]
  }];
  return {
    all: function() {
      return chapters;
    }
  };
});



services.service('moocService', function($http, $q){
  var baseUrl = 'http://42.62.16.168:88/api?method=clientActive&client_type=1&client_renew_type=1&udid=OpenUDIDcom.founder.Class_9363f9ec20c0f440691cfd09b4ec7da776624c5a';
  var _finalUrl = '';
  var makeUrl = function(){
    _finalUrl = baseUrl + '&callback=JSON_CALLBACK';
    return _finalUrl;
  }

  this.setArtist = function(artist){
    _artist = artist;
  }

  this.getArtist = function(){
    return _artist;
  }
  this.clientActive = function(){
    makeUrl();
    console.log(_finalUrl);
    var deferred = $q.defer();
    $http({
      method: 'JSONP',
      url: _finalUrl
    }).success(function(data){
       console.log('success');
      deferred.resolve(data);
    }).error(function(){
       console.log('faild');
      deferred.reject('There was an error')
    })
    return deferred.promise;
  }
});

