angular.module('Lingos')
  .controller('userController', userController);

userController.$inject = ['$http'];

function userController ($http){
  var user = this;
  user.newLingo = {};
  user.lingo = {};
  user.lingoList = [];
  user.greeting = 'Welcome to the LINGO!';

  user.createLingo = function(){

  }
  user.translate = function ($http){
    var tCtrl = this;
    tCtrl.greeting(console.log('Translate is working!'));
  }
}
