import style from './style.module.css'

function Footer() {
    return (
        <>
        <div className={style.firstStitch}>
            <div className={style.resources}>
                <p>Home</p>
                <p>Textbook</p>
                <p>Statistics</p>
                <p>Sprint</p>
            </div>
            <div className={style.name}>
                <p>Alex</p>
                <p>Gabriel</p>
                <p>Marcus</p>
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