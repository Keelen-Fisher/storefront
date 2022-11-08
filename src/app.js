import React from 'react';

import './app.css';

import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import StoreFront from './components/storefront';

export default function App() {

  return (
    <>
      <Header />
      <main>
        <StoreFront />
      </main>
      <Footer />

    </>

  );
};
