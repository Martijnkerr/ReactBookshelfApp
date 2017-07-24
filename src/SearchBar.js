import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class SearchBar extends Component {
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search"></Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {this.props.books.map((book) =>
            <Book
            key={book.id}
            book={book}
            onUpdateBook={(book, shelf) => {
              this.props.onUpdateBook(book, shelf)
            }}
            />
          )}
          </ol>
        </div>
      </div>
    )
  }
}


export default SearchBar
