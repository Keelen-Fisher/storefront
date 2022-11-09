import React from 'react';

import './app.css';
import Header from './components/header/header.js';
import Categories from './store/categories';
import Products from './store/products'
import Footer from './components/footer/footer.js';
import CategoriesList from './components/Categoreis/category-List';
 function App() {

  return (
    <>
      <Header />
      <Categories />
      <Products />
      <CategoriesList/>
      <Footer />

    </>

  );
};

export default App;
