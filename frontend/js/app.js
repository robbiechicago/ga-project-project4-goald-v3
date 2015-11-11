angular
  .module('goaldApp', ['ui.router', 'angular.filter'])
  .config(MainRouter);

function MainRouter($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html'
    })
    .state('user', {
      url: '/user',
      templateUrl: 'user.html'
    })
    .state('userId', {
      url: '/user/:id',
      templateUrl: 'user.id.html'
    })
    .state('userEvents', {
      url: '/user/:id/goal/:id',
      templateUrl: 'userevents.html'
    })
}

console.log('Hello RoHo.  app.js connected')
