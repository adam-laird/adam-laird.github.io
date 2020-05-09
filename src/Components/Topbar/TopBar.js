import React from "react";
import styled from "@emotion/styled/macro";
import moment from "moment";

import WeatherEngine from "../../Components/WeatherEngine";
import APODEngine from "../../Components/APODEngine";

const TopPanel = styled.div`
  position: relative;
  width: 100vw;
  height: 10vh;
  margin-top: 0px;
  padding: 5px;
  padding-left: 2%;
  padding-right: 2%;
  background: rgba(32, 32, 32, 0.8);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DateText = styled.div`
  font-size: 2rem;
`;

const TopBar = ({ defaultLocation }) => {
  var currentDate = moment().format("dddd Do MMMM YYYY");

  return (
    <TopPanel>
      <WeatherEngine defaultLocation={defaultLocation} />
      <DateText>{currentDate}</DateText>
      <APODEngine />
    </TopPanel>
  );
};

export default TopBar;
