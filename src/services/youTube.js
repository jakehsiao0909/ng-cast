angular.module('video-player').service('youTube', function($http) {
  this.getVideos = function(query, cb) {

    $http
      .get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          q: query,
          maxResults: 5,
          key: window.YOUTUBE_API_KEY,
          videoEmbeddable: true,
          type: 'video',
          part: 'snippet'
        }
      })
      .then(result => cb(result.data.items))
      .catch(error => console.error('Error in the get request: ', error));
  };
});
