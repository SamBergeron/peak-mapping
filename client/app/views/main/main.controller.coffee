'use strict'

angular.module 'peakMapApp'
.controller 'MainCtrl', ($scope, $log, $http, $location, uiGmapGoogleMapApi, uiGmapIsReady) ->

  $scope.mapInstance = null

  # Add markers from json file
  $scope.markers = []
  $scope.zones = []

  # Call GET on peaks Table
  $http.get('/api/peaks').success (response) ->
    for marker in response
      if marker.zone !in $scope.zones
        $scope.zones.push(marker.zone)
      marker.icon =
        scaledSize: new google.maps.Size(40,40)
        url:'/assets/images/mountain-icon.png'
      $scope.markers.push(marker)
    #$log.log 'Here are the markers: ' + $scope.markers
  .error (res) ->
    $log.log 'Loading markers has failed ' + response

  $scope.map =
    control: {}
    center:
      latitude: 51.19512634313609
      longitude: -117.21160888671875
    zoom: 9
    tilt: 45
    options:
      mapTypeId: google.maps.MapTypeId.HYBRID
    events:
      tilesloaded: (map) ->
        $scope.$apply ->
          $scope.mapInstance = map

  $scope.recenterMap = (lat, long) ->
    if $scope.mapInstance
      $scope.mapInstance.panTo(new google.maps.LatLng(lat, long))

  $scope.centerOnMarker = (marker) ->
    #TODO: make camera transitions smoother
    $scope.recenterMap(marker.latitude, marker.longitude)
    $scope.mapInstance.setZoom(14)

  $scope.goToGallery = (galleryId) ->
    $location.path('/gallery/' + galleryId)

  #If they ever decide to make this work everywhere on the map it would be cool
  #Right now you can test it if you're in a big city (AKA it works in NYC)
  $scope.tiltOnCenter = ->
    if $scope.mapInstance
      tilt = $scope.mapInstance.getTilt()
      $scope.mapInstance.setTilt(45)
      $scope.mapInstance.setHeading(90)

  #make sure we get the map after it has loaded
  uiGmapIsReady.promise(1).then (maps) ->
    maps.forEach (map) ->
      $scope.mapInstance = map.map
