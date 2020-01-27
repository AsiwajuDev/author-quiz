import React, { Component } from "react";
import AuthorQuiz from "./Component/AuthorQuiz";
import { shuffle, sample } from "underscore";

import "./App.css";

class App extends Component {
  render() {
    const authors = [
      {
        name: "Mark Twain",
        imageUrl: "images/logo192.png",
        imageSource: "Wikimedia Commons",
        books: [
          "The Adventures of Huckleberry Finn",
          "Life on the Missisipi",
          "Roughing it"
        ]
      },
      {
        name: "Mark Twain",
        imageUrl: "images/logo192.png",
        imageSource: "Wikimedia Commons",
        books: [
          "The Adventures of Huckleberry Finn",
          "Life on the Missisipi",
          "Roughing it"
        ]
      },
      {
        name: "Mark Twain",
        imageUrl: "images/logo192.png",
        imageSource: "Wikimedia Commons",
        books: [
          "The Adventures of Huckleberry Finn",
          "Life on the Missisipi",
          "Roughing it"
        ]
      },
      {
        name: "Mark Twain",
        imageUrl: "images/logo192.png",
        imageSource: "Wikimedia Commons",
        books: [
          "The Adventures of Huckleberry Finn",
          "Life on the Missisipi",
          "Roughing it"
        ]
      }
    ];

    const getTurnData = authors => {
      const allBooks = authors.reduce(function(p, c, i) {
        return p.concat(c.books);
      }, []);

      const fourRandomBooks = shuffle(allBooks).slice(0, 4);
      const answer = sample(fourRandomBooks);

      return {
        books: fourRandomBooks,
        authors: authors.find(author =>
          author.books.some(title => title === answer)
        )
      };
    };

    const state = {
      turnData: getTurnData(authors)
    };

    return (
      <div className="App">
        <AuthorQuiz {...state} />
      </div>
    );
  }
}

export default App;
