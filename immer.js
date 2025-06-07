import {produce} from 'immer';

let book = {
  title: 'JavaScript: The Good Parts'}

function publish(book) {
  return produce(book, draft => {
    draft.published = true;
  });
}

const publishedBook = publish(book);

console.log(book.published); // undefined
console.log(publishedBook.published); // true
console.log(book.title); // JavaScript: The Good Parts
console.log(publishedBook.title); // JavaScript: The Good Parts

