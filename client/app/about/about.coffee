'use strict'

angular.module 'peakMapApp'
.config ($routeProvider) ->
  $routeProvider.when '/about',
    templateUrl: 'app/about/about.html'
    controller: 'AboutCtrl'
