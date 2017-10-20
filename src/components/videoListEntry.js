angular.module('video-player')
  .component('videoListEntry', {
    controller: function() {
      this.onClickBloop = function() {
        this.onClick();
      }; 
      console.log('VIDEOLISTENTRY controller');
      console.log('this is ', this);
    // console.log('$scope.ctrl is ', $scope.$ctrl)
    },
    bindings: {
      video: '<',
      onclickb: '<'
    },
    templateUrl: 'src/templates/videoListEntry.html'
  });