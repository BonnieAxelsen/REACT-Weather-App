import "./styles.css";
import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <input type="search" placeholder="Type a city" />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
