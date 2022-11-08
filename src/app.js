import React from 'react';

import './app.css';
import Categories from './components/storefront/categories';
import CurrentCategoryList from './components/storefront/current-category';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import StoreFront from './components/storefront';

 function App() {

  return (
    <>
      <Header />
      <Categories />
      <CurrentCategoryList />
      <Footer />

    </>

  );
};

export default App;
