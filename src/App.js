import Navbar from './Navbar';
import Home from './Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';


function App() {
  return (
    
      <div className="App">
        <Navbar />
        <div className="content">
          <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<Create/> }></Route>
            <Route path='/blogs/:id' element={<BlogDetails/> }></Route>
          </Routes>
          </BrowserRouter>
        </div>
      </div>
  );
}

export default App;
