angular.module('video-player').component('videoPlayer', {
  bindings: {
    selected: '<'
  },
  controller: function($sce) {
    this.trustSrc = function() {
      const videoUrl =
        'https://www.youtube.com/embed/' + this.selected.id.videoId;
      return $sce.trustAsResourceUrl(videoUrl);
    };
  },
  templateUrl: 'src/templates/videoPlayer.html'
});
