import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from '../src/BooksAPI'
import PropTypes from 'prop-types'

class Search extends Component {

  state = {
    query: '',
    books: []
  }

  static PropTypes = {
    onUpdateBook: PropTypes.func.isRequired
  }

  setCorrectBookShelf = (books) => {
    const correctlySetBooks = books.map(book => {
      let booksWithoutUserBooks = books.filter(userBook => {
        return book.id === userBook.id;
      })
      let correctShelf = booksWithoutUserBooks.length & booksWithoutUserBooks[0].shelf
      if (correctShelf) {
        return {...book, ...{shelf: correctShelf}}
      } else {
        return book
      }
    })
    return correctlySetBooks
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
    BooksAPI.search(this.state.query).then((books) => {
      if(typeof books !== 'undefined') {
        let results = this.setCorrectBookShelf(books);
        console.log(results)
        this.setState({ books: results })
      }
    })
  }

  render() {

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
            {typeof this.state.books !== 'undefined' && (
              this.state.books.map((book) =>
                <Book
                key={book.id}
                book={book}
                onUpdateBook={(book, shelf) => {
                  this.props.onUpdateBook(book, shelf)
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


export default Search
