import style from './style.module.css'
import Options from './Options';

function Footer() {

    return (
        <>
            <div className={style.footerWrapper}>
                <div className={style.footerInfo}>
                    <div className={style.resources}>
                        <Options arr={['Home', 'Textbook', 'Statistics', 'Sprint']} />
                    </div>

                    <div className={style.name}>
                        <Options arr={['Alex', 'Gabriel', 'Marcus']} />
                    </div>
                </div>

                <div className={style.line}></div>

                <div className={style.footerContacts}>
                    <div className={style.instances}></div>

                    <p>
                        ©2021 Hschool. Project for <span>Hschool</span>.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer;