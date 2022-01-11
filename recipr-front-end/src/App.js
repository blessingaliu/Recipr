import ShowNav from "./components/Navbar/navbar";
import "./App.css";
import ShowSearchbar from "./components/searchbar/searchbar";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://www.themealdb.com/api/json/v1/1/search.php?f=a'
,
      );
      console.log(result.data)

      setData(result.data);
    };

    fetchData();
  }, []);

    return (
        <div className = "App" >
            <ShowNav />
            <ShowSearchbar />
        </div>
    );
}



export default App;