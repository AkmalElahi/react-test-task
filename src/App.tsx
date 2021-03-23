import React from 'react';
import './App.scss';
import NavigateMenu from './components/NavigateMenu';
import Header from './components/Header';
import Footer from './components/Footer';
import Services from './components/Services';

function App() {
  return (
    <div>
      <NavigateMenu />
      <div className="children">
        <Header />
        <Services />
        <Footer />
      </div>
    </div>
  );
}

export default App;
