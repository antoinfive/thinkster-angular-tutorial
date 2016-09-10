(function() {
  angular
    .module('archerApp')
    .controller('QuotesController', QuotesController)

    QuotesController.$inject = ['quoteService', '$stateParams',]

    function QuotesController(quoteService, stateParams) {
       var vm = this;

       vm.quotes = quoteService.quotes
       vm.quote = quoteService.quotes[stateParams.id]
    }
}());

