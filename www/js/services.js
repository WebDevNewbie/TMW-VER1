var app = angular.module('tradeapp.services', [])
app.factory('Auth', ['$http','$rootScope', 
			 function($http,  $rootScope)
{
	// $rootScope.baseURL   = 'http://tradeapp.com';
	 $rootScope.baseURL   = '/host';
	 
	
	$rootScope.user_info   = {};
  $rootScope.pictureImage = 0;
	$rootScope.s_u_ID = 0;
  
	$rootScope._remove_white_space = function (str)
	  {
		var string = str;
		var _no_space = string.replace(/ /g,'');
		return _no_space;
	  }

	$rootScope.inputLength = function (name) 
	{
      if(name=="") { return false; }
      if(!isNaN(name)) { return false; }
      if((name.length < 6) || (name.length > 40)) { return false; }
      return true;
    }
	$rootScope.checkInput = function (name) 
	{
      for(var i = 0; i < name.length; i++){
		 
		  if(name[i] == undefined || name[i] == ""){return false;}
		  else{return true;}
	  }
    }
	$rootScope.inputBlank = function (name) 
	{
      if(name=="") { return false; }
      return true;
    }
	$rootScope.allLetters = function (name) 
	{
      if(name=="") { return false; }
      if((name.length < 3) || (name.length > 250)) { return false; }
      return true;
    }
	$rootScope.isNumber = function (n) 
	{
		return !isNaN(parseFloat(n)) && isFinite(n);
    }
	
	$rootScope.isLogged  = false;
	$rootScope.show_item  = 0;
    var fac              = {};
	fac.STORE_DATA = function(database,data)
	{
		localStorage.setItem(database,JSON.stringify(data));
	}

	fac.FETCH_DATA = function(name)
	{
		var checker = localStorage.getItem(name);
		return checker ? JSON.parse(checker) : false;
	}

	fac.REQUEST = function(obj)
	{ 
		var http = $http(
			                {
			                    method            : obj.method,
			                    url               : obj.url,
			                    data              : obj.data,
			                    params            : obj.params,
			                    transformRequest  : angular.identity,
			                    headers           : { 'Content-Type':undefined }
			                }
	                    );
		return http;
	}	

	return fac;
}]);
app.directive('noCacheSrc', function($window) {
  return {
    priority: 99,
    link: function(scope, element, attrs) {
      attrs.$observe('noCacheSrc', function(noCacheSrc) {
        noCacheSrc += '?' + (new Date()).getTime();
        attrs.$set('src', noCacheSrc);
      });
    }
  }
});

/*.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
*/