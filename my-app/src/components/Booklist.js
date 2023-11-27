import React from 'react';

// so here i moved the list to Apps.js and passed it into here using props. 
const BookList = ({books}) => { //note to self, props are objects so it has to be in a {} 
    return (
        <div>
          <h2>Book List</h2>
          <ul>
            {books.map((book) => ( 
              <li key={book.id}>{book.title} by: {book.author}</li>
            ))}
          </ul>
        </div>
      );
    };

export default BookList;
