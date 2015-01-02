angular.module("app").factory('QuestsService', function($http) {
  var index = $http.get('/quests').then(function(response) {
    return response.data;
  });

  return {
    index: function() { return index; }
  };
});
