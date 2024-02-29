import css from '../style/Fifthpage.module.css';
import image from '../assets/voucher/imageWDiscount.png';
import waveBottom from '../assets/voucher/waveBottom.png';
import waveTop from '../assets/voucher/waveTop.png';
import logo from '../assets/logo.png';
import twt from '../assets/icons/twt.png';
import fb from '../assets/icons/fb.png';
import ig from '../assets/icons/ig.png';


function Fifthpage() {
    return (
        <>
            <div className={css.fifthPage}>
                <div className={css.textBox}>
                    <h1 className={css.bigText}>Voucher</h1>
                </div>
                <div className={css.voucherBox}>
                    <img src={image} className={css.image} />
                    <img src={waveBottom} className={css.waveBottom} />
                    <img src={waveTop} className={css.waveTop} />
                    <img src={logo} className={css.logo}/>
                    <div className={css.contentsBox}>
                        <h1 className={css.voucherH1}>Voucher Discount</h1>
                        <p className={css.p}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque nesciunt magni sed vero dignissimos, incidunt facilis iure id vel accusantium dolorem quidem quibusdam inventore labore rem doloribus cum totam tenetur.</p>
                        <div className={css.validateVoucher}>Validate Until: 01.05.2020</div>
                        <div className={css.socialIcons}>
                            <div className={css.iconElement}>
                                <img src={twt} className={css.icon}/><p className={css.picon}>Twitter</p>
                            </div>
                            <div className={css.iconElement}>
                                <img src={ig} className={css.icon}/><p className={css.picon}>Instagram</p>
                            </div>
                            <div className={css.iconElement}>
                                <img src={fb} className={css.icon}/><p className={css.picon}>Facebook</p>
                            </div>
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

export default Fifthpage