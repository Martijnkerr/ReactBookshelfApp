import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookSearch from './BookSearch'
import Bookshelf from './Bookshelf'


class BooksApp extends React.Component {
  state = {

    // Books will come here
    // Query will be here to filter books
  }

  // Methods will come here componentDidMount for example for initializing books and setting them to state Books
  // Search query will also be here

  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <Route exact path="/" component={Bookshelf}/>
            <div className="open-search">
              <Link to="/search"></Link>
            </div>
          </div>
          <Route exact path="/search" component={BookSearch}/>
        </div>
      </div>
    )
  }
}

export default BooksApp
