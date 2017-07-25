import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import SearchBar from './SearchBar'
import BookLibrary from './BookLibrary'
import * as BooksAPI from '../src/BooksAPI'

class BooksApp extends React.Component {
  state = {
    books: []
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
            books={this.state.books}
            onUpdateBook={(book, shelf) => {
              this.updateBook(book, shelf)
            }}
          />
        )} />
        <Route path="/search" render={() => (
          <SearchBar />
        )} />
      </div>
    )
  }
}

export default BooksApp
