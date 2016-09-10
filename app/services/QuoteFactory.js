(function() {
   angular
    .module('archerApp')
    .factory('quoteService', quoteService)
  
  quoteService.$inject = ['$http']

  function quoteService() {

  var o = {
     quotes: [
       {character: 'Cheryl', content: 'Cant or Wont?', upvotes: 1 },
       {character: 'Archer', content: 'Dangaaaaa Zone', upvotes: 2},
       {character: 'Archer', content: 'jesus christ Cyril, read a book', upvotes: 4}
  ]
      };
    return o;
  };


}());
  
