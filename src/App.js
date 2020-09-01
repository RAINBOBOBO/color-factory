import React, { useState } from 'react';
import './App.css';
import './ColorsList';
import ColorsList from './ColorsList';
import Color from './Color';
import NewColorForm from './NewColorForm';
import { BrowserRouter, Route, Switch, Redirect, NavLink } from "react-router-dom";

/** App
 * 
 * State:
 * - colorList: array of objects of colors like [{name: "red", colorValue: ""}, ...]
 */
function App({ initialColors }) {
  const [colorList, setColorList] = useState(initialColors)

  function addColor(formData) {
    setColorList([...colorList, formData]);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavLink to="/colors/new">Add a color</NavLink>
        <NavLink to="/colors">Home</NavLink>
        <Switch>
          <Route exact path="/colors">
            <ColorsList colors={colorList}/>
          </Route>
          <Route exact path="/colors/new">
            <NewColorForm addColor={addColor}/>
          </Route>
          <Route exact path="/colors/:color">
            <Color colors={colorList}/>
          </Route>
          <Redirect to="/colors" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

App.defaultProps = {
  initialColors: [
    {
      name: "red",
      colorValue: "rgb(255, 0, 0)"
    },
    {
      name: "green",
      colorValue: "rgb(60, 179, 113)"
    },
    {
      name: "blue",
      colorValue: "rgb(0, 0, 255)"
    }
  ]
}

export default App;
