describe "service: Quests", ->
  beforeEach module("app")

  beforeEach inject (QuestsService, $httpBackend) ->
    @$httpBackend = $httpBackend;
    @QuestsService = QuestsService;

  afterEach ->
    @$httpBackend.verifyNoOutstandingRequest();
    @$httpBackend.verifyNoOutstandingExpectation();

  it "returns a list", ->
    quests = null
    @$httpBackend.expectGET('/quests').respond([])
    @QuestsService.index().then (response) ->
      quests = response
    @$httpBackend.flush()
    expect(quests.data).toEqual(jasmine.any(Array))
