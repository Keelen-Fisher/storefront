let initialState = [
  { name: 'TV', category: 'electronics', price: 699.00, inventory: 5, image: <img src="images/diego-gonzalez--I8lDurtfAo-unsplash.jpg" alt="tv" /> },
  { name: 'Radio', category: 'electronics', price: 99.00, inventory: 15, image: <img src="images/mehmet-turgut-kirkgoz-CLxxr51_qGE-unsplash.jpg" alt="radio" /> },
  { name: 'Apples', category: 'food', price: .99, inventory: 500, image: <img src="images/pierpaolo-riondato-s7r4xjKXo0s-unsplash.jpg" alt="apples" /> },
  { name: 'Eggs', category: 'food', price: 1.99, inventory: 12, image: <img src="images/jiangxulei1990-eIzzzwtkBjU-unsplash.jpg" alt="eggs" /> },
  { name: 'Bread', category: 'food', price: 2.39, inventory: 90, image: <img src="images/angelo-pantazis-2-U0A2tNYhM-unsplash.jpg" alt="bread" /> },
]

// A reducer function that takes in the state and an action and returns a new state. 
function productReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (action.type) {
    case 'CATEGORY':
      return initialState.filter(product => product.category === action.payload)


   case 'RESET':
      return initialState;

   default:
      return state;
  }
}



export default productReducer;
