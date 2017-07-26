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

  // Check if book is new one or already on my shelfs
  isBookInState(book) {
    for (let i = 0; i < this.state.books.length; i++) {
      if (this.state.books[i].id === book.id) {
        return true
      }
    }
    return false
  }


  updateBook(book, shelf) {
    let newBooks = []
    // If book is already on shelf, I just need to update current book
    if(this.isBookInState(book)) {
      BooksAPI.update(book, shelf)
      newBooks = this.state.books.forEach(function(b) {
        return (b.id === book.id) ? book.shelf = shelf : null;
      })
      // If its a new one I need to add the object to the state
    } else {
      newBooks = this.state.books.push(book)
    }
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
