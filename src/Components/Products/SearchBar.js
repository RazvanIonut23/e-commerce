import React, { useEffect, useState } from "react";
import s from "./Sumbenue.module.css";
import searchIcon from "../../images/search.svg";

const SearchBar = (props) => {
  const [search, setSearch] = useState("");

  const handleChange = () => {
    let aux = [];
    props.filter.filter((item) => {
      if (item.title.toLowerCase().includes(search)) aux.push(item);
    });
    if (aux.length > 0) props.setFilter(aux);
  };

  useEffect(() => {
    if (search === "") props.setFilter(props.products);
  }, [search]);

  return (
    <div>
      <div className={s.searchInput}>
        <label htmlFor="search" className={s.searchIcon}>
          <img src={searchIcon} alt="" />
        </label>
        <input
          id="search"
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              handleChange();
            }
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
