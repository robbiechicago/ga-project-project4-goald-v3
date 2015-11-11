angular.module('goaldApp')
  .controller('eventCtrl', eventCtrl);

eventCtrl.$inject = ['$http', '$state', '$stateParams'];

function eventCtrl($http, $state, $stateParams) {
  
  var self = this;

  self.newEvent = newEvent;
  function newEvent(user_id, goal_id) {
    console.log('a nice new event');
    console.log('user_id = ' + user_id)
    console.log('goal_id = ' + goal_id)

    var theDateTime = (new Date)
    console.log(theDateTime)

    var aNewEvent = {
      "user_id": user_id,
      "goal_id": goal_id,
      "event_datetime": theDateTime
    }

    console.log(aNewEvent)

    $http
      .post('http://localhost:3000/users/' + user_id + '/goals/' + goal_id + '/events/', aNewEvent)
      .then(function(response) {
        console.log(response);
    });
  }

  self.countEvents = countEvents;
  function countEvents(user_id, goal_id) {
    // JUST GET ALL EVENTS FOR USER/GOAL THEN REMOVE NULL TIMES THEN COUNT
    console.log('is this working???')
    $http
      .get('http://localhost:3000/users/' + user_id + '/goals/' + goal_id + '/events')
      .then(function(response) {
        console.log('countEvents:')
        console.log(response);
    });
  }

}
















