import React from "react";
import styled from "@emotion/styled/macro";
import { keyframes } from "@emotion/core";

const Change = keyframes`
  0% {
    background-position: 0 50%;
  }
  60% {
    background-position: 100% 50%;
  }
  0% {
    background-position: 0 50%;
  }
`;

const Base = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: -1;
  color: #fff;
  background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
  background-size: 400% 400%;
  animation:${Change} 10s infinite;
  `;

const BaseWallpaper = () => {
    return ( <Base/> );
}
 
export default BaseWallpaper;