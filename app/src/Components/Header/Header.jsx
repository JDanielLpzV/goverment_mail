import React from "react";
import "./Header.css";
import SearchBar from "../SearchBar/SearchBar";
import Categories from "../Categories/Categories";

export default function Header({ selectedMode }) {
  return (
    <div id="main" className="container">
      <SearchBar />
      <div className="fs-4">{selectedMode}</div>
      <Categories />
    </div>
  );
}
