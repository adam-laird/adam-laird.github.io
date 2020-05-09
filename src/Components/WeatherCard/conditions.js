import React from "react";
import styled from "@emotion/styled";

const Conditions = ({ temp, description }) => {
  const Temp = styled.h1`
    font-family: "Fira Sans", sans-serif;
    font-size: 2rem;
    font-weight: 200;
  `;

  const Description = styled.h3`
    font-family: "Merriweather", sans-serif;
    font-size: 1.2rem;
    white-space: nowrap;
  `;

  return (
    <>
      <Description>{description}</Description>
      <Temp>{temp} °C</Temp>
    </>
  );
};

export default Conditions;
