import './App.css';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Preview from './components/Preview/Preview';

import useWeather from './components/Hooks/useWeather';

function App() {

  useWeather();

  return (
    <div className="App">
        <Header />
        <Preview />
        <Card />
    </div>
  );
}

export default App;
