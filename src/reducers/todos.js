/* eslint-disable linebreak-style */

const initialState = {
  list: [
    {
      title: "todo1 title",
      todo: "Wash and take away the Kurzhiy's cup from WC"
    },
    {
      title: "todo1 title",
      todo: "Do some rollton and cigarettes"
    }
  ]
};


const todos = (state = initialState, action) => {
  switch (action.type) {
  case "ADD_TODO":
    return {
      ...state,
      list: [
        ...state.list,
        {
          title: action.payload.title,
          todo: action.payload.todo,
        }
      ]
    }
  case "CHANGE_DATA":
    return {
      data: "another one text"

    };
  case "DELETE_TODO":
    return Object.assign({}, state, {
      list: state.list.filter((todo) => {
        return todo.id !== action.id;
      })
    });
  default:
    return state;
  }
};

export default todos;
