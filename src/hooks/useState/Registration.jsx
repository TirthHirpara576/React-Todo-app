/*  L48 :- Registration Form Using Multiple State Variables (Bad way) (hooks -> useState folder -> Registration.jsx , index.css)

 - Set up a functional component in React.
 - Create five separate state variables (firstName, lastName, email, password, phoneNumber).
 - Create input fields for each piece of information.
 - Implement onChange handlers to update state variables.
 - Discuss the benefits and drawbacks of this approach.
 

import "./index.css";
import { useState } from "react";

export const RegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target; // Form-field na 2 attributes ne destructure karela chhe.

    switch (name) {
      case "firstName":
        setFirstName(value);
        break;

      case "lastName":
        setLastName(value);
        break;

      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      case "phone":
        setPhoneNumber(value);
        break;
    }
  };

  const handleFormSubmit = (event) => { // Jyare entire form submit thai --> make a object of all the data & display the object. 
    event.preventDefault(); // Form bydefualt submit na thavu joiye...
    const formData = {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
    };

    console.log(formData);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>

          <label htmlFor="firstName">
            <b>First Name</b>
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter firstName"
            required
            value={firstName}
            onChange={handleInputChange}
          />

          <label htmlFor="lastName">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter lastName"
            required
            value={lastName}
            onChange={handleInputChange}
          />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            required
            value={email}
            onChange={handleInputChange}
          />

          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            required
            value={password}
            onChange={handleInputChange}
          />

          <label htmlFor="phone">
            <b>Phone Number</b>
          </label>

          <input
            type="phone"
            name="phone"
            placeholder="9876543211"
            required
            value={phoneNumber}
            onChange={handleInputChange}
          />

          <p>
            By creating an account you agree to our
            <a href="#" style={{ color: "dodgerblue" }}>
              Terms & Privacy
            </a>
          </p>

          <div className="clearfix">
            <button type="submit" className="btn">
              Sign Up
            </button>
          </div>
        </div>
      </form>

      <section
        className="summary"
        style={{ textAlign: "center", marginTop: "30px" }}
      >
        <p>
          Hello, my name is
          <span>
            {firstName} {lastName}
          </span>
          . My email address is <span>{email}</span> and my phone number is
          <span>{phoneNumber}</span>.
        </p>
      </section>
    </>
  );
};    */





/* L49 :- Registration Form Using Object State with Spread Operator (Good way) (hooks -> useState folder -> Registration.jsx , index.css)

 - Refactor the registration form to use a single object (formData) as the initial state.
 - Update input fields to use object properties.
 - Use the spread operator to update the form data state efficiently.
 - Discuss the benefits of using object state over multiple state variables.
*/

import "./index.css";
import { useState } from "react";

export const RegistrationForm = () => {
    const [user, setUser] = useState({ // Now, user = Object
        // make sure, state variable name must be same as "name" attribute.
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target; // Form-field na 2 attributes ne destructure karela chhe.
        setUser((prev) => ({ ...prev, [name]: value })); // Prev data hata te to tem-ne-tem j rahe, but updated fields j khali change thavi joiye... 
        // (for that use --> [name]:value --> [] shows dynamically data update thai)
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(user);
    };

    return (
      <>
        <form onSubmit={handleFormSubmit}>
          <div className="container">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>

            <label htmlFor="firstName">
                <b>First Name</b>
            </label>
            <input
                type="text"
                name="firstName"
                placeholder="Enter firstName"
                required
                value={user.firstName}
                onChange={handleInputChange}
            />

            <label htmlFor="lastName">
                <b>Last Name</b>
            </label>
            <input
                type="text"
                name="lastName"
                placeholder="Enter lastName"
                required
                value={user.lastName}
                onChange={handleInputChange}
            />

            <label htmlFor="email">
                <b>Email</b>
            </label>
            <input
                type="text"
                placeholder="Enter Email"
                name="email"
                required
                value={user.email}
                onChange={handleInputChange}
            />

            <label htmlFor="password">
                <b>Password</b>
            </label>
            <input
                type="password"
                placeholder="Enter Password"
                name="password"
                required
                value={user.password}
                onChange={handleInputChange}
            />

            <label htmlFor="phone">
                <b>Phone Number</b>
            </label>

            <input
                type="phone"
                name="phoneNumber"
                placeholder="9876543211"
                required
                value={user.phoneNumber}
                onChange={handleInputChange}
            />

            <p>
                By creating an account you agree to our
                <a href="#" style={{ color: "dodgerblue" }}>
                Terms & Privacy
                </a>
            </p>

            <div className="clearfix">
                <button type="submit" className="btn">
                Sign Up
                </button>
            </div>
          </div>
        </form>

        <section className="summary" style={{ textAlign: "center", marginTop: "30px" }}>
            <p>
              Hello, my name is
              <span>
                  {user.firstName} {user.lastName}
              </span>
              . My email address is <span>{user.email}</span> and my phone number is
              <span>{user.phoneNumber}</span>.
            </p>
        </section>
      </>
    );
};