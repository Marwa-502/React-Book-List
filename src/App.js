import './App.css';
import BookList from './components/Booklist';
import React, { useEffect, useState } from 'react';
import AddBookForm from './components/AddBookForm';


const MockApiUrl = 'https://655d2efa9f1e1093c5991797.mockapi.io/Marwa/Booklist'// api key is in comments on Canvas

function App() {

    //GET
    const [books, setBooks] = useState([ ]);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(MockApiUrl);
                const data = await response.json();
                setBooks(data);
                console.log(data, "books");
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData()
    }, []);

//POST
    const handleAddBook = async (newBookName) => {
        try {
            const response = await fetch(MockApiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify( newBookName ),
            });

            if (!response.ok) {
                throw new Error('Failed to add book');
            }

            const data = await response.json();
            setBooks([...books, data]);
        } catch (error) {
            console.error('Error adding book:', error);
        }
    };

//DELETE
    const handleDeleteBook = async (bookId) => {
        try {
            const response = await fetch(`${MockApiUrl}/${bookId}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete book');
            }
            setBooks(books.filter((book) => book.id !== bookId));
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    };


    return (
        <div className="App">
            <header className="App-header">
                <h1 className="HarryPotterH1" > Shhh! Its a secret!</h1>
                <p className="HarryPotterP" > "I solemnly swear that i am up to no good" </p>
                <br/>
                <BookList className="BookList" books={books} onDeleteBook={handleDeleteBook} />
                <AddBookForm className="AddBookForm"  onAddBook={handleAddBook} />
            </header>
        </div>
    );
}

export default App;

