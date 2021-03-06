(function() {
    angular
        .module('manchesterFacts')
        .factory('quizMetrics', QuizMetrics);

        QuizMetrics.$inject = ['DataService'];

        function QuizMetrics(DataService){
            var quizObj = {
                quizActive: false,
                resultsActive: false,
                changeState: changeState,
                correctAnswers: [],
                gradeQuiz: gradeQuiz,
                numCorrect: 0
            };

            return quizObj;

            function changeState(metric, state){
                if(metric === 'quiz'){
                    quizObj.quizActive = state;
                } else if (metric === 'results'){
                    quizObj.resultsActive = state;
                } else {
                    return false;
                }
                
            }


            function gradeQuiz(){
                quizObj.correctAnswers = DataService.correctAnswers;
                for(var i = 0; i < DataService.quizQuestions.length; i++){
                    if(DataService.quizQuestions[i].selected === DataService.correctAnswers[i]){
                        DataService.quizQuestions[i].correct = true;
                        quizObj.numCorrect++;
                    } else {
                        DataService.quizQuestions[i].correct = false;
                    }
                }
            }
        }
})();