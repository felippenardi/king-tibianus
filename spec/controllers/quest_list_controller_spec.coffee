describe "controller: Quest List", ->
  beforeEach module("app")

  beforeEach inject ($controller, $rootScope, $q) ->
    questsServiceMock = {
      index: ->
        quests = $q.defer()
        quests.resolve([])
        quests.promise
    }
    @scope = $rootScope.$new()
    $controller 'QuestListController',
                { $scope: @scope, QuestsService: questsServiceMock }


  it "lists the quests", ->
    @scope.$apply()
    expect(@scope.quests).toEqual([])
