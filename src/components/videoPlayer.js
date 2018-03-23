angular.module('video-player').component('videoPlayer', {
  controller: function($sce) {
    this.video = window.exampleVideoData[0];
    this.videoUrl = 'https://www.youtube.com/embed/' + this.video.id.videoId;

    this.trustSrc = function() {
      return $sce.trustAsResourceUrl(this.videoUrl);
    };
  },
  templateUrl: 'src/templates/videoPlayer.html'
});