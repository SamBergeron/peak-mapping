'use strict'

describe 'Service: preloader', ->

  # load the service's module
  beforeEach module 'peakMapApp'

  # instantiate service
  preloader = undefined
  beforeEach inject (_preloader_) ->
    preloader = _preloader_

  it 'should do something', ->
    expect(!!preloader).toBe true