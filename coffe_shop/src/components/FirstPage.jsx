import css from '../style/Firstpage.module.css';
import background775 from '../assets/images/background775.png';
import wave1 from '../assets/waves/wave1.png';
import coffe from '../assets/icons/coffee.png';
import coffeBean from '../assets/icons/coffeeBean.png';
import coffePot from '../assets/icons/coffeePot.png';



function Firstpage() {
    return (
            <>
                <div className={css.firstpage}>
                    <img className={css.coffe} src={coffe}/>
                    <img className={css.coffePot} src={coffePot}/>
                    <img className={css.coffeBean} src={coffeBean}/>
                    <img className={css.coffeBean2} src={coffeBean}/>
                    <h1 className={css.bigText}>Coffe Time</h1>
                    <img className={css.background775} src={background775}/>
                    <img className={css.wave1} src={wave1}/>
                    <div className={css.contents}>
                        <h2 className={css.h2}>Your headline</h2>
                        <p className={css.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor
                            incididunt ut labore et dolore</p>
                        <button className={css.orderButton}>Order Now</button>
                    </div>
                </div>
            </>
    );
}

export default Firstpage;