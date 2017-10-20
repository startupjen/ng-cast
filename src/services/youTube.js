angular.module('video-player')
  .service('youTube', function($http) {
    this.search = function(searchTerm, callback) {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          part: 'snippet',
          maxResults: 5,
          q: searchTerm,
          key: 'AIzaSyBA0ltk0avTN16zE11NNZsj6c_Zd-fs4Qo',
          type: 'video'
        }
      }).then(function successCallback(response) {
        console.log('i am successsfullllll!!!!');
        console.log(JSON.stringify(response.data.items));
        callback(response.data.items);
      }, function errorCallback(response) {
        console.log('i am sad because i failed');
      });
    };
  });
