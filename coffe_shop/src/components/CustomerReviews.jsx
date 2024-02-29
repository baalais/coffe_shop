import css from '../style/Customer.module.css';
import john from '../assets/images/john.png';
import ella from '../assets/images/ella.png';
import wave3 from '../assets/waves/wave3.png';

function Customerreviews() {
    return (
        <>
            <div id='blog' className={css.fifthPage}>
                <div className={css.textBox}>
                    <h1 className={css.bigText}>Customer Reviews</h1>
                </div>
                <div className={css.imageBox}>
                    <div className={css.splitBox}>
                        <img src={john} className={css.customerImg}/>
                        <h3 className={css.h3}>John Peter</h3>
                        <p className={css.p}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
                            commodi consectetur cupiditate eius est iste, laborum minus, molestiae nesciunt nulla
                            possimus provident quaerat quidem quo, quod ullam vero vitae voluptates!</p>
                    </div>
                    <div className={css.splitBox}>
                        <img src={ella} className={css.customerImg}/>
                        <h3 className={css.h3}>Ella Thomson</h3>
                        <p className={css.p}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
                            commodi consectetur cupiditate eius est iste, laborum minus, molestiae nesciunt nulla
                            possimus provident quaerat quidem quo, quod ullam vero vitae voluptates!</p>
                    </div>
                </div>
                <div className={css.waveBox}>
                    <img src={wave3} className={css.wave3} />
                </div>
            </div>
        </>
    );
}

export default Customerreviews