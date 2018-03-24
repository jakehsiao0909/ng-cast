angular.module('video-player').component('app', {
  // selector: 'youTube',
  controller: function(youTube) {
    this.selected = window.exampleVideoData[0];
    console.log(this);

    this.searchResults = data => {
      this.videos = data;
      this.selected = this.videos[0];
    };

    this.selectVideo = video => {
      this.selected = video;
    };
    youTube.getVideos('dogs');
  },

  templateUrl: 'src/templates/app.html'
});
