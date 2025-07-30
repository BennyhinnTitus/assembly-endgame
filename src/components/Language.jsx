import languages from "../languages"

const Languages = () => {
    const mappedLanguages = languages.map(language => {
        const styles = {
            backgroundColor: language.backgroundColor,
            color: language.color
        }
        return <div className="languages" style={styles}>{language.name}</div>
    })

    return (
        <div className="Languages">
            {mappedLanguages}
        </div>
    )
}

export default Languages
