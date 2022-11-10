import cartReducer from '.../src/components/cart/simplecart';
import { legacy_createStore as createStore, combineReducers } from 'redux';
import { addItem, removeItem } from './index';



describe('Cart Reducer', () => {

  const reducers = combineReducers({
    cart: cartReducer,
  });

  const store = createStore(reducers);

  it('can provide initial state', () => {
    let state = store.getState(); // snapshot of state AT THE MOMENT
    expect(state.cart.productsInCart.length).toEqual(0);
    expect(state.cart.productsInCart).toBeTruthy();
  })

  it('can add products', () => {
    let state = store.getState(); // snapshot of state AT THE MOMENT
    expect(state.cart.productsInCart.length).toEqual(0);
    expect(state.cart.productsInCart).toBeTruthy();
    let productOne = {name: 'product one', price: 5}
    let productTwo = {name: 'product two', price: 15}

    store.dispatch(addItem(productOne));
    store.dispatch(addItem(productTwo));

    state = store.getState(); // snapshot of state AT THE MOMENT
    expect(state.cart.productsInCart.length).toEqual(2);
    expect(state.cart.productsInCart[0].name).toEqual('product one');
    expect(state.cart.productsInCart[1].name).toEqual('product two');
  });

});
