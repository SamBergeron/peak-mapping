'use strict'

angular.module 'peakMapApp'
.config ($routeProvider) ->
  $routeProvider
  .when '/gallery/:galleryId',
    templateUrl: 'app/gallery/gallery.html'
    controller: 'GalleryCtrl'
