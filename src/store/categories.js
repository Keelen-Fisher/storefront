let initialState = {
  categories: [
    { name: 'electronics', displayName: 'ELECTRONICS' },
    { name: 'food', displayName: 'FOOD' },
  ],

  activeCategory: '',
};

// A reducer function that takes in the state and an action and returns a new state. 
function categoryReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {

    case 'CATEGORY':
      return {
        ...state,
        activeCategory: payload,
      }
    
    case 'RESET':
      return initialState;

    default:
      return initialState;
      
  }
}



export default categoryReducer;



