import React, { useState, useEffect } from "react";
import Wallpaper from "./Wallpaper/Wallpaper";
import BaseWallpaper from "./Wallpaper/Base";

const WallpaperEngine = () => {
  var APIkey = "563492ad6f917000010000015540ea62c00045ccab7c66e3dad97150";
  const [background, setBackground] = useState({
    photo: null,
    url: null,
    name: null,
  });
  const [loading, setLoading] = useState(false);

  const newWallpaper = () => {
    getWallpaper(APIkey);
  };

  const getWallpaper = async (APIkey) => {
    setLoading(true);
    let page = Math.floor(Math.random() * 999) + 1;
    try {
      const apiResult = await fetch(
        `https://api.pexels.com/v1/search?query=landscape&per_page=1&page=${page}`,
        { headers: { Authorization: APIkey } }
      );
      const resWallpaper = await apiResult.json();
      //console.log(JSON.stringify(resWallpaper.photos[0]));
      let width = resWallpaper.photos[0].width;
      let height = resWallpaper.photos[0].height;
      let landscape = width > height * 1.4 ? true : false;
      if (width < 1000 || height < 1000 || !landscape) {
        let errorCode = new Error();
        errorCode.message = "too small";
        throw errorCode;
      }
      setBackground({
        photo: resWallpaper.photos[0].src.large2x,
        url: resWallpaper.photos[0].url,
        name: resWallpaper.photos[0].photographer,
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      getWallpaper(APIkey);
    }
  };

  useEffect(() => {
    getWallpaper(APIkey);
  }, [APIkey]);

  return (
    <>
      {!loading ? (
        <Wallpaper source={background} refresh={newWallpaper}></Wallpaper>
      ) : (
        <BaseWallpaper />
      )}
    </>
  );
};

export default WallpaperEngine;
