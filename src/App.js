import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route exact path="/about" element={<AboutUs />} />
        <Route exact path="/contact" element={<ContactUs />} />
        <Route
          path="/*"
          element={
            <div className="text-center py-5">
              <h2>
                <b>404 </b>
                <span>Not Found</span>
              </h2>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
