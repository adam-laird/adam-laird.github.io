import React, { useState } from "react";
import styled from "@emotion/styled/macro";

import colours from "../Accessories/Theme";

const BackgroundPhotoContainer = styled.div`
  margin: 20px;
  bottom: 0px;
  left: 0px;
  position: absolute;
  background: ${colours.containerColor};
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  border-color: ${colours.containerColor};
  border-width: 0px;
  border-style: solid;
  transition: 0.6s;
`;

const InformationText = styled.h6`
  color: black;
  font-size: 8px;
`;

const RefreshImage = styled.img`
  position: absolute;
  width: 25px;
  height: 25px;
  top: 5px;
  left: 5px;
  cursor: pointer;
`;

const ImgThmb = styled.img`
  width: 240px;
  height: 260px;
  border-radius: 15px;
  padding-top: 5px;
  padding-bottom: 1px;
  object-fit: cover;
  display: block;
  margin: 0px;
  top: 0px;
`;

const PuppyPhoto = ({ source, newImage }) => {
  const [photoExpanded, setPhotoExpanded] = useState(false);

  const expandPhotoFunction = () => {
    setPhotoExpanded(!photoExpanded);
  };

  var refreshIcon = `./img/refreshIcon.png`;

  var photoLink = (
    <a style={{ color: "black" }} href={source.url}>
      Photo
    </a>
  );
  var pexelsLink = (
    <a style={{ color: "black" }} href={"https://www.pexels.com/"}>
      Pexels
    </a>
  );

  return (
    <BackgroundPhotoContainer
      style={{ height: !photoExpanded ? "270px" : "280px" }}
    >
      {!photoExpanded ? (
        <ImgThmb src={source.photo} onClick={() => expandPhotoFunction()} />
      ) : (
        <>
          <ImgThmb src={source.photo} onClick={() => expandPhotoFunction()} />
          <InformationText>
            {photoLink} by {source.name} on {pexelsLink}
          </InformationText>
        </>
      )}
      <RefreshImage src={refreshIcon} onClick={newImage}></RefreshImage>
    </BackgroundPhotoContainer>
  );
};

export default PuppyPhoto;
