import React, { useState, useEffect } from "react";
import APOD from "./APOD/APOD";

const APODEngine = () => {
  var APIkey = "JONKqHY7Uyoo0HqQBfrzdYIi0P1rfhTgio2YoHX6";
  const [source, setSource] = useState("");
  const [alt, setAlt] = useState("");

  const getAPOD = async (APIkey) => {
    try {
      const apiResult = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${APIkey}`
      );
      const apiAlt = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${APIkey}&date=2017-07-20`
      );
      const resAPOD = await apiResult.json();
      const resALT = await apiAlt.json();
      setSource(resAPOD);
      setAlt(resALT);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAPOD(APIkey);
  }, [APIkey]);

  return <APOD srcURL={source} alt={alt}></APOD>;
};

export default APODEngine;
