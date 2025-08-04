import React from "react"
import clsx from "clsx"
import languages from "../languages"
import Status from "./Status"
import getWord from "../words"
import Confetti from "react-confetti";
import { useWindowSize } from "react-use"

const Keyboard = () => {
    const [guesses, setGuesses] = React.useState([])
    const [word, setWord] = React.useState(() => getWord())
    const wordList = word.split("")

    const wrongGuesses = guesses.filter(letter => {
        return !wordList.includes(letter)
    }).length

    const lastGuess = guesses[guesses.length - 1];
    const isLastGuessWrong = lastGuess && !wordList.includes(lastGuess);

    const isGameWon = wordList.every(letter => guesses.includes(letter))
    const isGameLost = wrongGuesses >= languages.length - 1
    const isGameOver = isGameWon || isGameLost

    const mappedWordList = wordList.map(letter => {
        const shouldReveal = isGameLost || guesses.includes(letter)
        const className = clsx(
            "letter",
            isGameLost && !guesses.includes(letter) && "incorrect"
        )
        return (<div className={className}>{shouldReveal ? letter.toUpperCase() : ""}</div>)
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
                disabled={isGameOver}
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

    function resetGame() {
        setGuesses([])
        setWord(getWord())
    }
    
    const { height, width } = useWindowSize()

    return (
        <>
        {isGameWon && <Confetti height={height} width={width}/>}
        <Status 
            isGameWon={isGameWon} 
            isGameOver={isGameOver}
            isLastGuessWrong={isLastGuessWrong}
            wrongGuesses={wrongGuesses}
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
        {isGameOver && <div className="NewGame">
            <button onClick={resetGame} ref={autoScroll} className="new-game-button">New Game</button>
        </div>}
        </>
    )
}

export default Keyboard
