import React from "react";

function Navbar() {
  return (
    <nav>
      <input id="menu-toggle" type="checkbox" />
      <label class="menu-button-container" for="menu-toggle">
        <div class="menu-button"></div>
      </label>
      <ul className="menu">
        <li>
          <a href="#" title="OVERVIEW">
            OVERVIEW
          </a>
        </li>

        <li>
          <a href="#" title="FEATURES">
            FEATURES
          </a>
        </li>

        <li>
          <a href="#" title="TECHNOLOGY">
            TECHNOLOGY
          </a>
        </li>

        <li>
          <a href="#" title="CONTACT">
            CONTACT
          </a>
        </li>

        <li>
          <a href="#" title="Sign up">
            Sign up
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
