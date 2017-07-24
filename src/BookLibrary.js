import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Bookshelf from './Bookshelf'


class BookLibrary extends Component {
  render() {
    return (
      <div>
        <div className="list-books">
          <Header />
          <Bookshelf
            shelfName="Currently Reading"
            books={this.props.currentlyReadingBooks}
            onUpdateBook={(book, shelf) => {
              this.props.updateBookParams(book, shelf)
            }}
          />
          <Bookshelf
            shelfName="Want to Read"
            books={this.props.wantToReadBooks}
            onUpdateBook={(book, shelf) => {
              this.props.updateBookParams(book, shelf)
            }}
           />
          <Bookshelf
            shelfName="Read"
            books={this.props.readBooks}
            onUpdateBook={(book, shelf) => {
              this.props.updateBookParams(book, shelf)
            }}
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
