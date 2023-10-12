import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PreviewPage from '../pages/PreviewPage/PreviewPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegPage from '../pages/RegPage/RegPage';
import StudentPage from '../pages/StudentPage/StudentPage';
import CoursePage from '../pages/CoursePage/CoursePage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

const RouteProvider = (isAuth) => {
    if (isAuth) {
        return <Routes>
            <Route path='/course/:id' element={<CoursePage />}></Route>
            <Route path='/students' element={<StudentPage />}></Route>
            <Route path='/*' element={<NotFoundPage />}></Route>
        </Routes >
    }
    return <Routes>
        <Route path="/" element={<PreviewPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path='/registration' element={<RegPage />}></Route>
        <Route path='/*' element={<NotFoundPage />}></Route>
    </Routes >
}

export default RouteProvider;
