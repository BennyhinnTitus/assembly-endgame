import React from "react"
import { clsx } from "clsx"

const Word = () => {
    const [word, setWord] = React.useState("react")
    const wordList = word.split("")
    const mappedWordList = wordList.map(letter => {
        
        const isGuessed = guesses.includes(letter)
        const isCorrect = isGuessed && wordList.includes(letter)
        const isWrong = isGuessed && !wordList.includes(letter)
        const className = clsx({
            correct: isCorrect,
            wrong: isWrong
        })
        
        return (<div className="letter">{letter.toUpperCase()}</div>)
    })

    return (
        <div className="Word">
            {mappedWordList}
        </div>
    )
}

export default Word
