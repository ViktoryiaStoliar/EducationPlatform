import { Route, Routes } from 'react-router-dom';
import './App.css';
import PreviewPage from './pages/PreviewPage/PreviewPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegPage from './pages/RegPage/RegPage';
import StudentPage from './pages/StudentPage/StudentPage';
import CoursePage from './pages/CoursePage/CoursePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<PreviewPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path='/registration' element={<RegPage />}></Route>
      <Route path='/students' element={<StudentPage />}></Route>
      <Route path='/course/:id' element={<CoursePage />}></Route>
    </Routes >
  );
}

export default App;
