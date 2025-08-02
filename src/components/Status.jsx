import { clsx } from "clsx"

const Status = (props) => {
    const ClassName = clsx("Status", props.isGameWon ? "green" : "red", !props.isGameOver && "grey")

    return (
        <div className={ClassName}>
            {props.isGameOver && 
            <>
                <span className="result">{props.isGameWon ? "You Won!" : "You Lost!"}</span>
                <span className="follow-up">{props.isGameWon ? "Well done 🎉" : "Better start learning Assembly 😭"}</span>
            </>
            }
        </div>
    )
}

export default Status
