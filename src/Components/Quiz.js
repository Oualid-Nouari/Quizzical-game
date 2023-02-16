import { useState } from "react";
import { v4 as uuid } from 'uuid';
import Correct from "./Correct";
import Incorrect from "./Incorrect";

const Quiz = (props) => {
    const [answers, setAnswers] = useState(allAnswers())
    function allAnswers() {
        const arrOfAns = []
        arrOfAns.push(props.answers.map((answer) => {return {answer: answer, id: uuid()}}))
        return arrOfAns
    }
    return (
        <div className="quiz-ele">
            <h2>{props.question}</h2>
            <div className="answers-container">
            {answers.map((answer) => {
                return answer.map((an) => {
                    if (an.answer === props.correct_answer) {
                        return <Correct checked={props.checked} id={an.id} answer={an.answer} key={an.id} />
                    } else {
                        return <Incorrect checked={props.checked} answer={an.answer} id={an.id} key={an.id} />
                    }
                })
    })}
            </div>
        </div>
    )
}

export default Quiz;