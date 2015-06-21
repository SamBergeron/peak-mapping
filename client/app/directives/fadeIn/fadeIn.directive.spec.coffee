'use strict'

describe 'Directive: fadeIn', ->

  # load the directive's module
  beforeEach module 'peakMapApp'
  element = undefined
  scope = undefined
  beforeEach inject ($rootScope) ->
    scope = $rootScope.$new()

  it 'should make hidden element visible', inject ($compile) ->
    element = angular.element '<fade-in></fade-in>'
    element = $compile(element) scope
    expect(element.text()).toBe 'this is the fadeIn directive'
