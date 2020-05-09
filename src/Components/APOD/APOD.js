import React, { useState } from "react";
import styled from "@emotion/styled/macro";

import { CSSTransition } from "react-transition-group";
import "../Accessories/transition.css";

import colours from "../Accessories/Theme";

const TextContainer = styled.div`
  position: relative;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
`;

const BackgroundContainer = styled.div`
  margin: 20px;
  padding: 0px;
  position: fixed;
  top: 10vh;
  right: 0px;
  background: ${colours.containerColor};
  border-radius: 15px;
  border-color: ${colours.containerColor};
  border-width: 5px;
  border-style: solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.6s;
`;

const BackgroundImg = styled.img`
  position: relative;
  max-width: 70vw;
  max-height: 70vh;
  border-radius: 15px;
  padding-left: 00px;
  padding-right: 0px;
  padding-top: 0px;
  padding-bottom: 5px;
  object-fit: cover;
`;

const ImageDescription = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  margin-right: 5px;
  padding: 10px;
  max-width: 80%;
  color: black;
  opacity: 0;
  top: 5vh;
  transition: opacity 0.7s ease;
  text-align: center;
`;

const ImageTitle = styled.div`
  font-size: 1.5rem;
  color: black;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 5px;
  padding-top: 0px;
  font-style: italic;
  position: relative;
  align-self: center;
  cursor: pointer;
  &:hover {
    color: "#202020";
  }
  &:hover + ${ImageDescription} {
    opacity: 1;
  }
`;

const APOD = ({ srcURL, alt }) => {
  const [isExpanded, setExpanded] = useState(false);

  const expandFunction = () => {
    setExpanded(!isExpanded);
  };

  var image = srcURL.hdurl;
  var title = srcURL.title;
  var description = srcURL.explanation;

  if (srcURL.media_type !== "image") {
    image = alt.hdurl;
    title = alt.title;
    description = alt.explanation;
  }
  return (
    <>
      <TextContainer onClick={() => expandFunction()}>NASA Photo</TextContainer>
      <CSSTransition
        in={isExpanded}
        timeout={10}
        classNames="grow"
        unmountOnExit
      >
        <BackgroundContainer
          onClick={() => expandFunction()}
          onMouseLeave={() => expandFunction()}
        >
          <BackgroundImg src={image}></BackgroundImg>
          <ImageTitle>{title}</ImageTitle>
          <ImageDescription>{description}</ImageDescription>
        </BackgroundContainer>
      </CSSTransition>
    </>
  );
};

export default APOD;

/*
<>
  <TextContainer onClick={() => expandFunction()}>NASA Photo</TextContainer>
  {!isExpanded ? null : (
    <BackgroundContainer
      onClick={() => expandFunction()}
      onMouseLeave={() => expandFunction()}
    >
      <BackgroundImg src={image}></BackgroundImg>
      <ImageTitle>{title}</ImageTitle>
      <ImageDescription>{description}</ImageDescription>
    </BackgroundContainer>
  )}
</>;

*/
