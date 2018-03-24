angular.module('video-player').component('app', {
  controller: function(youTube) {
    this.selected = window.exampleVideoData[0];
    this.videos = window.exampleVideoData;

    this.searchResults = query => {
      youTube.getVideos(query, (data) => {
        this.videos = data;
        this.selected = this.videos[0];
      })
    };

    this.selectVideo = video => {
      this.selected = video;
    };
    youTube.getVideos('dogs');
  },

  templateUrl: 'src/templates/app.html'
});
