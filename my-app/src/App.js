import './App.css';
import BookList from './components/Booklist';  
import React, { useState } from 'react';
import AddBookForm from './components/AddBookForm';

function App (){
    const [books, setBooks] = useState([ // note: the first array is the current state and the second is the function that allows me to update the current state 
        { id: 1, title: 'Book 1'},
        { id: 2, title: 'Book 2'}, 
        { id: 3, title: 'Book 3'},
      ]);


  const handleAddBook = (newBookName) => {
    setBooks([...books, {...newBookName }]); //resource : https://react.dev/learn/updating-arrays-in-state
    //so here i have to create a new object array so thats why im using {}
    //im creating a new array from the original by using the spread.
    //so setBooks is taking the original list of books and adding whatever the user input was.
    //i have tpo use the spread in {...newBookName} otherwise the users input will not show up.
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1> Our Secret Bookshelf </h1>
        <p>Welcome to our secret book shelf!</p>
        <BookList books={books} />
        <AddBookForm onAddBook={handleAddBook} />
      </header>
    </div>
  );
}

export default App;

