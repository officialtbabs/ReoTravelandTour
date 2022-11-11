import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';



class App extends React.Component{
  // card: Cards = new Cards({name: "Travel Planning", image: "passport-application.jpg"});
  // constructor(props: any) {
  //   super(props);

  //   this.state = {
  //     image: this.props.image
  // };
  // }

  componentDidMount(): void {
    const  maskImage = document.getElementById('mask-image')?.parentElement;
    const aboutImageCont = document.getElementById('about-image')?.parentElement;
    const tourCutoutCont = document.getElementById('tour-cutout')?.parentElement;
    const subscribeCutoutCont = document.getElementById('subscribe-cutout')?.parentElement;
    const header = document.getElementById('header');

    if (!document.getElementById('mask-image')?.classList.contains('show-mask-cutout') && maskImage && maskImage.getBoundingClientRect().top < window.outerHeight && window.outerWidth < 981) {
      document.getElementById('mask-image')?.classList.add('show-mask-cutout');
    }
    if (!document.getElementById('about-image')?.classList.contains('show-about-us') && aboutImageCont && aboutImageCont.getBoundingClientRect().top < window.outerHeight && window.outerWidth < 981) {
      document.getElementById('about-image')?.classList.add('show-about-us');
    }
    if (!document.getElementById('tour-cutout')?.classList.contains('show-tour-cutout') && tourCutoutCont && tourCutoutCont?.getBoundingClientRect().top < window.outerHeight && window.outerWidth < 981) {
      document.getElementById('tour-cutout')?.classList.add('show-tour-cutout');
    }
    if (!document.getElementById('subscribe-cutout')?.classList.contains('show-subscribe-cutout') && subscribeCutoutCont && subscribeCutoutCont?.getBoundingClientRect().top < window.outerHeight && window.outerWidth < 981) {
      document.getElementById('subscribe-cutout')?.classList.add('show-subscribe-cutout');
    }

    window.onscroll = () => {
      if (!document.getElementById('mask-image')?.classList.contains('show-mask-cutout') && maskImage && maskImage?.getBoundingClientRect().top < window.outerHeight) {
        document.getElementById('mask-image')?.classList.add('show-mask-cutout');
      }
      if (!document.getElementById('about-image')?.classList.contains('show-about-us') && aboutImageCont && aboutImageCont.getBoundingClientRect().top < window.outerHeight) {
        document.getElementById('about-image')?.classList.add('show-about-us');
      }
      if (!document.getElementById('tour-cutout')?.classList.contains('show-tour-cutout') && tourCutoutCont && tourCutoutCont?.getBoundingClientRect().top < window.outerHeight) {
        document.getElementById('tour-cutout')?.classList.add('show-tour-cutout');
      }
      if (!document.getElementById('subscribe-cutout')?.classList.contains('show-subscribe-cutout') && subscribeCutoutCont && subscribeCutoutCont?.getBoundingClientRect().top < window.outerHeight) {
        document.getElementById('subscribe-cutout')?.classList.add('show-subscribe-cutout');
      }
      if (header && window.outerWidth > 981 && window.scrollY > 400) {
        document.getElementById("header")?.classList.add("show-header");
      }
      else {
        document.getElementById("header")?.classList.remove("show-header");
      }
    }
  }
  
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Home />
          <About />
          <Contact />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
