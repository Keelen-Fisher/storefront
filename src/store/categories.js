let initialState = {
  categories: [
    { name: 'electronics', displayName: 'ELECTRONICS' },
    { name: 'food', displayName: 'FOOD' },
  ],

  products: [
    { name: 'TV', category: 'electronics', price: 699.00, inventory: 5, img: `${process.env.PUBLIC_URL}/public/assets/Electronics/andres-jasso-kAxq92OhMJM-unsplash.jpg`},
    { name: 'Radio', category: 'electronics', price: 99.00, inventory: 15, img: `${process.env.PUBLIC_URL}public/assets/Electronics/anmol-arora-js1prKAQF7s-unsplash.jpg`},
    { name: 'Apples', category: 'food', price: .99, inventory: 500, img: `${process.env.PUBLIC_URL}public/assets/Food/robson-melo-H6VxhE_x-kE-unsplash.jpg`},
    { name: 'Eggs', category: 'food', price: 1.99, inventory: 12, img: `${process.env.PUBLIC_URL}public/assets/Food/tengyart-auEPahZjT40-unsplash.jpg` },
    { name: 'Bread', category: 'food', price: 2.39, inventory: 90, img: `${process.env.PUBLIC_URL}public/assets/Food/monika-grabkowska-nVoDL1YDWRE-unsplash.jpg` },
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
