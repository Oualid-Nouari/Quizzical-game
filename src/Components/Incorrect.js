import { useState } from "react";

const Incorrect = (props) => {
    const [isClicked, setIsClicked] = useState(false)
    const clickAnswer =() => {
        setIsClicked(!isClicked)
    }
    return <span id={(isClicked && props.checked) ? 'false' : ''} style={{backgroundColor: isClicked ? '#D6DBF5' : '', color: isClicked ? "black" : ''}} onClick={clickAnswer}>{props.answer}</span>
}

export default Incorrect;