import style from './style.module.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

function LoginPage() {
    return (
        <>
            < Header />
            <div className={style.wrapper}>

                <div className={style.info}>
                    <h1>Login</h1>
                    <div><input placeholder='Login'></input></div>
                    <div><input placeholder='Password'></input></div>
                    <div className={style.btn}>Login</div>
                </div>

                <div className={style.img}></div>

            </div>
            <Footer />
        </>
    )
}

export default LoginPage