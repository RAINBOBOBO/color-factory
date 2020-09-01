import React from 'react';
import { useParams, Link } from "react-router-dom";

/** Color
 * Props:
 * - colors: array of objects of colors like [{name: "red", colorValue: ""}, ...]
 */
function Color({ colors }) {
  const { color } = useParams();
  const selectedColor = colors.find(c => c.name === color);
  console.log("this is selectedColor", selectedColor, "and colors:", colors);
  const style = {
    backgroundColor: selectedColor.colorValue
  };

  return (
    <div className="Color" style={style}>
      <h1>THIS IS {selectedColor.name}.</h1>
      <h1>ISN'T IT BEAUTIFUL?</h1>
      <Link to="/colors">GO BACK</Link>
    </div>
  );
}

export default Color;