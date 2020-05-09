import React from "react";
import styled from "@emotion/styled";

import Icon from "./icon";
import moment from "moment-timezone";

const TimeText = styled.h2`
  font-size: 1.5rem;
`;

const HourCard = styled.div`
  margin: 0 auto;
  margin-left: 10px;
  margin-right: 0px;
  width: 160px;
  height: 240px;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  justify-content: space-around;
  align-items: center;
  border-radius: 15px;
  color: black;
`;
const HourlyCard = ({ timezone, firstHour }) => {
  var unixTime = firstHour.dt * 1000;
  var tempTime = moment.tz(unixTime, timezone);
  var time = tempTime.format("HH : mm");
  var condition = firstHour.weather[0].main;
  var description = firstHour.weather[0].description;
  var temp = firstHour.temp.toFixed(1);
  var realFeel = firstHour.feels_like.toFixed(1);
  var windSpeed = firstHour.wind_speed.toFixed(0);
  var cloudCover = firstHour.clouds;
  return (
    <HourCard>
      <TimeText>{time}</TimeText>
      <Icon condition={condition} />
      <h4>{description}</h4>
      <h4>Temp: {temp}</h4>
      <h4>Realfeel: {realFeel}</h4>
      <h4>Wind speed: {windSpeed} m/s</h4>
      <h4>Cloud cover: {cloudCover}%</h4>
    </HourCard>
  );
};

export default HourlyCard;
