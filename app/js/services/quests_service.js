angular.module("app").factory('QuestsService', function($http) {
  return {
    index: function() {
      return $http.get('/quests');
    }
  };
});
