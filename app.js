//@ts-check
import { questions } from "./data/questions.js";
import { Quiz } from "./models/Quiz.js";

function main(){
    const quiz = new Quiz(questions);

    quiz.guess('Pregunta4')
    console.log(quiz);

    console.log(quiz);

    console.log(
        quiz.getQuestionIndex()
    )
}
main()
//console.log(questions[0].correctAnswer('Pregunta'));