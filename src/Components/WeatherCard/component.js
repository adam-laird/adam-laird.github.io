import React from "react";
import styled from "@emotion/styled";

import Location from "./location";
import Icon from "./icon";
import Conditions from "./conditions";
import Spinner from "../Accessories/Spinner";

const WeatherCard = ({
  city,
  country,
  temp,
  condition,
  description,
  SearchCity,
  loading,
}) => {
  let highColor = 0;
  let lowColor = 0;
  let bg = null;
  if (temp > 12) {
    // hot weather
    highColor = (1 - (temp - 12) / 28) * 255;
    lowColor = highColor - 150;
    bg = `linear-gradient(
      to top,
      rgb(255, ${highColor}, 0),
      rgb(255, ${lowColor}, 0)
    )`;
  } else if (temp <= 12) {
    // cold weather
    highColor = (1 - (temp + 20) / 32) * 255;
    lowColor = highColor + 150;
    bg = `linear-gradient(
      to bottom,
      rgb(0, ${highColor}, 255),
      rgb(0, ${lowColor}, 255)
    )`;
  }

  const Card = styled.div`
    margin: 0 auto;
    margin-left: 5px;
    margin-right: 0px;
    background: ${bg};
    width: 200px;
    height: 240px;
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    flex-shrink: 0;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
  `;

  return (
    <div>
      {" "}
      {!loading ? (
        <Card>
          <Location city={city} country={country} SearchCity={SearchCity} />
          <Icon condition={condition} />
          <Conditions
            temp={temp}
            condition={condition}
            description={description}
          />
        </Card>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default WeatherCard;
