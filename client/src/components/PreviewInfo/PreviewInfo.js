import style from './style.module.css'

function PreviewInfo() {
    return (
        <>
            <div className={style.preview}>
                <div className={style.text}>
                    <p className={style.title}>E-COURSE PLATFORM</p>
                    <h1>Learning and teaching online, made easy.</h1>
                    <p className={style.textL}>Any subject, in any language, on any device, for all ages!</p>
                    <div className={style.btnAbout}>About platform</div>
                    <div className={style.quantity}>
                        <div className={style.top}>
                            <div className={style.arrow}></div>
                            <p>
                                600 <span>+</span>
                            </p>
                        </div>
                        <p className={style.underNumber}>Students</p>
                    </div>
                </div>
                <div className={style.img}></div>
            </div>


            <div className={style.wrapper}>

                <div className={style.learnLanguage}>

                    <div className={style.sittingGirl}></div>

                    <div class={style.secondPath}>

                        <h1 className={style.bigL}>Learn a language in a playful way</h1>
                        <p className={style.smallL}>Make learning programming languages more fun with mini-games</p>

                        <div className={style.img}>
                            <div className={style.sprint}>
                            </div>
                            <div className={style.tasks}>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            <div className=''></div>
            <div className=''></div>
        </>
    )
}

export default PreviewInfo;

