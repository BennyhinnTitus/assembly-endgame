const NewGame = (props) => {
    return (
        <div className="NewGame">
            <button ref={props.ref} className="new-game-button">New Game</button>
        </div>
    )
}

export default NewGame