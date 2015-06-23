'use strict'

angular.module 'peakMapApp'
.directive 'fadeIn', ($log) ->
  console.log('Inside the fade directive')
  restrict: 'A'
  link: (scope, element, attrs) ->
    if(!attrs.fadeIn)
      $log.log('wtf')
      element.hide()
    else
      $log.log('Fading in')
      element.fadeIn()
