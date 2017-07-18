import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Bookshelf from './Bookshelf'
import * as BooksAPI from '../src/BooksAPI'


class BookLibrary extends Component {
  state = {
    books: []
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
          />
          <Bookshelf
            shelfName="Currently reading"
            books={this.state.books.filter((b) => b.shelf === "currentlyReading")}
           />
          <Bookshelf
            shelfName="Read"
            books={this.state.books.filter((b) => b.shelf === "read")}
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
