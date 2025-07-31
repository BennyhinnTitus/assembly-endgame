import './App.css';
import Header from './components/Header'
import Status from './components/Status';
import Languages from './components/Language';
import Word from './components/Word';
import Keyboard from './components/Keyboard'
import NewGame from './components/NewGame';

function App() {
    return (
        <div className="App">
            <Header />
            <Status />
            <Languages />
            <Word />
            <Keyboard />
            <NewGame />
        </div>
    );
}

export default App;
