import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import Helmet from './components/Helmet';
import './App.css';

function App() {
  return (
    <div className='container p-2'>
      <Helmet />
      <div className='row'>
        <Header />
        <Nav />
      </div>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
