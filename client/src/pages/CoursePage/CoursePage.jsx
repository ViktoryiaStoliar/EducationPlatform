import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import style from './coursePage.module.css';
import { useParams } from 'react-router-dom';
// import arr from '../../storage/course.json'
import axios from 'axios';

const CoursePage = () => {

    const { id } = useParams();
    const [res, setRes] = useState({});

    async function getAllDescription() {
        const res = await axios.get(`http://localhost:5000/course/${id}`);
        setRes(res.data[0]);
    }

    useEffect(() => {
        getAllDescription()
    }, [])

    return (
        <>
            <Header isAuth={true} />

            <div className={style.wrapper}>

                <div className={style.wrapperCourse}>
                    <div className={style.img}></div>
                    <div className={style.course}>
                        <h1>{res.course}</h1>
                        <p>{res.description}</p>
                    </div>

                    <div className={style.wrapperLessons}>
                        
                    </div>

                    <div className={style.btn}></div>

                </div>

                {/* <div className={style.wrapper.Lessons}></div> */}
            </div>
        </>
    );
}

export default CoursePage;
