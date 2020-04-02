import client from '../client';

export default function fetchBooksData() {
  return client.fetch('/books.json');
}
