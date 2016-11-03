angular.module('Lingos')
  .controller('userController', userController);

userController.$inject = [];
tranlate.$inject = ['$http'];

function userController (){
  var user = this;
  user.newLingo = {};
  user.lingo = {};
  user.lingoList = [];
  user.greeting = 'Welcome to the LINGO!';

  user.createLingo = function(){

  }
}

function translate($http){
  var tCtrl = this;
  tCtrl.greeting(console.log('Translate is working!'));
  $http.post
}
