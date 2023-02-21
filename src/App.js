import "./App.css";
import SearchBar from "./Components/searchBar";
import Header from "./Components/Header";
import Map from "./Components/Map";
import MapTitle from "./Components/MapTitle";
import Weather from "./Components/Weather";
import Login from "./Components/Login";

function App() {
  return (
    <>
      <Header />
      <div className="App-body">
        <div className="search-container">
          {/* <SearchBar labelName="Start Destination" />
          <SearchBar labelName="End Destination" /> */}
        </div>
        <Login />
        {/* <Weather />
        <MapTitle />
        <Map /> */}
      </div>
    </>
  );
}

export default App;
