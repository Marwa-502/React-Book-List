import React, { useState } from 'react';


function AddBookForm({onAddBook}){
    const [newBookName, setNewBookName] = useState('');


  const handleInput = (e) => {
    setNewBookName(e.target.value);
    // note: e.target.value is saying whatever the user typed in the input field is going to be stored inside setNewBookName
    // note: so whats happening here is we're updating the function that allows the current state to be updated to the new book 
    // note: this makes it re-render
  };

  const handleSubmit = (e) => {//button click
    e.preventDefault(); // stops the page from refreshing

    if (newBookName.trim()) {
        //trim is checking making sure the user types something in and is not an empty string.
        //when user clicks the button, without .trim, i get Error: newBookName is not a function
        //when user clicks the button without typing anything in the iput, with .trim, i get Error: Cannot read properties of undefined (reading 'trim')
      onAddBook({ title: newBookName }); // prop in app.js
      setNewBookName('');//clearing input after re-render
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={newBookName} onChange={handleInput} />
      <button type="submit">Add your own book</button>
    </form>
  );
};

export default AddBookForm

