angular.module('video-player', [])

.component('app', {
  controller: function() {
    this.selected = window.exampleVideoData[0];

    this.selectVideo = (video) => {
      this.selected = video;
    }
  },

  templateUrl: 'src/templates/app.html'
});
