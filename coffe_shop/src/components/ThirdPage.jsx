import css from '../style/Thirdpage.module.css';
import wave2 from '../assets/waves/wave2.png';
import coffe778 from '../assets/images/coffe778.png';

function Thirdpage() {
    return (
        <>
            <div id='menu' className={css.thirdpage}>
                <img className={css.wave2} src={wave2}/>
                <div className={css.thirdpageContents}>
                    <div className={css.splitBox}>
                        <img src={coffe778} className={css.coffe778} />
                        <p className={css.p}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid atque beatae culpa doloribus harum illo iste, laudantium libero, mollitia nemo nostrum odio porro quaerat quisquam quo quos recusandae ullam voluptatum.</p>
                    </div>
                    <div className={css.splitBox}>
                        <div className={css.textBox}>
                            <h1 className={css.bigText}>Hot</h1>
                            <h1 className={css.bigText}>Coffees</h1>
                        </div>
                        <button className={css.orderButton}>Order Now</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Thirdpage