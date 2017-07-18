import React, { Component } from 'react'
import Book from './Book'
import * as BooksAPI from '../src/BooksAPI'



class Bookshelf extends Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }



  render() {
    let booksForShelf
    if (this.props.shelfName === "Want to read") {
      booksForShelf = this.state.books.filter((book) => book.shelf === "wantToRead")
    } else if (this.props.shelfName === "Currently Reading") {
      booksForShelf = this.state.books.filter((book) => book.shelf === "currentlyReading")
    } else {
      booksForShelf = this.state.books.filter((book) => book.shelf === "read")
    }
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.shelfName}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {booksForShelf.map(function(book, index){
                return (
                  <Book
                    key={book.id}
                    book={book}
                  />
                )
              })}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}


export default Bookshelf
