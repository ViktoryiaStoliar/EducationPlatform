import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import style from './style.module.css'

function RegPage() {
    return (
        <>
            <Header />
            <div className={style.wrapper}>

                <div className={style.info}>
                    <h1>Sign Up</h1>
                    <div><input placeholder='Surname'></input></div>
                    <div><input placeholder='Name'></input></div>
                    <div><input placeholder='Email'></input></div>
                    <div><input placeholder='Password'></input></div>
                    <div className={style.btn}>Sign Up</div>
                </div>

                <div className={style.img}></div>

            </div>
            <Footer />
        </>
    )
}

export default RegPage;