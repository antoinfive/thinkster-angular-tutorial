(function() {
  angular
    .module('archerApp')
    .controller('QuotesController', QuotesController)

    QuotesController.$inject = ['quoteService']

    function QuotesController(quoteService) {
       var vm = this;
       vm.quotes = quoteService.quotes;
 
        vm.addCharacter = function() {
          if(!vm.character || vm.content == " ") {
          alert('Both fields need values')
          return;
       }
            vm.quotes.push({character: vm.character, content: vm.content, upvotes: 1})
            vm.character = " "
            vm.content = " "
      }
    
      vm.incrementUpvotes = function(quote) {
       quote.upvotes += 1;
      }

    }
}());

