import React from "react";
import AnimeCard from "./AnimeCard";

const Searchbar = ({ HandleSearch, SetSearch, search, list }) => {
  return (
    <main>
      <div className="main-head">
        <form className="search-box" onSubmit={HandleSearch}>
          <input
            type="search"
            placeholder="buscar anime"
            required
            value={search}
            onChange={(e) => SetSearch(e.target.value)}
          />
        </form>
      </div>
      <div className="anime-list">
        {list.map((anime) => (
          <AnimeCard anime={anime} key={anime.mal_id} />
        ))}
      </div>
    </main>
  );
};

export default Searchbar;
