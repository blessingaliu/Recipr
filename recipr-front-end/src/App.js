import ShowNav from "./components/Navbar/navbar";
import "./App.css";
import Searchbar from "./components/searchbar/searchbar";

function App() {
    return (
        <div className = "App" >
            <ShowNav />
            <Searchbar />
        </div>
    );
}

export default App;