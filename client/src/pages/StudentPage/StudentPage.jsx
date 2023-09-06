import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/Header/Header';
import { Pagination } from '@mui/material';
import Footer from '../../components/Footer/Footer';
import style from './style.module.css';

const StudentPage = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [arr, setArr] = useState([]);

    async function getAllCourses() {
        const res = await axios.get('http://localhost:5000/course');
        setArr(res.data);
    }

    useEffect(() => {
        getAllCourses();
    }, [])

    const size = 2;
    const lastInd = currentPage * size;
    const firstInd = lastInd - size;
    const item = arr.slice(firstInd, lastInd);

    const handleChange = (event, value) => {
        setCurrentPage(value)
    }

    return (
        <>
            <Header isAuth={true} />

            <div className={style.wrapper}>
                <div className={style.logo}>
                    <div className={style.img}></div>
                    <h1>Courses</h1>
                </div>

                {item.map((el, ind) => {
                    return (
                        <Link to={`/course/${el.id}`} key={ind}>
                            <div className={style.info}>
                                <div className={style.img}></div>
                                <div className={style.word}>
                                    <h1>{el.course}</h1>
                                    <p>{el.description}</p>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>

            <div className={style.pagination}>
                <Pagination count={Math.ceil(arr.length / size)}
                    variant="outlined"
                    page={currentPage}
                    onChange={handleChange} />
            </div>


            <Footer />

        </>
    );
}

export default StudentPage;
