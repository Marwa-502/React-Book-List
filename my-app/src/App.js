import './App.css';
import React from 'react';
import BookList from './components/Booklist';  
import AddBookForm from './components/AddBookForm';

function App() {
    const books = [
        { id: 1, title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
        { id: 2, title: 'The Kite Runner', author: 'Khaled Hosseini'},
        { id: 3, title: 'A Thousand Splendid Suns', author: 'Khaled Hosseini'},
        { id: 4, title: 'The Hundred Years War on Palestine', author: 'Rashid Khalidi'}
      ];
   
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
