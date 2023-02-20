import axios from 'axios';
import City from './City';
import { useEffect, useState } from 'react';
import './App.css';
function App() {
  const key = "84a91b51124f2bc14e2104a40efa11c9";
  const [search, setSearch] = useState("");
  const [city, setCity] = useState();
  useEffect(() => {
    async function getApi(){
      try{
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
        console.log(response);
        setCity(response.data);
      }catch{console.error();
      }
    }
    getApi();
  }, [search]);
  console.log(search);
  return (
<div className="App">
      <div>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="City"
        />
        {city && <City city={city} />}
      </div>
    </div>
  );
}

export default App;
