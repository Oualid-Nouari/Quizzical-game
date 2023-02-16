import { useState } from "react";
import Quiz from "./Components/Quiz";
import { v4 as uuid } from 'uuid';
import './App.css'
const Quezzical = () => {
    const [startQuiz, setStartQuiz] = useState(false)
    const [questions, setQuestions] = useState(allQuestions())
    const [checked, SetChecked] = useState(false)
        function allQuestions() {
            const arrOfQues = []
            fetch('https://opentdb.com/api.php?amount=6').then(res => res.json()).then((data) => {
                return data.results.map((ques) => {
                    return arrOfQues.push({
                        id: uuid(),
                        question: ques.question, 
                        correct_answer: ques.correct_answer, 
                        answers: [...ques.incorrect_answers],
                    });
                })
            })
            return arrOfQues;
        }
        questions.map((ques) => {
            const random = Math.floor(Math.random() * ques.answers.length)
            return ques.answers.splice(random, 0, ques.correct_answer)
        })
    const checkAnswer = () => {
        SetChecked(true)
    }
    const playAgain = () => {
        window.location.reload()
    }
    return (
        <div className="body">
          <header>
            <h2>Quizzical Game</h2>
          </header>
            {startQuiz ? 
            <div className="quiz">
                    <div className="qst-cnt">
                      {questions.map((question) => {
                          return <Quiz checked={checked} key={question.id} id={question.id} correct_answer={question.correct_answer} 
                          answers={question.answers} question={question.question} />
                      })}
                    </div>
                    <div className="check-container">
                        <button onClick={checked ? playAgain : checkAnswer} className="check-answers">{checked ? 'Play Again' : 'Check Answer'}</button>
                    </div>
            </div> :
            <div className="first-p-container">
                <h1>Quezzical</h1>
                <p>Play, And Enjoy</p>
                <button onClick={() => setStartQuiz(true)} className="start-quiz">Start Quiz</button>
            </div>
        }
        
        </div>
    )
}

export default Quezzical;
