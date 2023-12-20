import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import Helmet from './components/Helmet';
import './App.css';

function App() {
  return (
    <>
      <Helmet />
      <Header />
      <Nav />
      <Main />
      <Footer />
    </>
  );
}

export default App;
