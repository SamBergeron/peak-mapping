'use strict'

angular.module 'peakMapApp'
.controller 'AboutCtrl', ($scope, $log, $http) ->

  $scope.pictures = []
  # Call GET on peaks Table
  $http.get('/api/pictures').success (response) ->
    for picture in response
      $scope.pictures.push(picture)
    #$log.log 'Here are the markers: ' + $scope.markers
  .error (res) ->
    $log.log 'Loading pictures has failed ' + response
