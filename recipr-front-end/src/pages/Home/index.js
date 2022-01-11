import { useState, useEffect } from 'react';
import axios from 'axios';

function Homepage() {
    const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://www.themealdb.com/api/json/v1/1/search.php?f=a',
      );
      console.log(result.data)

      setData(result.data);
    };

    fetchData();
  }, []);
}

export default Homepage
