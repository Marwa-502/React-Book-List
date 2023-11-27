import './App.css';
import BookList from './components/Booklist';  
import AddBookForm from './components/AddBookForm';
import React, { useState } from 'react';

function App (){
    const [books, setBooks] = useState([ // note: the first array is the current state and the second is the function that allows me to update the current state 
        { id: 1, title: 'Book 1', author: 'A' },
        { id: 2, title: 'Book 2', author: 'B' }, 
        { id: 3, title: 'Book 3', author: 'C' },
      ]);

  return (
    <div className="App">
      <header className="App-header">
        <h1> Our Secret Bookshelf </h1>
        <p>Welcome to our secret book shelf!</p>
        <BookList books={books} />
        <AddBookForm/>
      </header>
    </div>
  );
}

export default App;


// Step 4: Managing State
// Now, you need to make the list of books be dynamic instead of a static list of pre-defined books. 
// Introduce a state in your App component to keep track of the list of books. 
// You need a way for users to add new books! Add a new child component in App that will allow user input, called AddBookForm.
// Implement the AddBookForm component using a React form.