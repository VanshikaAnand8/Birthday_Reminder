import React, { useState } from "react";

function Birthday() {
  // state to store the user's name
  const [name, setName] = useState("");

  // state to store the birthday message
  const [message, setMessage] = useState("");

  // function to handle the input change
  const handleChange = (e) => {
    setName(e.target.value);
  };

  // function to handle the button click
  const handleClick = () => {
    // generate a random birthday message
    const messages = [
      `Happy birthday, ${name}! You are awesome! 🎉`,
      `Wishing you a wonderful birthday, ${name}! You rock! 🎈`,
      `Have a great birthday, ${name}! You are amazing! 🎁`,
      `Cheers to your birthday, ${name}! You are fabulous! 🥂`,
      `Enjoy your special day, ${name}! You are wonderful! 🍰`,
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];

    // set the message state
    setMessage(randomMessage);
  };

  return (
    <div className="birthday">
      <h1>Birthday Wishes</h1>
      <p>Enter your name and click the button to get a birthday message.</p>
      <input type="text" value={name} onChange={handleChange} />
      <button onClick={handleClick}>Get Birthday Message</button>
      <p>{message}</p>
    </div>
  );
}

export default Birthday;
