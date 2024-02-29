import css from '../style/Secondpage.module.css';
import background776 from '../assets/images/background776.png';
import coffe from '../assets/icons/coffee.png';
import coffeBean from '../assets/icons/coffeeBean.png';
import coffePot from '../assets/icons/coffeePot.png';

function Secondpage() {
    return (
        <>
            <div id='about' className={css.secondpage}>
                <img className={css.coffe} src={coffe}/>
                <img className={css.coffePot} src={coffePot}/>
                <img className={css.coffeBean} src={coffeBean}/>
                <img className={css.coffeBean2} src={coffeBean}/>
                <img className={css.coffeBean3} src={coffeBean}/>
                <div className={css.secondpageContents}>
                    <div className={css.splitdiv}>
                        <h1 className={css.bigText}>Black</h1>
                        <h1 className={css.bigText}>Coffes</h1>
                        <button className={css.orderButton}>Order Now</button>
                    </div>
                    <div className={css.splitdivp}>
                        <img src={background776} className={css.background776}/>
                        <p className={css.p}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab at
                            consequatur cum debitis dolor incidunt ipsum iure molestiae odio quae, ratione saepe sequi,
                            suscipit temporibus vitae? Blanditiis nam neque nihil.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Secondpage