angular.module('Lingos')
  .controller('userController', userController);

userController.$inject = ['lingosFactory'];

function userController (lingosFactory){
  var user = this;
  user.newLingo = {};
  user.lingo = {};
  user.lingoList = [];
  user.greeting = 'Welcome to the LINGO!';

  console.log(user.greeting);

  user.translate = function (){
    var tCtrl = this;
    tCtrl.greeting(console.log('googleTranslate'));
  }

  user.createLingo = function(){
      lingosFactory.createLingo(user.newLingo)
          .then(function(returnData){
              console.log('Response from server : ', returnData)
              user.newLingo = {}; // reset the form
              user.getLingo();
          });
  }

  user.getLingo = function(lingoID){
      lingosFactory.getLingo(lingoID)
          .then(function(returnData){
              if(returnData.data.length){
                  // if array (has length), store in lingoList
                  user.lingoList = returnData.data;
              }
              else{
                  // if not, store in lingo
                  user.lingo = returnData.data;
              }
          })
  }
  user.getLingo(); // get many
}
