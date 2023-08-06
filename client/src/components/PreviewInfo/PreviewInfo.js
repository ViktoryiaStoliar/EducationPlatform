import style from './style.module.css'

function PreviewInfo() {
    return (
        <>
            <div className={style.preview}>
                <div className={style.text}>
                    <p className={style.title}>E-COURSE PLATFORM</p>
                    <h1>Learning and teaching online, made easy.</h1>
                    <p className={style.text}>Any subject, in any language, on any device, for all ages!</p>
                    <div className={style.btnAbout}>About platform</div>
                    <div>600+</div>
                </div>
                <div className={style.img}></div>
            </div>

            <div className=''></div>
            <div className=''></div>
            <div className=''></div>
        </>
    )
}

export default PreviewInfo; 