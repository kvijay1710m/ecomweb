
import { Outlet } from 'react-router-dom';
import Header from './component/Header';
import Homescreen from './Pages/Homescreen';
import Footer from './component/Footer';

function App() {
  return (
    <div className='overflow-y-scroll scrollbar-hide'>
      <Header />
      <div className='container mx-auto '>
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
