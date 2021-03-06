(function(){

    angular
        .module('manchesterFacts')
        .controller('resultsCtrl', ResultsController);

        ResultsController.$inject = ['quizMetrics', 'DataService'];

        function ResultsController(quizMetrics, DataService){
            var vm = this;

            vm.dataService = DataService;
            vm.quizMetrics = quizMetrics;
            vm.getAnswerClass = getAnswerClass;
            vm.setActiveQuestion = setActiveQuestion;
            vm.calculatePercentage = calculatePercentage;
            vm.activeQuestion = 0;

            function calculatePercentage(){
                return quizMetrics.numCorrect / DataService.quizQuestions.length * 100;
            }

            function setActiveQuestion(index){
                vm.activeQuestion = index;
            }

            function getAnswerClass(index){
                if(index === quizMetrics.correctAnswers[vm.activeQuestion]){
                    return "bg-success";
                } else if(index === DataService.quizQuestions[vm.activeQuestion].selected){
                    return "bg-danger";
                }
            }
        }
})();