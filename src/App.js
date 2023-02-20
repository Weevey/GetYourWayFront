import logo from './logo.svg';
import './App.css';
import NavigationBar from './Components/NavigationBar';
import SearchBar from './Components/searchBar';
import Header from './Components/Header';
import Map from './Components/Map';
import MapTitle from './Components/MapTitle';


function App() {
  return (

    <>
      <Header />
      <div className="App-header">
        <SearchBar />
        <MapTitle />
        <Map />
      </div>
    </>
  );
}

export default App;
