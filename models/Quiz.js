import { Question } from "./Question.js"

export class Quiz{

    questionsIndex = 0
    score = 0

    /**
     * 
     * @param {Question[]} questions 
     */

    constructor(questions){
        this.questions = questions
    }
    /**
     * 
     * @returns {Question} retorna la pregunra encontrada
     */

    getQuestionIndex(){
        return this.questions[this.questionsIndex]
    }
    isEnded(){
        return this.questions.length === this.questionsIndex
    }
    /**
     * 
     * @param {string} answer 
     */
    quess(answer){
        if(this.getQuestionIndex().correctAnswer(answer)){
        this.score++
    }
    this.questionsIndex++
}
}
