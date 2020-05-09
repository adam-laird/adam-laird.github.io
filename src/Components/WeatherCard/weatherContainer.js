import React, { useState } from "react";
import styled from "@emotion/styled";

import colours from "../Accessories/Theme";

import WeatherCard from "./component";
import HourlyCard from "./hourCard";

const WeatherCardContainer = styled.div`
  margin: 20px;
  position: absolute;
  top: 10vh;
  left: 0px;
  background: ${colours.containerColor};
  width: 240px;
  height: 250px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 15px;
  overflow: hidden;
  transition: 0.6s;
`;

const ExpandArrow = styled.h4`
  cursor: pointer;
  margin-left: 0;
  margin-right: 0;
  width: 30px;
  text-align: center;
  flex-grow: 0;
  flex-shrink: 0;
  color: black;
`;

const WeathercardContainer = ({ weather, SearchCity, loading }) => {
  const [isPanelOpen, setPanelOpen] = useState(false);

  const collapseFunction = () => {
    setPanelOpen(!isPanelOpen);
  };

  return (
    <WeatherCardContainer style={{ width: !isPanelOpen ? "240px" : "750px" }}>
      <WeatherCard
        city={weather.city}
        country={weather.country}
        temp={weather.temp}
        condition={weather.condition}
        description={weather.description}
        SearchCity={SearchCity}
        loading={loading}
      />
      {!isPanelOpen ? (
        <ExpandArrow onClick={() => collapseFunction()}>></ExpandArrow>
      ) : (
        <>
          <ExpandArrow onClick={() => collapseFunction()}>&#60;</ExpandArrow>
          <HourlyCard
            timezone={weather.timezone}
            firstHour={weather.firstHour}
          />{" "}
          <HourlyCard
            timezone={weather.timezone}
            firstHour={weather.secondHour}
          />
          <HourlyCard
            timezone={weather.timezone}
            firstHour={weather.thirdHour}
          />
        </>
      )}
    </WeatherCardContainer>
  );
};

export default WeathercardContainer;
