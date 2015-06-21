'use strict'

angular.module 'peakMapApp'
.factory 'preloader', ($q) ->

  preload: (url) ->
    deffered = $q.defer()
    image = new Image()

    image.src = url

    if image.complete
      deffered.resolve()
    else
      image.addEventListener 'load', () ->
        deffered.resolve()
      image.addEventListener 'error', () ->
        deffered.reject()

    return deffered.promise

  preloadArray: (urlArray) ->
    deffered = $q.defer()

    images = []
    for url in urlArray
      image = new Image()
      image.src = url
      images.push(image)

      if image.complete
        deffered.resolve()
      else
        image.addEventListener 'load', () ->
          deffered.resolve()
        image.addEventListener 'error', () ->
          deffered.reject()

    return deffered.promise
