import './App.css';
import BookList from './components/Booklist';
import React, { useEffect, useState } from 'react';
import AddBookForm from './components/AddBookForm';


const MockApiUrl = // api key is in comments on Canvas

function App() {

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
                <h1> Our Secret Bookshelf </h1>
                <p>Welcome to our secret book shelf!</p>
                <BookList books={books} onDeleteBook={handleDeleteBook} />
                <AddBookForm onAddBook={handleAddBook} />
            </header>
        </div>
    );
}

export default App;

