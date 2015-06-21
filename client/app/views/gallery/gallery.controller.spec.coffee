'use strict'

describe 'Controller: GalleryCtrl', ->

  # load the controller's module
  beforeEach module 'peakMapApp'
  GalleryCtrl = undefined
  scope = undefined

  # Initialize the controller and a mock scope
  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()
    GalleryCtrl = $controller 'GalleryCtrl',
      $scope: scope
