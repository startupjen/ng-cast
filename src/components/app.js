angular.module('video-player')

.component('app', {
  controller: function(youTube) {
    this.selectVideo = function(video) {
      this.currentVideo = video
    },
    this.onClickB = function(video) {
      console.log(`I CLICKED!!!`)
      this.selectVideo(video)
    },
    this.searchResults = function(videos) {
      this.currentVideo = videos[0]
      this.videos = videos
    }
    this.result = function() {
      console.log(`i clicked in result!!!`)
    }
    this.search = function(searchTerm) {
      console.log(`searchTerm is ${searchTerm}`)
      debugger
      youTube.search(searchTerm, this.searchResults)
    }
    this.currentVideo = window.exampleVideoData[0],
    this.videos = exampleVideoData
  
    console.log(`APP controller`)
    console.log('scope is ', this)
    debugger
  },
  templateUrl: 'src/templates/app.html'
})