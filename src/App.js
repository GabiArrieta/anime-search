import { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";

function App() {
  const [list, setList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, SetSearch] = useState("");

  const GetTopAnime = async () => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/top/anime/1/bypopularity`
    ).then((res) => res.json());

    setTopAnime(temp.top.slice(0, 5));
  };

  const HandleSearch = (e) => {
    e.preventDefault();
    FetchAnime(search);
  };

  const FetchAnime = async (query) => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`
    ).then((res) => res.json());

    setList(temp.results);
  };

  useEffect(() => {
    GetTopAnime();
  }, []);

  return (
    <div className="App">
      <Header />

      <div className="content-wrap">
        <Sidebar topAnime={topAnime} />

        <Searchbar
          HandleSearch={HandleSearch}
          SetSearch={SetSearch}
          search={search}
          list={list}
        />
      </div>
    </div>
  );
}

export default App;
