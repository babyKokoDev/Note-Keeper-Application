import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import AddEdit from './pages/AddEdit';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';


function App() {
  return (
    
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <ToastContainer position='top-center' />
         <Routes>
           <Route exact path = '/' Component={Home} />
           <Route exact path = '/add' Component={AddEdit} />
           <Route exact path = '/add/:id' Component={AddEdit} />
         </Routes>
     </div>
    </BrowserRouter>
    
  );
}

export default App;
