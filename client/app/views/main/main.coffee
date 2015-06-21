'use strict'

angular.module 'peakMapApp'
.config ($routeProvider) ->
  $routeProvider
  .when '/',
    templateUrl: 'app/views/main/main.html'
    controller: 'MainCtrl'
