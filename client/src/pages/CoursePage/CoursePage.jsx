import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './coursePage.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';
import { Button } from "@mui/material";

const CoursePage = () => {

    const { id } = useParams();
    const [course, setCourse] = useState({});
    const [lesson, setLesson] = useState([]);

    async function getAllDescription() {
        const res = await axios.get(`http://localhost:5000/course/${id}`);
        console.log(res);
        setCourse(res.data[0]);
    }

    async function getAllLessons() {
        const res = await axios.get(`http://localhost:5000/lesson/${id}`);

        console.log(res.data);
        setLesson(res.data);
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
                            <h1>{course.course}</h1>
                            <p>{course.description}</p>
                        </div>
                    </div>

                    <Button variant="contained" className={style.btn}>
                        Go to course
                    </Button>
                </div>

                <div className={style.wrapperLesson}>
                    <h2>Lessons:</h2>
                    {lesson.map((el, index) => (
                        <ul>
                            <li key={index}>{el.id}:{el.title}</li>;
                            <li key={index}>{el.id}:{el.title}</li>;
                            <li key={index}>{el.id}:{el.title}</li>;
                        </ul>
                    ))}
                    {/* {lesson.map((el, index) => (
                        <p key={index}>{el.title}</p>
                    ))} */}
                </div>

            </div>

            <Footer />
        </>
    );
}

export default CoursePage;
