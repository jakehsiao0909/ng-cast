angular.module('video-player')

.component('search', {
  bindings:{
    searchResults: '<'
  },
  controller: function() {
    this.query = '';
  },

  templateUrl: 'src/templates/search.html'
});
