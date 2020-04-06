import fetchBooksData from '../../repository';

export default {
  state: [],
  reducers: {
    init(state, list) {
      return [...state, ...list];
    },
    add(state, item) {
      return [...state, item];
    },
    edit(state, item) {
      const list = [...state];
      const index = list.findIndex(({ id }) => item.id === id);
      list.splice(index, 1, { ...list[index], ...item });
      return list;
    },
    delete(state, item) {
      return state.filter(({ id }) => id !== item.id);
    },
  },
  effects: () => ({
    async fetchBooks() {
      const response = await fetchBooksData();
      this.init(response);
    },
  }),
};
