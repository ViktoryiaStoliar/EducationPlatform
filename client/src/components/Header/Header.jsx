import style from './style.module.css';
import { Link, useNavigate } from 'react-router-dom';
import myContext from '../../context/myContext';
import { useContext } from 'react';

function Header() {

    const { token, logOut } = useContext(myContext)
    const navigate = useNavigate()

    function logOutUser() {
        logOut();
        navigate('/')
    }

    return (
        <div className={style.wrapper}>
            <h1><Link to={'/'}>Hschool</Link></h1>
            <div className={style.btns}>
                {!token ? (<>
                    <div className={style.login}><Link to={'/login'}>Login →</Link></div>
                    <div className={style.signUp}><Link to={'/registration'}>Sign Up</Link></div>
                </>) : (<>
                    <div className={style.signUp} onClick={logOutUser}>Sign Out</div>
                </>)}
            </div>
        </div>
    )
}

export default Header