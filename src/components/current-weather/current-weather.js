import "./current-weather.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`}></img>
      </div>
      <div className="bottom">
        <p className="temperature">{data.temp}</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">{Math.round(data.main.feels_like)}°</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed}</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidité</span>
            <span className="parameter-value">{data.main.humidity}</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pression</span>
            <span className="parameter-value">{data.main.pressure}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
