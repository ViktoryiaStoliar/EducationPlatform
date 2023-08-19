import { Route, Routes } from 'react-router-dom';
import './App.css';
import PreviewPage from './pages/PreviewPage/PreviewPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegPage from './pages/RegPage/RegPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PreviewPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path='/registration' element={<RegPage />}></Route>
    </Routes >
  );
}

export default App;
