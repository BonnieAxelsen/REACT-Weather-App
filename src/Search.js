import "./styles.css";
import React from "react";

export default function Search() {
  return (
    <div className="search">
      <form>
        <input
          type="search"
          class="form-control"
          placeholder="Search city"
          autocomplete="off"
          autofocus="on"
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
