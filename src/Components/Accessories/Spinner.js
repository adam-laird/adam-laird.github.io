import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

const Spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const TextOpacity = keyframes`
0%{opacity: 1}
25%, 75% {opacity: 0.5}
50%{opacity: 0.1}
`;

const SpinnerContainer = styled.div`
  margin: 0 auto;
  margin-left: 10px;
  margin-right: 0px;
  width: 200px;
  height: 240px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpinnerText = styled.h4`
  animation: ${TextOpacity} ease 2.5s infinite;
`;

const SpinnerWheel = styled.div`
  border: 8px solid #f3f3f3;
  border-radius: 50%;
  border-top: 8px solid #3498db;
  width: 90px;
  height: 90px;
  position: absolute;
  -webkit-animation: ${Spin} 2s linear infinite; /* Safari */
  animation: ${Spin} 2s linear infinite;
`;

const Spinner = () => {
  return (
    <SpinnerContainer>
      <SpinnerText>Loading</SpinnerText>
      <SpinnerWheel></SpinnerWheel>
    </SpinnerContainer>
  );
};

export default Spinner;
