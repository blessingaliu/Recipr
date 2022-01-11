import ShowNav from "./components/Navbar/navbar";
import "./App.css";
import ShowSearchbar from "./components/searchbar/searchbar";
import Homepage from "./pages/Home/index";

function App() {

    return (
        <div className = "App" >
            <ShowNav />
            <ShowSearchbar />
            <Homepage />
        </div>
    );
}



export default App;