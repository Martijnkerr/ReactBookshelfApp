import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Bookshelf from './Bookshelf'
import * as BooksAPI from '../src/BooksAPI'

class BookLibrary extends Component {
  state = {
    books: []
  }

  updateBook(book, shelf) {
    BooksAPI.update(book, shelf).then(books => {
      // books[currentlyReading].each Book.id
      // Create the array of books from objects in response
      let newBooks = ....
      this.setState({ books: newBooks})
    })
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  render() {
    return (
      <div>
        <div className="list-books">
          <Header />
          <Bookshelf
            shelfName="Want to read"
            books={this.state.books.filter((b) => b.shelf === "wantToRead")}
            updateBookParams={(book, shelf) => {
              this.updateBook(book, shelf)
            }}
          />
          <Bookshelf
            shelfName="Currently reading"
            books={this.state.books.filter((b) => b.shelf === "currentlyReading")}
            updateBookParams={(book, shelf) => {
              this.updateBook(book, shelf)
            }}
           />
          <Bookshelf
            shelfName="Read"
            books={this.state.books.filter((b) => b.shelf === "read")}
            updateBookParams={(book, shelf) => {
              this.updateBook(book, shelf)
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
