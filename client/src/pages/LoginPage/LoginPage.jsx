import style from './style.module.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import InputForm from '../../components/InputForm/InputForm';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import myContext from '../../context/myContext';


function LoginPage() {

    const { logIn } = useContext(myContext)

    const navigate = useNavigate();
    const [inp, setInp] = useState({
        email: '',
        pwd: ''
    });

    async function getInp() {
        const request = await axios.post('http://localhost:5000/api/auth', inp,
            { withCredentials: true })
        console.log(request);
        logIn()
        navigate('/students')
    }



    const inpArr = [{ text: 'email', type: 'text' }, { text: 'pwd', type: 'password' }]

    return (
        <>
            < Header isAuth={false} />
            <div className={style.wrapper}>

                <div className={style.info}>
                    <h1>Login</h1>
                    <InputForm data={inpArr} setInp={setInp} inp={inp} />
                    <div onClick={getInp} className={style.btn}>Login</div>
                </div>

                <div className={style.img}></div>

            </div>
            <Footer />
        </>
    )
}

export default LoginPage