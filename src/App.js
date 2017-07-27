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

    if (this.isBookInState(book)){
      // Book is already in shelf so update
      BooksAPI.update(book, shelf)
      // Change state -> not with .then() because it returns ID's
      this.setState(prevState => {
        let books = prevState.books.map(b => {
          if (b.id !== book.id) {
            return b;
          } else {
            return {...b, ...{shelf}}
          }
        })
        return {...prevState, ...{books}};
      })

    } else {
      // Book is not in shelf yet so add
      this.setState(prevState => {
        let newBook = {...book, ...{shelf}};
        console.log(newBook)
        let books = prevState.books.concat(newBook)
        return {...prevState, ...{books}};
      })
    }

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
