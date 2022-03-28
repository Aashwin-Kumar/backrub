import React, { createContext, useContext, useState } from "react";
const StateContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";
export const Statecontext = ({ children }) => {
  const [results, setResults] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (url) => {
    const res = await fetch(`${baseUrl}${url}`, {
      method: "GET",
      headers: {
        "X-User-Agent": "desktop",
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
        "X-RapidAPI-Key": "fd67d3b9f6mshec317eaa662ae5ap1eecebjsncdf766c90481",
      },
    });
    const data = await res.json();
    setResults(data);
  };

  return (
    <StateContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
