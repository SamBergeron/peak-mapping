'use strict'

angular.module 'peakMapApp'
.controller 'GalleryCtrl', ($scope, $log, $interval, $routeParams, $http, preloader) ->

  $scope.galleryId = $routeParams.galleryId
  $scope.photos = []
  $scope.photoUrls = []
  $scope.galleryLoaded = false

  $http # Call GET on pictures Table
  .get('/api/pictures/peakRef/' + $scope.galleryId).success (res) ->
    $scope.loadCount = 0
    for picture in res
      $scope.photos.push(picture)
      $scope.photoUrls.push(picture.url)

    preloader.preloadArray($scope.photoUrls).then () ->
      console.log('Images have been loaded')
      $scope.galleryLoaded = true

  .error (res) ->
    $log.log 'Loading pictures has failed ' + res

  # Gallery control functions -----------------------------------
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
