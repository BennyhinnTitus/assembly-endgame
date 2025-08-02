import './App.css';
import Header from './components/Header'
import Status from './components/Status';
import Languages from './components/Language';
import Keyboard from './components/Keyboard'
import NewGame from './components/NewGame';

function App() {
    return (
        <div className="App">
            <Header />
            <Status />
            <Languages />
            <Keyboard />
            <NewGame />
        </div>
    );
}

export default App;
