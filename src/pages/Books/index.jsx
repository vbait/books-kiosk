import React from 'react';
import BooksProvider from './Books.provider';
import Books from './Books';

export default function BooksWrapper() {
  return (
    <BooksProvider>
      <Books />
    </BooksProvider>
  );
}
