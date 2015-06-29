'use strict'

angular.module 'peakMapApp'
.controller 'UploadCtrl', ($rootScope, $scope, $log, $http, Upload) ->

  $scope.$watch 'files', () ->
    $scope.upload($scope.files)

  $log.info($rootScope.config)

  $scope.upload = (files) ->
    if (files && files.length)
      for file, i in files
        Upload
        .upload(
          url: 'peakmap.media.s3-website-us-east-1.amazonaws.com' #Points to AWS bucket
          fields:
            key: file.name #Becomes AWS filename
            AWSAccessKeyId: {} #TODO: Make this a config value
            acl: 'private' #private or public access for file
            policy: {} #TODO: make a policy service
            signature: {} #TODO make a signature service... or have it in policy service?
            "Content-Type": 'image/jpeg'
            filename: file.name
          file: file
        )
        .progress( (evt) ->
          progressPercentage = parseInt(100.0 * evt.loaded / evt.total)
          $log.log('progress: ' + progressPercentage +
           '% ' + file.name)
        )
        .success( (data, status, headers, config) ->
          $log.log('file ' + file.name + 'uploaded. Response: ' + data)
        )
        .error( (err) ->
          $log.error('file ' + file.name + ' could not upload')
        )

  #Get list of peaks for mapping uploads
  $http.get('/api/peaks').success (res) ->
    $scope.peaks = res
    $log.log('Got peaks')
  .error (res) ->
    $log.error('Could not get peaks from DB')
