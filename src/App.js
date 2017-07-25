import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Search from './Search'
import BookLibrary from './BookLibrary'
import * as BooksAPI from '../src/BooksAPI'


class BooksApp extends React.Component {
  state = {
    books: [],
    search: ''
  }

  updateBook(book, shelf) {
    BooksAPI.update(book, shelf)
    const newBooks = this.state.books.forEach(function(b) {
      return (b.id === book.id) ? book.shelf = shelf : null;
    })
    this.setState({ newBooks })
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }


  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookLibrary
            onUpdateBook={(book, shelf) => {
              this.updateBook(book, shelf)
              }}
            currentlyReadingBooks={this.state.books.filter((b) => b.shelf === "currentlyReading")}
            wantToReadBooks={this.state.books.filter((b) => b.shelf === "wantToRead")}
            readBooks={this.state.books.filter((b) => b.shelf === "read")}
           />
        )} />
        <Route path="/search" render={() => (
          <Search
            books={this.state.books}
            onUpdateBook={(book, shelf) => {
              this.updateBook(book, shelf)
              }}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
