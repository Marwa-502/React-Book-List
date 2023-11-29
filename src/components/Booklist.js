import React from 'react';

const BookList = ({ books, onDeleteBook }) => {
    return (
        <div>
            <ul> 
                {books.map((book) => (
                    <li key=  {book.id} >   {book.title}
                        <button className="DeleteButton" onClick={() => onDeleteBook(book.id)} > <strong>  Vanish  </strong> </button>
                    </li>

                ))}
            </ul>
        </div>
    );
};

export default BookList;
