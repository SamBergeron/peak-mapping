'use strict'

angular.module 'peakMapApp'
.config ($routeProvider) ->
  $routeProvider
  .when '/gallery/:galleryId',
    templateUrl: 'app/views/gallery/gallery.html'
    controller: 'GalleryCtrl'
