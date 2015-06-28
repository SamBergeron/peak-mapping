'use strict'

angular.module 'peakMapApp'
.config ($routeProvider) ->
  $routeProvider.when '/upload',
    templateUrl: 'app/views/upload/upload.html'
    controller: 'UploadCtrl'
