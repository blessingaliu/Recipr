import "./App.css";
import ShowSearchbar from "./components/searchbar/searchbar";
import Homepage from "./pages/Home/index";
import AppContext from "./context";
import ShowNav from "./components/Navbar/navbar";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <AppContext>
        <ShowNav />
        <Switch>
        <Route exact path="/">
        <ShowSearchbar />
          <Homepage />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exactpath="/login">
          <Login />
        </Route>
        
        {/* <Route exactpath="/error">
          <Error />
        </Route> */}
        </Switch>
      </AppContext>
    </Router>
  );
}

export default App;
