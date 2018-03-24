angular.module('video-player')
.component('videoList', {
  bindings: {
    selectVideo: '<',
    videos: '<'
  },
  templateUrl: 'src/templates/videoList.html' 
});
