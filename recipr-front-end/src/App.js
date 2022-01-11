import ShowNav from "./components/Navbar/navbar";
import "./App.css";
import ShowSearchbar from "./components/searchbar/searchbar";

function App() {
    return (
        <div className = "App" >
            <ShowNav />
            <ShowSearchbar />
        </div>
    );
}

export default App;