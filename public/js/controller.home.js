angular.module('Lingos')
  .controller('homeController', homeController);

homeController.$inject = [];

function homeController (){
  var home = this;
  home.newLingo = {};
  home.lingo = {};
  home.lingoList = [];
  home.greeting = 'Welcome to the LINGO!';

  home.createLingo = function(){

  }
}
