import React, { useState } from 'react';

function Contact() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Message, setMessage] = useState('');
  const [ErrorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'Name') {
      setName(value);
    }
    else if (name === 'Email') {
      setEmail(value);
    }
    else if (name === 'Message') {
      setMessage(value);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing default page refresh
    e.preventDefault();

    alert(`Form submitted`);

    if (!{Message}) {
      setErrorMessage(`You must enter a message above.`);
    }
    //clear fields
    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
  };

  return (
    <div>
      <div>
        <form className="form">
          <div class="formRow">
          <input
            id="nameField"
            value={Name}
            name="Name"
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
          />
          <input
          id="emailField"
            value={Email}
            name="Email"
            onChange={handleInputChange}
            type="email"
            required="true"
            pattern="/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/"
            placeholder="Email Address"
          />
          </div>
          <textarea
            id='messageField'
            value={Message}
            name="Message"
            onChange={handleInputChange}
            placeholder="Message"
          />
          <button type="button" id="contactFormButton" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
        <label name="ErrorMessage" value={ErrorMessage} />         
      </div>
    </div>
  );
}

export default Contact;
