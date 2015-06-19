'use strict'

angular.module 'peakMapApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'uiGmapgoogle-maps'
]
.config ($routeProvider, $locationProvider) ->
  $routeProvider
  .otherwise
    redirectTo: '/'

  $locationProvider.html5Mode true
  
.config (uiGmapGoogleMapApiProvider) ->
  uiGmapGoogleMapApiProvider
    .configure
      key: 'AIzaSyDgEo9hjCdBFtgtxxLeQx2mb2uo-i3BShs',
      v: '3.17',
      libraries: 'weather,geometry,visualization'
