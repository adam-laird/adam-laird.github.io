import React from "react";
import styled from "@emotion/styled";

import WallpaperEngine from "../Components/WallpaperEngine";
import PuppyEngine from "../Components/PuppyEngine";
import TopBar from "./Topbar/TopBar";

const Container = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const MainContainer = ({ defaultLocation }) => {
  return (
    <Container>
      <WallpaperEngine />
      <TopBar defaultLocation={defaultLocation} />
      <PuppyEngine />
    </Container>
  );
};

export default MainContainer;
