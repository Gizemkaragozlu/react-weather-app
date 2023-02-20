
import React from "react";

const City = ({ city }) => {
  console.log(city);
  return (
    <div>
      <div className="w-[350px] rounded-md shadow mx-auto">
        <h1 className="city-temp">{city.main.temp} °C</h1>
        <h1 className="city-name">{city.name}</h1>
        <h1 className="city-main">{city.weather[0].main}</h1>
      </div>
    </div>
  );
};

export default City;