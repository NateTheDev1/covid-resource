import React from "react";

const OtherCountries = (props) => {
  return (
    <div style={{ marginBottom: "3%" }}>
      <h2>
        {props.country.Country}:{" "}
        <span style={{ color: "red" }}>{props.country.NewConfirmed}</span>
      </h2>
    </div>
  );
};

export default OtherCountries;
