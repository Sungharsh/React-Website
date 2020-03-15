import React, {useState} from 'react';
import './displayAPI.css';

const DisplayAPI = () => {
    const [books, setBooks] = useState(null);
    const APIUrl= 'https://www.anapioficeandfire.com/api/books?pageSize=30'

    const getBooks = () => {
        fetch(APIUrl)
        .then(resp => resp.json())
        .then(data => {
            // console.log(data)
            setBooks(data)
        })
    }
    return (
        <div className="columns">
            <div className="column">
        <h1 className="is-size-3">Game of Thrones Books</h1>
        <p>Click button below to fetch a list of Books from an API and display below</p>
        
        <button className="button is-primary is-light is-outlined is-rounded btn" onClick={getBooks}>GetData</button>
        <br /><br /><br /><br />
        {books && books.map((book, index) => {
             const authors = book.authors.join(', ');
             const cleanDate = new Date(book.released).toDateString();

            return( //explict return
            <div className="book" key={index}>
            <h3>{book.name}</h3>
            <div className="details" >
                <p><span role="img" aria-label="author icon">👨</span>: {book.authors} </p>
                <p><span role="img" aria-label="pages icon">📖</span>: {book.numberOfPages}</p>
                <p><span role="img" aria-label="location icon">🏘️</span>: {authors}</p>
                <p><span role="img" aria-label="date icon">⏰</span>: {cleanDate} </p>
            </div>

            </div>
        )}
        )}
        </div>
        </div>
     );
}
 
export default DisplayAPI;