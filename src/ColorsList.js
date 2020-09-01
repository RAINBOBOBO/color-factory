import React, { useState } from 'react';
import { Link } from "react-router-dom";

/** ColorsList
 * 
 * Props:
 * - colors: list of objects of colors like [{name: "red", colorValue: ""}, ...]
 */
function ColorsList({ colors }) {
  function showColorsList() {
    // TODO give unique keys
    return (
      <>
        {colors.map((color, idx) => <li>
          <Link key={idx} to={`/colors/${color.name}`}>
            {color.name}
          </Link>
        </li>)}
      </>
    )
  }

  return (
    <ul>
      {showColorsList()}
    </ul>
  );
}

export default ColorsList;