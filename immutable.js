import {Map} from 'immutable';

// Immutable.js provides persistent immutable data structures, which means that when you modify a data structure, it returns a new version of the data structure without modifying the original one.

let book = Map({
  title: 'JavaScript: The Good Parts',
  author: 'Douglas Crockford',
  year: 2008
});

function updateBookTitle(book, newTitle) {
  return book.set('title', newTitle);
}

const updatedBook = updateBookTitle(book, 'JavaScript: The Definitive Guide');

console.log(book.get('title')); // JavaScript: The Good Parts

console.log(book.toJS()); // { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', year: 2008 }

// The propblem with this code is it is hard to use immutable maps with pure javascript objects and always need getters and setters.

