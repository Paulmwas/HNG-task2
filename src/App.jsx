
import './App.css'
import Header from './Header';
import Hero from './Hero';
import Products from './components/Products';
import Highlight from './components/Highlight';
import Footer from './components/Footer';
import Botttom from './components/Botttom';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
    <>
     <Router>
     <Header />
     <Hero />
     <Products />
     <Highlight />
     <Footer />
     <Botttom/></Router>
    </>
  )
}

export default App
