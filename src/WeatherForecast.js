import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="01d" size={36}/>
          <div className="WeatherForecast-temperature">
            5°C
            <span WeatherForecast-temperature-max>29°</span>
            <span WeatherForecast-temperature-min>15°</span>
          </div>
        </div>
      </div>
    </div>
  );
}