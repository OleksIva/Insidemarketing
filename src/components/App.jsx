import React from 'react';
import Header from './Header';
import Card from './Card';
import Footer from './Footer';
import '../index.scss';
import cardData from '../cardData';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Card cardData={cardData} />
      <Footer />
    </div>
  );
}

export default App;
