import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

import { useStateContext } from "../context/Statecontext";

export const Searcher = () => {
  const { setSearchTerm } = useStateContext();
  const [text, setText] = useState("songs");
  const [debounceValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debounceValue) setSearchTerm(debounceValue);
  }, [debounceValue]);
  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <input
        value={text}
        type="text"
        className="sm:w-96 w-72 h-10  border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
        placeholder="type URL"
        onChange={(e) => setText(e.target.value)}
      />
      {text !== '' && (
        <button type="button" className="absolute top-1.5 right-4 text-2xl text-gray-500 " onClick={() => setText('')}>
          x
        </button>
      )}
      
    </div>
  );
};