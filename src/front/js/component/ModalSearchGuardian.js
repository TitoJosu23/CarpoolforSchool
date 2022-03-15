import React, { useState } from "react";
import "../../styles/modal.css";

export const ModalSearchGuardian = () => {
  const [opened, setOpened] = useState(false);
  return opened ? (
    <div className="modal-card">
      <div>
        <h4>Search a Guardian</h4>
      </div>
      <div>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-bs-toggle="dropdown"
            aria-expanded="flase"
          >
            Schools
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu">
            <li>
              <input className="dropdown-checkbox" type="checkbox" />
              <label>School 1</label>
            </li>
            <li>
              <input className="dropdown-checkbox" type="checkbox" />
              <label>School 2</label>
            </li>
            <li>
              <input className="dropdown-checkbox" type="checkbox" />
              <label>School 3</label>
            </li>
          </ul>
        </div>
      </div>
      <div className="center-side">
        <button
          className="btn btn-secondary dropdown-toggle filters"
          type="button"
          id="dropdownMenu2"
          data-bs-toggle="dropdown"
          aria-expanded="flase"
        >
          Filters
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu">
          <li>
            <input className="dropdown-checkbox" type="checkbox" />
            <label>Grade 1</label>
          </li>
          <li>
            <input className="dropdown-checkbox" type="checkbox" />
            <label>Grade 2</label>
          </li>
          <li>
            <input className="dropdown-checkbox" type="checkbox" />
            <label>Grade 3</label>
          </li>
          <li>
            <input className="dropdown-checkbox" type="checkbox" />
            <label>Grade 4</label>
          </li>
          <li>
            <input className="dropdown-checkbox" type="checkbox" />
            <label>Grade 5</label>
          </li>
          <li>
            <input className="dropdown-checkbox" type="checkbox" />
            <label>Grade 6</label>
          </li>
          <li>
            <input className="dropdown-checkbox" type="checkbox" />
            <label>Grade 7</label>
          </li>
          <li>
            <input className="dropdown-checkbox" type="checkbox" />
            <label>Grade 8</label>
          </li>
          <li>
            <input className="dropdown-checkbox" type="checkbox" />
            <label>Grade 9</label>
          </li>
          <li>
            <input className="dropdown-checkbox" type="checkbox" />
            <label>Grade 10</label>
          </li>
          <li>
            <input className="dropdown-checkbox" type="checkbox" />
            <label>Grade 11</label>
          </li>
          <li>
            <input className="dropdown-checkbox" type="checkbox" />
            <label>Grade 12</label>
          </li>
        </ul>

        <input type="search" id="site-search" name=" " />
        <button className="button">Search</button>
      </div>
      <div>
        <button
          className="button button2"
          type="button"
          onClick={() => setOpened(false)}
        >
          Close
        </button>
      </div>
    </div>
  ) : (
    <button
      className="open-button"
      type="button"
      onClick={() => setOpened(true)}
    >
      Open
    </button>
  );
};
