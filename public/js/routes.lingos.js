angular.module('Lingos')
  .config(myRouter);

myRouter.$inject = ['$routeProvider'];

function myRouter($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "../html/translate.html"
    })
    .when("/quiz", {
        templateUrl: "../html/quiz.html"
    })
    .when("/progress",{
        templateUrl: "../html/progress.html"
    })
    .otherwise({
        redirectTo: '/'
    })

}
