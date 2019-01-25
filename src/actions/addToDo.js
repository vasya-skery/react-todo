/* eslint-disable linebreak-style */
export const addTodo = (title, todo) => ({
  type: "ADD_TODO",
  payload: { title, todo }
});
