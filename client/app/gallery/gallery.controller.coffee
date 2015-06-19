'use strict'

angular.module 'peakMapApp'
.controller 'GalleryCtrl', ($scope, $log, $interval, $routeParams, $http) ->

  $scope.galleryId = $routeParams.galleryId
  $scope.photos = []

  # Call GET on pictures Table
  $http.get('/api/pictures/peakRef/' + $scope.galleryId).success (res) ->
    for picture in res
      $scope.photos.push(picture)
    #$log.log 'Here are the markers: ' + $scope.markers
  .error (res) ->
    $log.log 'Loading pictures has failed ' + res

  $scope._index = 0;
  $scope.isImageActive = (index) ->
    return index == $scope._index
  $scope.showPrev = () ->
    return $scope._index = if $scope._index > 0 then --$scope._index else $scope.photos.length - 1
  $scope.showNext = () ->
    return $scope._index = if $scope._index < $scope.photos.length-1 then ++$scope._index else 0
  $scope.showSelect = (index) ->
    return $scope._index = index

  slide = undefined
  $scope.startSlide = () ->
    if angular.isDefined(slide)
      return
    slide = $interval () -> #slide is the interval function
      $scope.showNext()
    , 2000

  $scope.stopSlide = () ->
    if angular.isDefined(slide)
      $interval.cancel(slide)
      slide = undefined
