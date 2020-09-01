import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

/** NewColorForm
 * 
 * State:
 * - formData: object of form data
 * 
 * Props:
 * - addColor: function to add a new color to ColorList
 */
function NewColorForm({ addColor }) {
  const initialData = {
    name: "",
    colorValue: ""
  }
  const [formData, setFormData] = useState(initialData);
  const history = useHistory();

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    addColor(formData);
    setFormData(initialData);
    console.log("before history")
    history.push("/colors");
    console.log("after history")
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="NewColorForm-name">Name of color:</label>
      <input
        name="name"
        id="NewColorForm-name"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="NewColorForm-colorValue">Color value:</label>
      <input
        type="color"
        name="colorValue"
        id="NewColorForm-colorValue"
        value={formData.colorValue}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  )
}

export default NewColorForm;