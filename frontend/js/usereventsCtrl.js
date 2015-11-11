angular.module('goaldApp')
  .controller('userEventsCtrl', userEventsCtrl);

userEventsCtrl.$inject = ['$http', '$state', '$stateParams'];

function userEventsCtrl($http, $state, $stateParams) {

  var self = this;
  self.all = [];

  console.log('$stateParams.user_id = ' + $stateParams.user_id)
  console.log('$stateParams.goal_id = ' + $stateParams.goal_id)
  self.user_id = $stateParams.user_id 
  self.goal_id = $stateParams.goal_id 

  self.getEvents = getEvents;
  getEvents();
  function getEvents(user_id, goal_id) {
    console.log('running getEvents from userEventsCtrl')
    console.log(self.user_id)
    console.log(self.goal_id)
    $http
      .get('http://localhost:3000/users/' + self.user_id + '/goals/' + self.goal_id + '/events')
      .then(function(response) {
        console.log(response)
        self.all = response.data
        console.log(self.all)
    });
  }

}