import { clsx } from "clsx"
import languages from "../languages"
import getMessage from "../messages"

const Status = (props) => {
    const ClassName = clsx(
        "Status", 
        props.isGameWon ? "green" : "red", 
        !props.isGameOver && "grey", 
        !props.isGameOver && props.isLastGuessWrong && "purple"
    )

    return (
        <div className={ClassName}>
            {props.isGameOver &&
            <>
                <span className="result">{props.isGameWon ? "You Won!" : "You Lost!"}</span>
                <span className="follow-up">{props.isGameWon ? "Well done 🎉" : "Better start learning Assembly 😭"}</span>
            </>
            }
            {!props.isGameOver && props.isLastGuessWrong &&
                <span className="follow-up">{getMessage(languages[props.wrongGuesses - 1].name)}</span>
            }
        </div>
    )
}

export default Status
