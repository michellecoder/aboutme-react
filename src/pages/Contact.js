import React, { useState } from 'react';

function Contact() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    return name === 'Name' ? setName(value) : setEmail(value);
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name
    alert(`Hello ${Name} at ${Email}`);
    //clear the inputs, reset state values back to empty
    setName('');
    setEmail('');
  };

  return (
    <div>
      <p>
        Hello {Name} at {Email}
      </p>
      <form className="form">
        <input
          value={Name}
          name="Name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={Email}
          name="Email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email Address"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
