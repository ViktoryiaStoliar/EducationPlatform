import React from 'react';
import style from './style.module.css';
import Header from '../../components/Header/Header';

const StudentPage = () => {
    const arr = [{ h1: 'JavaScript', p: 'JavaScript is a practical course where students learn the basics of JavaScript. It covers variables, operators, conditionals, loops, functions, and data manipulation.' }, { h1: 'TypeScript', p: 'TypeScript is a course that provides an introduction to TypeScript. Students will learn about TypeScript\'s key features, such as type annotations, interfaces, classes, and modules' }, { h1: 'Python', p: 'Students will learn about variables, data types, conditionals, loops, functions, and file handling. Through hands-on exercises and projects, students will gain proficiency in writing Python code and solving real-world problems.' }]


    return (
        <div>
            <Header isAuth={true} />
            <div className={style.wrapper}>
                <div className={style.logo}>
                    <div className={style.img}></div>
                    <h1>Courses</h1>
                </div>

                {arr.map((el) => {
                    return (
                        <div className={style.info}>
                            <div className={style.img}></div>
                            <div className={style.word}>
                                <h1>{el.h1}</h1>
                                <p>{el.p}</p>
                            </div>
                        </div>
                    )
                })}


                <div>
                    
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default StudentPage;
