import { Link } from 'react-router-dom';
import style from './style.module.css'

function PreviewInfo() {
    return (
        <>
            <div className={style.preview}>
                <div className={style.text}>
                    <p className={style.title}>E-COURSE PLATFORM</p>
                    <h1>Learning and teaching online, made easy.</h1>
                    <p className={style.textL}>Any subject, in any language, on any device, for all ages!</p>
                    <Link to={'/*'}>
                        <div className={style.btnAbout}>About platform</div>
                    </Link>
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

                    <div className={style.secondPath}>

                        <h1 className={style.bigL}>Learn a language in a playful way</h1>
                        <p className={style.smallL}>Make learning programming languages more fun with mini-games</p>

                        <div className={style.imgSittingGirl}>
                            <div className={style.sprint}>
                            </div>
                            <div className={style.tasks}>
                            </div>
                        </div>

                    </div>

                </div>

            </div>


            <div className={style.increase}>

                <div className={style.thirdPath}>

                    <div className={style.text}>
                        <h1>Increase your knowledge</h1>
                        <p>Traditional and new effective approaches to learning languages</p>

                        <Link to={'./*'}>
                            <div className={style.btnTextbook}>Textbook →</div>
                        </Link>
                    </div>

                    <div className={style.imgGirlBook}></div>

                </div>

            </div>


            <div className={style.wrapperFour}>

                <div className={style.watchProgress}>

                    <div className={style.imgGirlBoy}></div>

                    <div className={style.progressText}>
                        <h1>Watch your progress every day</h1>
                        <p>Save statistics on your achievements and mistakes</p>
                        <Link to={'./*'}>
                            <div className={style.btnStatistics}>Statistics →</div>
                        </Link>
                    </div>

                </div>

            </div>
        </>
    )
}

export default PreviewInfo;

