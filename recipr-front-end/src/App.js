import ShowNav from "./components/Navbar/navbar";
import "./App.css";
import ShowSearchbar from "./components/searchbar/searchbar";
import Homepage from "./pages/Home/index";
import AppContext from "./context";

function App() {
  return (
    <AppContext>
      <div className="App">
        <ShowNav />
        <ShowSearchbar />
        <Homepage />
      </div>
    </AppContext>
  );
}

export default App;
