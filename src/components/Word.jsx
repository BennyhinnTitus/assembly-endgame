import React from "react"

const Word = () => {
    const [word, setWord] = React.useState("react")
    const wordList = word.split("")
    const mappedWordList = wordList.map(letter => {
        return <div className="letter">{letter.toUpperCase()}</div>
    })

    return (
        <div className="Word">
            {mappedWordList}
        </div>
    )
}

export default Word
