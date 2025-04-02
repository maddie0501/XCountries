import React, { useEffect, useState } from "react";
import axios from "axios";

const Countrylist = () => {
  const [country, setcountry] = useState([]);

  useEffect(() => {
    const fetchcountry = async () => {
      try {
        const res = await axios.get(
          "https://xcountries-backend.azurewebsites.net/all"
        );
        //console.log(res);
        setcountry(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchcountry();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
      }}
    >
      {country.map(({ name, flag, abbr }, index) => (
        <Countrycard name={name} flag={flag} key ={abbr ? abbr + index:index} />   // to avoid wrong re render use key and avoid duplicatets use index
      ))}
    </div>
  );
};

function Countrycard({ name, flag }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "200px",
        width: "200px",
        alignItems: "center",
        borderRadius: "5px",
        border: "1px solid black",
        gap: "5px",
      }}
    >
      <img
        src={flag}
        alt={`Flag of ${name}`}
        style={{ height: "100px", width: "100px" }}
      />
      <h3>{name}</h3>
    </div>
  );
}

export default Countrylist;
