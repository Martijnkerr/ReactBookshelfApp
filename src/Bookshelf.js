import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types';

class Bookshelf extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired
  }

  render() {
    const { books } = this.props
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.shelfName}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
            {books.map((book) =>
              <Book
              key={book.id}
              book={book}
              bookUpdate={(book, shelf) => {
                this.props.onUpdateBook(book, shelf)
              }}
              />
            )}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}


export default Bookshelf
