import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import style from './style.module.css';
import InputForm from "../../components/InputForm/InputForm";
import axios from 'axios';

function RegPage() {

    const [inp, setInp] = useState({
        name: '',
        surname: '',
        pwd: '',
        email: ''
    })

    async function createUser() {
        // debugger
        const request = await axios.post('http://localhost:5000/api/register', inp)
        console.log(request);
    }


    const inpArr = [{ text: 'surname', type: 'text' }, { text: 'name', type: 'text' }, { text: 'email', type: 'text' }, { text: 'pwd', type: 'password' }];

    return (
        <>
            <Header isAuth={false}/>
            <div className={style.wrapper}>

                <div className={style.info} >
                    <h1>Sign Up</h1>
                    <InputForm data={inpArr} setInp={setInp} inp={inp} />
                    <div className={style.btn} onClick={createUser}>Sign Up</div>
                </div>

                <div className={style.img}></div>

            </div>
            <Footer />
        </>
    )
}

export default RegPage;