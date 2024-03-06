import css from '../style/Firstpage.module.css';
import background775 from '../assets/images/background775.png';
import wave1 from '../assets/waves/wave1.png';
import coffe from '../assets/icons/coffee.png';
import coffeBean from '../assets/icons/coffeeBean.png';
import coffePot from '../assets/icons/coffeePot.png';

function Firstpage() {
    return (
        <div id='home' className={css.firstpage}>
            <img className={`icon ${css.coffe}`} src={coffe} alt='Coffee Icon' />
            <img className={`icon ${css.coffePot}`} src={coffePot} alt='Coffee Pot Icon' />
            <img className={`icon ${css.coffeBean}`} src={coffeBean} alt='Coffee Bean Icon' />
            <img className={`icon ${css.coffeBean2}`} src={coffeBean} alt='Coffee Bean Icon' />

            <h1 className={css.bigText}>Coffe Time</h1>
            <img className={css.background775} src={background775} />
            <div className={css.contents}>
                <h2 className={css.h2}>Your headline</h2>
                <p className={css.p}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore
                </p>
                <button className={css.orderButton}>Order Now</button>
            </div>
            <img className={css.wave1} src={wave1} />
        </div>
    );
}

export default Firstpage;

