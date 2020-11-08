import Axios from 'axios';

const state = {
  books: [],
};
const getters = {
  allBooks(state) {
    return state.books;
  },
};
const actions = {
  async fetchBooks({ commit }) {
    const response = await Axios.get(
      'https://fakerapi.it/api/v1/custom?_quantity=5&author=name&id=counter&title=city'
    );
    const data = response.data.data;
    commit('setBooks', data);
  },

  async addBook({ commit }, resbook) {
    const book = {
      title: resbook.title,
      author: resbook.author,
    };
    commit('newBook', book);
  },
};
const mutations = {
  setBooks(state, books) {
    state.books = books;
    return state.books;
  },

  newBook(state, book) {
    state = state.books.unshift(book);
    return state;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
