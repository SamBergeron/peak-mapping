'use strict'

angular.module 'peakMapApp'
.config ($routeProvider) ->
  $routeProvider.when '/about',
    templateUrl: 'app/views/about/about.html'
    controller: 'AboutCtrl'
