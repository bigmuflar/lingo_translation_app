angular.module('Lingos')
    .factory('lingosFactory', lingosFactory);

lingosFactory.$inject = ['$http'];

function lingosFactory ($http) {
  var wCtrl = this;

    return {

        createLingo : function(lingoData){
            return $http.post('/api/lingos', lingoData)
        },

        getLingo : function(lingoID){
            lingoID = lingoID ? '/' + lingoID : ''
            return $http.get('/api/lingos' + lingoID)
        }

        // wCtrl.getTranslate = function() {
        //     $http.get('/api/lingos')
        //         .then(function(response) {
        //             wCtrl.lingoSchema = response.data;
        //         })
        // }
        // wCtrl.getTraslate();

    }
}
