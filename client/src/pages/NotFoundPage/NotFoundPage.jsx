import style from './NotFoundPage.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <>
            <Header />

            <div className={style.wrapper}>
                <div className={style.info}>
                    <p>Error 404</p>
                    <h1>Hey Buddy</h1>
                    <p>We can’t seem to find the page you are looking for.</p>

                    <Link to={'/'}>
                        <div className={style.btn}>Sign Up</div>
                    </Link>
                </div>
                <div className={style.img}></div>
            </div>
            <Footer />
        </>
    )
}

export default NotFoundPage;