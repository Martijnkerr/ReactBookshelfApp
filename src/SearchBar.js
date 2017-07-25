import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from '../src/BooksAPI'

class SearchBar extends Component {

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })

    BooksAPI.search(this.state.query).then((books) => {
      this.setState({ books })
    })
  }

  componentDidMount() {
    BooksAPI.search('Travel').then((books) => {
      this.setState({ books })
    })
  }

  onUpdateBook(book, shelf) {
    BooksAPI.update(book, shelf)
    const newBooks = this.state.books.forEach(function(b) {
      return (b.id === book.id) ? book.shelf = shelf : null;
    })
    this.setState({ newBooks })
  }

  render() {

    const { books } = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search"></Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {typeof books !== 'undefined' && (
              books.map((book) =>
                <Book
                key={book.id}
                book={book}
                onUpdateBook={(book, shelf) => {
                  this.onUpdateBook(book, shelf)
                }}
                />
              )
            )}
          </ol>
        </div>
      </div>
    )
  }
}


export default SearchBar
