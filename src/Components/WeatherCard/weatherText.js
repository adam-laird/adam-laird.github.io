import React, { useState } from "react";
import styled from "@emotion/styled/macro";

import { CSSTransition } from "react-transition-group";
import "../Accessories/transition.css";

import WeathercardContainer from "./weatherContainer";

const TextArea = styled.div`
  position: relative;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
`;

const TopBarWeatherText = ({ weather, loading, SearchCity }) => {
  const [enabled, setEnabled] = useState(false);
  var temp = weather.temp;
  var condition = weather.condition;

  const handleClick = () => {
    setEnabled(!enabled);
    console.log(enabled);
  };

  return (
    <>
      <TextArea onClick={() => handleClick()}>
        {temp} °C, {condition}
      </TextArea>
      <CSSTransition in={enabled} timeout={10} classNames="grow" unmountOnExit>
        <WeathercardContainer
          weather={weather}
          SearchCity={SearchCity}
          loading={loading}
        />
      </CSSTransition>
    </>
  );
};

export default TopBarWeatherText;

/*
<div>
      {!enabled ? (
        <TextArea onClick={() => handleClick()}>
          {temp} °C, {condition}
        </TextArea>
      ) : (
        <>
          <TextArea onClick={() => handleClick()}>
            {temp} °C, {condition}
          </TextArea>
          <WeathercardContainer
            weather={weather}
            SearchCity={SearchCity}
            loading={loading}
          />
        </>
      )}
    </div>
*/
