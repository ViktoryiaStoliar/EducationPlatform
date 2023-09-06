import React, { useEffect, useState } from 'react';
import style from './coursePage.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Button } from "@mui/material";

const CoursePage = () => {

    const { id } = useParams();
    const [res, setRes] = useState({});
    const [lesson, setLesson] = useState({});

    async function getAllDescription() {
        const res = await axios.get(`http://localhost:5000/course/${id}`);
        setRes(res.data[0]);
    }

    async function getAllLessons() {
        const lesson = await axios.get(`http://localhost:5000/lesson`);
        setLesson(lesson.data[0])
    }

    useEffect(() => {
        getAllDescription()
    }, []);

    useEffect(() => {
        getAllLessons()
    }, [])

    return (
        <>
            <Header isAuth={true} />

            <div className={style.wrapper}>

                <div className={style.wrapperCourse}>
                    <div className={style.container}>
                        <div className={style.img}></div>
                        <div className={style.course}>
                            <h1>{res.course}</h1>
                            <p>{res.description}</p>
                        </div>
                    </div>

                    <Button variant="contained" className={style.btn}>
                        Go to course
                    </Button>
                </div>

                <div className={style.wrapperLesson}>
                    <h2>15 lessons</h2>
                    <p>{res.title}</p>
                </div>

            </div>

            <Footer />
        </>
    );
}

export default CoursePage;
