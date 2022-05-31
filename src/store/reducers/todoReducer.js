const INIT_STATE = {};

const todoReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case '1':
      return 1;
    default:
      return state;
  }
};

export default todoReducer;
