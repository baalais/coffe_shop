import css from '../style/Fifthpage.module.css';
import voucher from '../assets/images/voucher.png';
import imageWDiscount from '../assets/voucher/imageWDiscount.png';
import waveTop from '../assets/voucher/waveTop.png';
import waveBottom from '../assets/voucher/waveBottom.png';
import logo from '../assets/logo.png';
import coffeeBean from '../assets/icons/coffeeBean.png';
import coffee from '../assets/icons/coffee.png';
import coffeePot from '../assets/icons/coffeePot.png';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Fifthpage() {
    return (
        <>
            <div className={css.fifthPage}>
                <div className={css.textBox}>
                    <h1 className={css.bigText}>Voucher</h1>
                </div>
                <div className={css.imageBox}>
                    {/* <img src={voucher} className={css.voucher}/> */}
                    <img src={imageWDiscount} className={css.absolute} />
                    <img src={waveTop} className={css.absoluteTop}/>
                    <img src={waveBottom} className={css.absoluteBottom} />
                    <img src={logo} className={css.absoluteLogo} />
                    <h1 className={css.h1}>Voucher Discount</h1>
                    <h2 className={css.h2}>Lorem ipsum dolor sit amet consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Quis ipsum suspendisse ultrices gravida.
                    </h2>
                    <button className={css.validate}>VALITADE UNTIL: 01.05.2020</button>
                    <img src={coffee} className={css.coffee}></img>
                    <img src={coffeePot} className={css.coffeePot}></img>
                    <img src={coffeeBean} className={css.coffeeBean}></img>
                    <img src={coffeeBean} className={css.coffeeBeanSmall}></img>
                    <div className={css.connection}>
                        <div className={css.connectionLine}>
                            <div className={css.connectionImg}>
                                <FaTwitter />
                            </div>
                            <h1 className={css.h3}>Your account</h1>
                        </div>
                        <div className={css.connectionLine}>
                            <div className={css.connectionImg}>
                                <FaInstagram />
                            </div>
                            <h1 className={css.h3}>Your account</h1>
                        </div>
                        <div className={css.connectionLine}>
                            <div className={css.connectionImg}>
                                <FaFacebookF />
                            </div>
                            <h1 className={css.h3}>Your account</h1>
                        </div>
                    </div>
                </div>
                <div className={css.buttonBox}>
                    <button className={css.orderButton}>Get Voucher Now</button>
                </div>
            </div>
        </>
    );
}

export default Fifthpage;