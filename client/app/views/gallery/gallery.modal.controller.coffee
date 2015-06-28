'use strict'

angular.module 'peakMapApp'
.controller 'ModalInstanceCtrl', ($scope, $modalInstance, picture) ->

  console.debug('Modal has been triggered')
  console.log(picture)
  $scope.photo = picture;

  $scope.ok = () ->
    $modalInstance.close($scope.picture)

  $scope.cancel = () ->
    $modalInstance.dismiss('cancel')
