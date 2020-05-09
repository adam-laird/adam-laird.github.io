import React from "react";
import styled from "@emotion/styled/macro";

import colours from "../Accessories/Theme";

const BackgroundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
`;

const WallpaperIMG = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: absolute;
`;

const InformationText = styled.h6`
  color: black;
  font-size: 0.5rem;
  position: relative;
`;

const RefreshImage = styled.img`
  position: absolute;
  width: 25px;
  height: 25px;
  left: -30px;
  cursor: pointer;
`;

const InfoBox = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 10px;
  right: 10px;
  width: 200px;
  height: 20px;
  border-radius: 15px;
  background: ${colours.containerColor};
  color: black;
`;

const Wallpaper = ({ source, refresh }) => {
  var refreshIcon = `./img/refreshIcon.png`;
  var photoWallpaperLink = (
    <a style={{ color: "black" }} href={source.url}>
      Photo
    </a>
  );
  var pexelsWallpaperLink = (
    <a style={{ color: "black" }} href={"https://www.pexels.com/"}>
      Pexels
    </a>
  );

  console.log(JSON.stringify(source));

  return (
    <BackgroundContainer>
      <WallpaperIMG src={source.photo}></WallpaperIMG>
      <InfoBox>
        <RefreshImage src={refreshIcon} onClick={() => refresh()} />
        <InformationText>
          {photoWallpaperLink} by {source.name} on {pexelsWallpaperLink}
        </InformationText>
      </InfoBox>
    </BackgroundContainer>
  );
};

export default Wallpaper;
