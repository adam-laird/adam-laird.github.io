import React, { useState, useEffect } from "react";
import PuppyPhoto from "./PuppyPhoto/PuppyPhoto";

const PuppyEngine = () => {
  var APIkey = "563492ad6f917000010000015540ea62c00045ccab7c66e3dad97150";
  const [photo, setPhoto] = useState({ photo: null, url: null, name: null });

  const newPuppy = () => {
    getPuppy(APIkey);
  };

  const getPuppy = async (APIkey) => {
    let page = Math.floor(Math.random() * 999) + 1;
    try {
      const apiResult = await fetch(
        `https://api.pexels.com/v1/search?query=puppy&per_page=1&page=${page}`,
        { headers: { Authorization: APIkey } }
      );
      const resPuppy = await apiResult.json();
      //console.log(JSON.stringify(resPuppy.photos[0].src));
      setPhoto({
        photo: resPuppy.photos[0].src.medium,
        url: resPuppy.photos[0].url,
        name: resPuppy.photos[0].photographer,
      });
    } catch (error) {
      console.log(error);
      getPuppy(APIkey);
    }
  };

  useEffect(() => {
    getPuppy(APIkey);
  }, [APIkey]);

  return <PuppyPhoto source={photo} newImage={newPuppy}></PuppyPhoto>;
};

export default PuppyEngine;
