import logo from './logo.svg';
import './App.css';
import Favorites from './components/Favorites'


import axios from 'axios';

function App() {
  return (
    <div className="App">
      <h1>Current Favorite Skincare</h1>
      <Favorites />
     
    </div>
  );
}

export default App;
