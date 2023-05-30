import React, { useState, useEffect } from "react";
import "./Geolocation.css";

function GeolocationTracker() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(true);
  const apiKey = "6XnuPVjPxij9vyXktaXYrUSx7XEH30B0";

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;

          const response = await fetch(
            `https://www.mapquestapi.com/geocoding/v1/reverse?key=${apiKey}&location=${latitude},${longitude}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch location data.");
          }

          const data = await response.json();
          const { adminArea5: city, adminArea1: country } =
            data.results[0].locations[0];
          setCity(city);
          setCountry(country);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);

  return (
    <div className="location">
      <h4>Your current location:</h4>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>
          {city && country ? (
            <div className="text">
              {" "}
              {city} ,{country}
            </div>
          ) : (
            <div className="text">Location data not available.</div>
          )}
        </p>
      )}
    </div>
  );
}

export default GeolocationTracker;
