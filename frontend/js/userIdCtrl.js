angular.module('goaldApp')
  .controller('userIdCtrl', userIdCtrl);

userIdCtrl.$inject = ['$http', '$state', '$stateParams'];

function userIdCtrl($http, $state, $stateParams) {
  
  var self = this;  
  var id = $stateParams.id  

  self.getUser = getUser;
  getUser()
  function getUser() {
    $http
      .get('http://localhost:3000/users/' + id)
      .then(function(response) {
        self.selected_user = response.data
        console.log(self.selected_user)
        // var events = response.data.projects;

          }) 
        }
        


  function OLD_AND_DEADgetUser() {
    $http
      .get('http://localhost:3000/users/' + id)
      .then(function(response) {
        self.user = response.data
        // console.log(self.user)
        self.goals = response.data.goals
        // console.log(self.goals)
        self.projects = response.data.projects
        console.log(self.projects)

        // var projects = response.data.projects
        // for each project in projects..
          // make http request based on project[i].goalId
          // .then project.goal will be whatever gets returned


    })
  }

  self.goalInfo = goalInfo
  function goalInfo(project_id) {
    $http
      .get('http://localhost:3000/users/' + id + '/projects/' + project_id)
      .then(function(response) {
        self.goalInfo = response.data.goal
        // console.log(self.goalInfo)
      })
  }

  self.test = test;
  function test(project_id) {
    console.log(project_id)
    $http
      .get('http://localhost:3000/users/' + id + '/projects/' + project_id)
      .then(function(response) {
        console.log(response.data.goal.goal_thing)
      })
  }

  self.getUserProjects = getUserProjects;
  function getUserProjects() {
    console.log('running getUserProjects')  
    $http
      .get('http://localhost:3000/users/' + id + '/projects')
      .then(function(response) {
        self.projects = response.data
        console.log('projects:')
        console.log(self.projects)
    })
  }

  self.getUserProjectGoal = getUserProjectGoal;
  function getUserProjectGoal(project_id) {
    $http
      .get('http://localhost:3000/users/' + id + '/projects/' + project_id + '/goals' )
      .then(function(response) {
        self.goal = response.data
        console.log('goal:')
        console.log(self.goal)
    })
  }

}
