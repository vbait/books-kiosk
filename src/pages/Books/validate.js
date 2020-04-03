export default function validate(books, book) {
  const titles = books
    .filter((b) => b.id !== book.id)
    .map(({ title }) => title);
  if (titles.includes(book.title)) {
    return { title: 'Title should be unique.' };
  }
  return undefined;
}
