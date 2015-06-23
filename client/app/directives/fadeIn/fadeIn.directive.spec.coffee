'use strict'

describe 'Directive: fadeIn', ->

  # load the directive's module
  beforeEach module 'peakMapApp'
  element = undefined
  scope = undefined
  beforeEach inject ($rootScope) ->
    scope = $rootScope.$new()
