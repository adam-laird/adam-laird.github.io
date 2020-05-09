import React, { useState } from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  position: relative;
  text-align: center;
  width: 180px;
  height: 50px;
  border-style: solid;
  border-color: transparent;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    border-color: grey;
    color: grey;
    transition: border-color ease-in 0.2s, color ease-in 0.2s;
  }
`;
const InputCity = styled.input`

  text-align: center;
  width: 80%;
  margin-top: 5%;
  box-sizing: border-box;
  border-style: solid;
  border-color: transparent;
  border-radius: 10px;
  font-size: 1.2rem;
  background-color: lightblue;
`;
// make into an icon?
const ExitBadge = styled.div`
cursor: pointer;
  background-color: black;
  color: white;
  width: 20px;
  height: 20px;
  line-height: 16px;
  border-radius: 50%;
  vertical-align: top;
  text-align: center;
  float: right;
  margin-top: -45px;
`;
const City = styled.h1`
  font-family: "Merriweather", sans-serif;
  font-size: 1.6rem;
`;
const Country = styled.h3`
  font-family: "Fira Sans", sans-serif;
  font-size: 1.1rem;
`;

const Location = ({city, country, SearchCity}) => {
  const [isOpen, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  

  const handleSearch = (e) => {
    e.preventDefault();
    SearchCity(query);
  };

  return (
    <div>
      {!isOpen ? (
        <Container onClick={() => setOpen(true)}>
          <City>{city}</City>
          <Country>{country}</Country>
        </Container>
      ) : (
        <Container onBlur={() => setOpen(false)}>
          <form>
            <InputCity
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            ></InputCity>
              <button hidden={true} onClick={(e) => handleSearch(e)}>Search</button> 
          </form>
          <ExitBadge onClick={() => setOpen(false)}>x</ExitBadge>
        </Container>
      )}
    </div>
  );
};
//hidden button to allow enter button to search
export default Location;
