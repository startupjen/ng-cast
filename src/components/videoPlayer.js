angular.module('video-player')

.component('videoPlayer', {
  bindings: {
    video: '<'
  },
  controller: function () {
    console.log(`VIDEOPLAYER controller`)
    console.log('this is ', this)
  },

  templateUrl: 'src/templates/videoPlayer.html'
});
