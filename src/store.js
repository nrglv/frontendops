import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { ADD_TODO, CHANGE_FILTER, TOGGLE_TODO } from './mutationTypes';

Vue.use(Vuex);

const store = new Store({
  state: {
    todos: [
      { id: 1, text: 'Kek', done: true },
      { id: 2, text: 'Bols', done: false },
      { id: 3, text: 'Fak vjuks', done: false }
    ],
    filter: 'ALL'
  },
  mutations: {
    [ADD_TODO]: function({ todos }, todo) {
      const latestId = todos[todos.length - 1].id;
      todos.push({ id: latestId + 1, text: todo, done: false });
    },
    [CHANGE_FILTER]: function(state, newFilter) {
      state.filter = newFilter;
    },
    [TOGGLE_TODO]: function(state, id) {
      state.todos = state.todos.map(t => (t.id === id ? { ...t, done: !t.done } : t));
    }
  },
  getters: {
    filteredTodos: ({ filter, todos }) => {
      if (filter === 'DONE') {
        return todos.filter(t => t.done);
      } else if (filter === 'UNDONE') {
        return todos.filter(t => !t.done);
      } else {
        return todos;
      }
    }
  }
});

export default store;
