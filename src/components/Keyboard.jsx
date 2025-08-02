import React from "react"
import clsx from "clsx"
import languages from "../languages"
import NewGame from "./NewGame"
import Status from "./Status"

const Keyboard = () => {
    const [guesses, setGuesses] = React.useState([])
    const [word, setWord] = React.useState("react")
    const wordList = word.split("")

    const wrongGuesses = guesses.filter(letter => {
        return !wordList.includes(letter)
    }).length

    const isGameWon = wordList.every(letter => guesses.includes(letter))
    const isGameLost = wrongGuesses >= languages.length - 1
    const isGameOver = isGameWon || isGameLost

    const mappedWordList = wordList.map(letter => {
        return (<div className="letter">{guesses.includes(letter) ? letter.toUpperCase() : ""}</div>)
    })

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

    function updateGuesses(letter) {
        setGuesses(prevGuesses => {
            return (
                prevGuesses.includes(letter) ? prevGuesses : [...prevGuesses, letter]
            )
        })
    }

    const mappedLanguages = languages.map((language, index) => {
        const styles = {
            backgroundColor: language.backgroundColor,
            color: language.color
        }
        const className = clsx({
            lost: index < wrongGuesses
        })
        return <div className={className} style={styles}>{language.name}</div>
    })

    const autoScroll = React.useRef(null)

    React.useEffect(() => {
        isGameOver && autoScroll.current.scrollIntoView({
            behavior: "smooth"
        })
    }, [isGameOver])

    return (
        <>
        <Status 
            isGameWon={isGameWon} 
            isGameOver={isGameOver} 
        />
        <div className="Languages">
            {mappedLanguages}
        </div>
        <div className="Word">
            {mappedWordList}
        </div>
        <div className="Keyboard">
            {mappedAlphabetList}
        </div>
        {isGameOver && <NewGame ref={autoScroll}/>}
        </>
    )
}

export default Keyboard
