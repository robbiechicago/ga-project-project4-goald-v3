angular
  .module('goaldApp', ['ui.router', 'angular.filter', 'chart.js'])
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
      url: '/user/:user_id/goal/:goal_id/events',
      templateUrl: 'userEvents.html'
    })
}

console.log('Hello RoHo.  app.js connected')
