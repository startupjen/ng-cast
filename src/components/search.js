angular.module('video-player')

.component('search', {
  controller: function($scope) {
    console.log(`SEARCH controller`)
    console.log('scope is ', $scope)
    console.log('$scope.ctrl is ', $scope.$ctrl)
  },
  bindings: {
    input: '=',
    search: '<'
  },
  templateUrl: 'src/templates/search.html'
});
