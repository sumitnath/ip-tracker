import { useState } from "react";
import "./header.css";

// leaflet
import { MapContainer, TileLayer, Marker } from "react-leaflet";

const Header = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="header-container">
        <h1>IP Address Tracker</h1>
        <form className="input-container" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search for IP address"
            className="search-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" className="input-arrow">
            <i
              className="fa-solid fa-angle-right fa-xl"
              style={{ color: "#fff" }}
            ></i>
          </button>
        </form>

        <div className="data-container">
          <div className="address data-container-items">
            <p className="data-title">ip address</p>
            <p className="data">123456</p>
          </div>

          <div className="location data-container-items">
            <p className="data-title">location</p>
            <p className="data">City,region, country</p>
          </div>

          <div className="timezone data-container-items">
            <p className="data-title">timezone</p>
            <p className="data">UTC time</p>
          </div>

          <div className="isp data-container-items">
            <p className="data-title">isp</p>
            <p className="data">location</p>
          </div>
        </div>
      </section>
      <div style={{ backgroundColor: "gray", height: "100%" }}>
        Map goes here
      </div>
    </>
  );
};

export default Header;
