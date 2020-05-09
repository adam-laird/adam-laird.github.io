import React from "react";
import styled from "@emotion/styled";

const Icon = ({ condition }) => {
  var icon = "";
  switch (condition) {
    case "Clouds":
      icon = `./img/mostly Cloudy-2x.png`;
      break;
    case "Clear":
      icon = `./img/mostly Sunny-2x.png`;
      break;
    case "Haze":
      icon = `./img/haze-2x.png`;
      break;
    case "Hail":
      icon = `./img/hail-2x.png`;
      break;
    case "Fog":
      icon = `./img/fog-2x.png`;
      break;
    case "Tornado":
      icon = `./img/tornado-2x.png`;
      break;
    case "Dust":
      icon = `./img/dust-2x.png`;
      break;
    case "Mist":
      icon = `./img/fog-2x.png`;
      break;
    case "Snow":
      icon = `./img/snow-2x.png`;
      break;
    case "Rain":
      icon = `./img/rain-2x.png`;
      break;
    case "Drizzle":
      icon = `./img/drizzle-2x.png`;
      break;
    case "Thunderstorm":
      icon = `./img/severe thunderstorm-2x.png`;
      break;
    default:
      icon = `./img/fog-2x.png`;
      break;
  }

  const Icon = styled.img`
    width: 40%;
  `;

  return <Icon src={icon} alt="Weather Icon" />;
};

export default Icon;
