(function() {
 angular
  .module('archerApp')
  .controller('MainController', MainController)
 
  MainController.$inject = ['quoteService'] 
  function MainController(quoteService) {

    var vm = this;
    vm.quotes = quoteService.quotes

        vm.addCharacter = function() {
          if(!vm.character || vm.content == " ") {
          alert('Both fields need values')
          return;
       }
            vm.quotes.push({
              character: vm.character, 
              content: vm.content, 
              upvotes: 1,
              comments:[
                {author: 'Antoin', body: 'This quote is fricking hysterical', upvotes: 0},
                {author: 'Steven', body: 'Someone call Kenny Logans', upvotes: 0}
              ]
            });

            vm.character = " "
            vm.content = " "
      }

     vm.incrementUpvotes = function(quote) {
      quote.upvotes += 1;
     }

   
  } 
}());


