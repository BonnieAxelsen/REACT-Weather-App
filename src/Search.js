import "./styles.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  return (
    <div className="search">
      <form>
        <div className="input-group">
          <div class="input-group">
            <input
              type="search"
              class="form-control"
              placeholder="Search city"
              autocomplete="off"
              autofocus="on"
            />
            <button class="btn">
              {" "}
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
