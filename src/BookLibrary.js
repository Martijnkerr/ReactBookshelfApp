import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

class BookLibrary extends Component {
  render() {
    return (
      <div className="list-books">
        <Header />
      </div>
    )
  }
}

export default BookLibrary
