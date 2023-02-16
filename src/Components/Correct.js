import { useState } from "react"
const Correct = (props) => {
    const [isClicked, setIsClicked] = useState(false)
    const clickAnswer =() => {
        setIsClicked(!isClicked)
    }
    return <span id={(props.checked) ? 'true' : ''} style={{backgroundColor: isClicked ? '#D6DBF5' : '', color: isClicked ? "black" : ''}} onClick={clickAnswer}>{props.answer}</span>
}

export default Correct