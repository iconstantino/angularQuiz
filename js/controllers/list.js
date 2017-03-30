(function(){
    angular
        .module('manchesterFacts')
        .controller('listCtrl', ListController);

        ListController.$inject = ['quizMetrics', 'DataService'];

        function ListController(quizMetrics, DataService){
            var vm = this;

            vm.quizMetrics = quizMetrics;
            vm.data = DataService.playersData;
            vm.activePlayer = {};
            vm.changeActivePlayer = changeActivePlayer;
            vm.activateQuiz = activateQuiz;
            vm.search = "";

            function changeActivePlayer(index){
                vm.activePlayer = index;
            }

            function activateQuiz(){
                quizMetrics.changeState('quiz', true);
            }
        };
})();