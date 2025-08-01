import React from "react"

const Keyboard = () => {
    const [guesses, setGuesses] = React.useState([])

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
        return (
            <button
                className="buttons"
                onClick={() => updateGuesses(letter)}
            >
                {letter.toUpperCase()}
            </button>
        )
    })

    return (
        <div className="Keyboard">
            {mappedAlphabetList}
        </div>
    )
}

export default Keyboard