import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Footer from './container/Footer/Footer';
import Header from './container/Header/Header';
import Hotdrop from './container/Hot Drop/Hotdrop';
import Subscribe from './container/Subscribe/Subscribe';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Hotdrop/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;
