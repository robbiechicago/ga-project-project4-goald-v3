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
      }) 
  }

}
