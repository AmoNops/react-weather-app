import react from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Paris" />
        <footer>
          This project was coded by{" "}
          <a href="https://github.com/AmoNops" target="_blank">
            Amogelang Sekhitla
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/AmoNops/react-weather-app"
            target="_blank"
          >
            open sourced on GitHub
          </a>{" "}
          and {" "}
          <a
            href="https://react-weather-app-official.netlify.app/"
            target="_blank"
          >
          hosted on Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
