//Objeto Questions
export class Question{

    /**
     * 
     * @param {string} text texto de la pregunta
     * @param {string[]} choices opciones de la pregunta
     * @param {string} answer la respuesta de la pregunta
     */

    constructor(text,choices,answer){
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
    /**
     * 
     * @param {string} choise Texto a adivinar
     * @returns {booLean} Retorna true si la respuesta es correcta
     */

    correctAnswer(){
        return choice === this.answer;
    }
}


