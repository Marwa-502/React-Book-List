import React from 'react';

const BookList = ({ books, onDeleteBook }) => {
    return (
        <div>
            <h2>Book List</h2>
            <ul>
                {books.map((book) => (
                    <li key=  {book.id} >   {book.title}
                        <button onClick={() => onDeleteBook(book.id)} style={{ color: 'red' }}> <strong> X </strong> </button>
                    </li>

                ))}
            </ul>
        </div>
    );
};

export default BookList;
