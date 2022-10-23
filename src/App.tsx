import React from 'react';
import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Header />
        <Home />
        <About />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
