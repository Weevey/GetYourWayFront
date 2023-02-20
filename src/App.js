import logo from './logo.svg';
import './App.css';
import NavigationBar from './Components/NavigationBar';
import SearchBar from './Components/searchBar';
import Header from './Components/Header';

import Weather from './Components/Weather';


function App() {
  return (
    <div >
      <Header />
      <SearchBar />
      
      <div className="App-header">
              <Weather/>
      </div>
    </div>
  );
}

export default App;
