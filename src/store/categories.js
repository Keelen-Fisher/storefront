let initialState = {
  categories: [
    { name: 'electronics', displayName: 'ELECTRONICS' },
    { name: 'food', displayName: 'FOOD' },
  ],

  products: [
    { name: 'TV', category: 'electronics', price: 699.00, inventory: 5, img: 'https://via.placeholder.com/350x150'},
    { name: 'Radio', category: 'electronics', price: 99.00, inventory: 15, img: 'https://via.placeholder.com/350x150'},
    { name: 'Apples', category: 'food', price: .99, inventory: 500, img: 'https://via.placeholder.com/350x150' },
    { name: 'Eggs', category: 'food', price: 1.99, inventory: 12, img: 'https://via.placeholder.com/350x150' },
    { name: 'Bread', category: 'food', price: 2.39, inventory: 90, img: 'https://via.placeholder.com/350x150' },
  ],
  activeCategory: '',
};

function productReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {

    case 'category':
      return {
        ...state,
        activeCategory: payload,
      }
    
    case 'reset':
      return initialState;

    default:
      return initialState;
      
  }
}

export const orderCategory = (activeCategory) => {
  return {
    type: 'category',
    payload: activeCategory,
  }
}

export default productReducer;
