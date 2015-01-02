angular.module("app").controller('QuestListController',
    function($scope, QuestsService) {
      QuestsService.index().then(function(response) {
        $scope.quests = response;
      });
    });
