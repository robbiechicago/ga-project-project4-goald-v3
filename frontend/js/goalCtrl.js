angular.module('goaldApp')
  .controller('goalCtrl', goalCtrl);

goalCtrl.$inject = ['$http'];

function goalCtrl($http) {
  
  var self = this;

  self.all = [];

  function getGoals() {
    console.log('running getGoals()')
    $http
      .get('http://localhost:3000/goals')
      .then(function(response) {
        console.log(response.data)
        self.all = response.data
      });
  };

  getGoals();
  console.log(self.all)

  function postGoal(newGoal) {
    $http
      .post('http://localhost:3000/goals', newGoal)
      .then(function(response) {
        console.log(response);
      });
  };

  self.addGoal = addGoal;
  self.newGoal = {};

  function addGoal(){
    self.all.push(self.newGoal);
    console.log(self.newGoal);
    postGoal(self.newGoal);
    self.newGoal = {};

  }
}