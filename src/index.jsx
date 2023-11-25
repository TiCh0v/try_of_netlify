import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from './Homepage'; 
import Market from './Market';
import About from './About';

const Gogback = () => {
  const navigate = useNavigate();

  return (
    <p onClick={() => navigate(-1)}>Go back</p>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <div>
      <div className='navbar navbar-expand-lg bg-dark p-3'>
        <Link to="/" className='nav-link m-2 text-light'>Homepage</Link>
        <Link to="/about" className='nav-link m-2 text-light'>About</Link>
        <Link to="/market" className='nav-link m-2 text-light'>Market</Link>
      </div>
      <Routes>
        <Route path='/' element={<Blog />} />
        <Route path='/market' element={<Market />} />
        <Route path='/about' element={<About />} />
        <Route path='/goback' element={<Gogback />} />
      </Routes>
    </div>
  </BrowserRouter>
);
