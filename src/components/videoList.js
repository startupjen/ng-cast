angular.module('video-player')
  .component('videoList', {
    controller: function() {
      console.log('VIDEOLIST controller');
      console.log('this is ', this);
    // console.log('$scope.ctrl is ', $scope.$ctrl)
    },
    bindings: {
      videos: '<',
      onclickb: '<'
    },
    templateUrl: 'src/templates/videoList.html'
  });
