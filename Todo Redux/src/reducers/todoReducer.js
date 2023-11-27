import {
  ADD_TODO,
  EDIT_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
} from '../actions/todoActionTypes';

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.payload,
            completed: false,
            id: Date.now(),
          },
        ],
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? {...todo, completed: !todo.completed}
            : todo,
        ),
      };

    case REMOVE_TODO:
      return {
        // ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };

    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id == action.payload.id) {
            return {
              ...todo,
              text: action.payload.newTask,
            };
          }
          return todo;
        }),
      };

    default:
      return state;
  }
};

export default todoReducer;
