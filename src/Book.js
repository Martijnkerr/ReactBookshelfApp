import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    bookUpdate: PropTypes.func.isRequired
  }

  render() {
    const { book } = this.props
    const bookCoverStyling = {
        width: 128,
        height: 193,
        backgroundImage: "url("+book.imageLinks.thumbnail+")"
    }

    return (

        <li>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={bookCoverStyling}></div>
              <div className="book-shelf-changer">
                <select value={book.shelf} onChange={(i) => this.props.bookUpdate(book, i.target.value)}>
                  <option value="none" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
          </div>
        </li>
    )
  }
}


export default Book
