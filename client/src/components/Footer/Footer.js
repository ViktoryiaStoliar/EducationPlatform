import style from './style.module.css'
import Options from './Options';

function Footer() {

    return (
        <>
            <div className={style.firstStitch}>
                <div className={style.resources}>
                    <Options arr={['Home', 'Textbook', 'Statistics', 'Sprint']}></Options>
                </div>
                <div className={style.name}>
                    <Options arr={['Alex', 'Gabriel', 'Marcus']}></Options>
                </div>
            </div>

            <div className={style.secondStitch}>
                <div className={style.instances}></div>
                <div className={style.year}>
                    <p>©2021 Hschool. Project for Hschool.</p>
                </div>
            </div>
        </>
    )
}

export default Footer