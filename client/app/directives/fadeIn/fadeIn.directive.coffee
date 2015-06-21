'use strict'

angular.module 'peakMapApp'
.directive 'fadeIn', ->
  template: '<div></div>'
  restrict: 'EA'
  link: (scope, element, attrs) ->
    element.text 'this is the fadeIn directive'