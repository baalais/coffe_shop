import css from '../style/Fourthpage.module.css';
import coffe777 from '../assets/images/coffe777.png';

function Fourthpage() {
    return (
        <>
            <div className={css.fourthpage}>
                <div className={css.fourthpageContents}>
                    <div className={css.splitBox}>
                        <div className={css.textBox}>
                            <h1 className={css.bigText}>White</h1>
                            <h1 className={css.bigText}>Coffees</h1>
                        </div>
                        <div className={css.buttonBox}>
                            <button className={css.orderButton}>Order Now</button>
                        </div>
                    </div>
                    <div className={css.splitBox}>
                        <img src={coffe777} className={css.coffe777}/>
                        <p className={css.p}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid atque
                            beatae culpa doloribus harum illo iste, laudantium libero, mollitia nemo nostrum odio porro
                            quaerat quisquam quo quos recusandae ullam voluptatum.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Fourthpage;