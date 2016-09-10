angular 
  .module('archerApp', ['ui.router'])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
   function($stateProvider, $urlRouterProvider ) {
    
     $stateProvider
        .state('home', {
          url: '/home',
          templaterUrl: 'home.html',
          controller: 'MainController'
        })
        .state('quotes', {
          url: '/quotes/{id}',
          templaterUrl: '/quotes.html',
          controller: 'QuotesController'
        });

      $urlRouterProvider.otherwise('home')
   }])
    
   


   
