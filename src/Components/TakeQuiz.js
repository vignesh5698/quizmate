import React, { Component } from 'react';

class TakeQuiz extends Component {
    
    constructor(props){
        super(props);
        this.state = { 
            question: [],
            correctAnswer: [],
            incorrectAnswer: {}
         }
    }

    componentDidMount(){
        const url = 'https://opentdb.com/api.php?amount=10&category=18';
        fetch(url)
        .then((rawResponse) => {
            const response=rawResponse.json()
            return response
        })
        .then(data => {
            const results = data.results
            results.map((result, index) => {
                let incorrectAnswer = JSON.parse(JSON.stringify(this.state.incorrectAnswer))
                incorrectAnswer[index] = result.incorrect_answers
                this.setState({
                    question: [...this.state.question, result.question],
                    incorrectAnswer: incorrectAnswer,
                    correctAnswer: [...this.state.correctAnswer, result.correct_answer]
                })
            })
        })    
        .catch( (error) => {
            console.log(error);
        });   
    }
    render() {        
        return ( 
            <div>
                {this.state.question.map((ques, key) => {
                    return <p>{key+1}.{ques}</p>
                })}
            </div>
         );
    }
}
 
export default TakeQuiz;