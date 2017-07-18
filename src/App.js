import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import SearchBar from './SearchBar'
import BookLibrary from './BookLibrary'


class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookLibrary

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
