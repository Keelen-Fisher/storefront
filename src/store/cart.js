const initialState = {
  itemsForPurchase: [],
  amountInCart: 0,
}

function cartReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'ADD':
      let cart = {
        itemsForPurchase: [...state.itemsForPurchase, payload],
        amountInCart: state.amountInCart + 1,
      }
      return cart

      case 'REMOVE':
      return {
        ...state,
        itemsForPurchase: state.itemsForPurchase.filter(product => product !== payload),
        amountInCart: state.amountInCart - 1,
      }
        
    case 'RESET':
      return initialState;

      default:
      return initialState;
      
  };
}

export const addItem = (product) => {
  return {
    type: 'ADD',
    payload: product,
  }
}

export const removeItem = (product) => {
  return {
    type: 'REMOVE',
    payload: product,
  }
}


export default cartReducer;
