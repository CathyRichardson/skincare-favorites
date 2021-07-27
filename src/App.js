import logo from './logo.svg';
import './App.css';
import Favorites from './components/Favorites'


function App() {
  return (
    <div className="App">
      <header>
        <h1>Current Favorite Skincare</h1>
      </header>
      <Favorites />
    </div>
  );
}

export default App;