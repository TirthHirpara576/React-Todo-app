// L47 :- Controlled vs uncontrolled components (hooks -> useState folder -> Controlled.jsx)
import { useState } from "react";

export const ControlledForm = () => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Uncontrolled way :- 
    // Handle form submission with the controlled state (name)
    // const dataValue = document.querySelector("#inputName").value;
    // console.log(dataValue);

    console.log(name); // This is a controlled way.(using hooks)
  };

  return (
    <section className="container state-container">
      <h1>Controlled Component</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            id="inputName"
            name="name"
            type="text"
            value={name}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit" className="state-button">
          Submit
        </button>
      </form>
    </section>
  );
};