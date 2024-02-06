import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserRouters from './routers/UserRouters';
import { ToastContainer } from 'react-toastify';
import AdminRouters from './routers/AdminRouters';

function App() {
  return (
    <>
    <ToastContainer/>
    <BrowserRouter>
    {/* <UserRouters/> */}
    <Routes>
      <Route path='/*' element={<UserRouters/>} />
      <Route path='/admin/*' element={<AdminRouters/>}/>
    </Routes>
    
    </BrowserRouter>
    </>
    
  );
}

export default App;
