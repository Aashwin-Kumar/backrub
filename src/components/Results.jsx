import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useStateContext } from "../context/Statecontext";
export const Results = () => {
  const { results, getResults, searchTerm } = useStateContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm !== "") {
      if (location.pathname === "/Search") {
        getResults(`/search/q=${searchTerm} Search`);
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=45`);
      }
    }
  }, [searchTerm, location.pathname]);
  switch (location.pathname) {
    case "/search":
      return (
        <div className="sm:px-56 pt-10 flex flex-wrap justify-between space-y-6">
          {results?.results?.map(({ link, title, description }, index) => (
            <div key={index} className="w-full">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-lg hover:underline  text-blue-700  ">
                  {title}
                </p>
                <p className="text-sm  text-gray-700  ">{description}</p>
                <p className="text-sm text-green-700">
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
              </a>
            </div>
          ))}
        </div>
      );

    default:
      return "Error...";
  }
};
