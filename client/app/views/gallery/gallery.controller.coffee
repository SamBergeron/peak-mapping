'use strict'

angular.module 'peakMapApp'
.controller 'GalleryCtrl', ($scope, $log, $interval, $routeParams, $http, $modal, preloader) ->

  $scope.galleryId = $routeParams.galleryId
  $scope.photos = []
  $scope.photoUrls = []
  $scope.galleryLoaded = false

  $scope.resSize = 0
  $http # Call GET on pictures Table
  .get('/api/pictures/peakRef/' + $scope.galleryId).success (res) ->
    $scope.loadCount = 0
    $scope.resSize = res.length
    for picture in res
      $scope.photos.push(picture)
      preloader.preload(picture.url).then(
        (success) ->
          $scope.loadCount++
          #$log.info('Image ' + $scope.loadCount + ' of ' + res.length + ' has been loaded')
        , (failure) ->
          console.log('Seems like loading failed for: ' + failure)
        )
  .error (res) ->
    $log.log 'Loading pictures has failed ' + res

  $http # Get peak by id
  .get('/api/peaks/' + $scope.galleryId).success (res) ->
    $scope.peak = res
  .error (res) ->
    $log.log('Could not get peak information ' + res)

  $scope.galleryLoaded = false
  $scope.$watch('loadCount', () ->
    if($scope.loadCount == $scope.resSize)
      $scope.galleryLoaded = true
    )

  $scope.$watch('galleryLoaded', () ->
    $log.debug('galleryLoaded value: ' + $scope.galleryLoaded)
    )

  # Gallery control functions -----------------------------------
  $scope._index = 0
  $scope.isImageActive = (index) ->
    return index == $scope._index
  $scope.showPrev = () ->
    return $scope._index = if $scope._index > 0 then --$scope._index else $scope.photos.length - 1
  $scope.showNext = () ->
    return $scope._index = if $scope._index < $scope.photos.length-1 then ++$scope._index else 0
  $scope.showSelect = (index) ->
    $scope.stopSlide()
    return $scope._index = index

  #Start slide on page load
  slide = $interval () -> #slide is the interval function
    $scope.showNext()
  , 2000
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

  # Modal control functions -------------------------------------
  $scope.open = (size) ->
    modalInstance = $modal.open(
      animation: true
      templateUrl: 'modal.html'
      controller: 'ModalInstanceCtrl'
      size: size
      resolve:
        picture: () ->
          return $scope.photos[$scope._index]
      )

    modalInstance.result.then(
      (selectedItem) ->
        $log.info('Modal has loaded')
      , () ->
        $log.info('Modal dismissed')
      )
