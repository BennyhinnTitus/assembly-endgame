const Keyboard = () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const alphabetList = alphabet.split("")
    const mappedAlphabetList = alphabetList.map(letter => {
        return <button className="buttons">{letter.toUpperCase()}</button>
    })

    return (
        <div className="Keyboard">
            {mappedAlphabetList}
        </div>
    )
}

export default Keyboard