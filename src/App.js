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
    BooksAPI.update(book, shelf).then(book => {
      this.setState(state => ({
        books: state.books.concat([book])
      }))
    })
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  componentDidUpdate() {
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
          <SearchBar
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
