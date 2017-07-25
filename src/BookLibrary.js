import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Bookshelf from './Bookshelf'
import PropTypes from 'prop-types'

class BookLibrary extends Component {

  static PropTypes = {
    books: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired
  }

  render() {
    return (
      <div>
        <div className="list-books">
          <Header />
          <Bookshelf
            shelfName="Want to read"
            books={this.props.books.filter((b) => b.shelf === "wantToRead")}
            onUpdateBook={(book, shelf) => {
              this.props.onUpdateBook(book, shelf)
            }}
          />
          <Bookshelf
            shelfName="Currently reading"
            books={this.props.books.filter((b) => b.shelf === "currentlyReading")}
            onUpdateBook={(book, shelf) => {
              this.props.onUpdateBook(book, shelf)
            }}
           />
          <Bookshelf
            shelfName="Read"
            books={this.props.books.filter((b) => b.shelf === "read")}
            onUpdateBook={(book, shelf) => {
              this.props.onUpdateBook(book, shelf)
            }}
           />
          <div className="open-search">
            <Link to="/search" />
          </div>
        </div>
      </div>
    )
  }
}

export default BookLibrary
