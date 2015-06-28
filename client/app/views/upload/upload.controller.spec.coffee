'use strict'

describe 'Controller: UploadCtrl', ->

  # load the controller's module
  beforeEach module 'peakMapApp'
  UploadCtrl = undefined
  scope = undefined

  # Initialize the controller and a mock scope
  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()
    UploadCtrl = $controller 'UploadCtrl',
      $scope: scope

  it 'should ...', ->
    expect(1).toEqual 1
