import { clsx } from "clsx"
import React from "react"

const Keyboard = () => {
    const [guesses, setGuesses] = React.useState([])

    const [word, setWord] = React.useState("hello")
    const wordList = word.split("")
    const mappedWordList = wordList.map(letter => {
        return (<div className="letter">{letter.toUpperCase()}</div>)
    })

    function updateGuesses(letter) {
        setGuesses(prevGuesses => {
            return (
                prevGuesses.includes(letter) ? prevGuesses : [...prevGuesses, letter]
            )
        })
    }

    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const alphabetList = alphabet.split("")
    const mappedAlphabetList = alphabetList.map(letter => {
        
        const isGuessed = guesses.includes(letter)
        const isCorrect = isGuessed && wordList.includes(letter)
        const isWrong = isGuessed && !wordList.includes(letter)
        const className = clsx({
            correct: isCorrect,
            wrong: isWrong
        })

        return (
            <button
                className={className}
                onClick={() => updateGuesses(letter)}
            >
                {letter.toUpperCase()}
            </button>
        )
    })

    return (
        <>
        <div className="Word">
            {mappedWordList}
        </div>
        <div className="Keyboard">
            {mappedAlphabetList}
        </div>
        </>
    )
}

export default Keyboard