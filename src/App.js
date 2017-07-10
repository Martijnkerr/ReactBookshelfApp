import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookSearch from './BookSearch'
import SearchButton from './SearchButton'
import Bookshelf from './Bookshelf'
import Header from './Header'
import BookLibrary from './Booklibrary'

class BooksApp extends React.Component {
  state = {

  }

  render() {
    return (
      <div className="app">
        <Route path="/" component={BookLibrary}>
        <Route path="/search" component={SearchBar}>
      </div>
    )
  }
}

export default BooksApp
