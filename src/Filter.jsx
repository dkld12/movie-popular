import React, { useContext, useEffect } from "react";
import { Mycontext } from "./context/AppContext";

function Filter() {
  const { setActivegenere, setFilter, activeGenere, data } =
    useContext(Mycontext);

  useEffect(() => {
    if (activeGenere === 0) {
      setFilter(data);
      return;
    }
    const filtered = data.filter((movie) =>
      movie.genre_ids.includes(activeGenere)
    );
    setFilter(filtered);
  }, [activeGenere]);
  return (
    <div className="flex flex-wrap justify-center ml-2 pt-2 pb-2 space-x-2">
      <button
        onClick={() => setActivegenere(0)}
        className="rounded-md bg-white text-black p-2 mt-5"
      >
        All
      </button>
      <button
        onClick={() => setActivegenere(35)}
        className="rounded-md bg-white text-black p-2 mt-5"
      >
        Comedy
      </button>
      <button
        onClick={() => setActivegenere(28)}
        className="rounded-md bg-white text-black p-2 mt-5"
      >
        Action
      </button>
      <button
        onClick={() => setActivegenere(12)}
        className="rounded-md bg-white text-black p-2 mt-5"
      >
        Adventure
      </button>
      <button
        onClick={() => setActivegenere(53)}
        className="rounded-md bg-white text-black p-2 mt-5"
      >
        Thriller
      </button>
      <button
        onClick={() => setActivegenere(10752)}
        className="rounded-md bg-white text-black p-2 mt-5"
      >
        War
      </button>
      <button
        onClick={() => setActivegenere(9648)}
        className="rounded-md bg-white text-black p-2 mt-5"
      >
        Mystrey
      </button>
    </div>
  );
}

export default Filter;
