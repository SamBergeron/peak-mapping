'use strict'

angular.module 'peakMapApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngAnimate',
  'ui.bootstrap',
  'uiGmapgoogle-maps',
  'ngFileUpload',
  'ui.select'
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

.run ($rootScope, $http, $log) ->
  $http.get('/api/configs/DEV').success (config) ->
    # $log.info(config)
    $rootScope.config = config
  .error (err) ->
    $log.error 'Could not retrieve config'
