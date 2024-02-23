import css from '../style/Fifthpage.module.css';
import voucher from '../assets/images/voucher.png';

function Fifthpage() {
    return (
        <>
            <div className={css.fifthPage}>
                <div className={css.textBox}>
                    <h1 className={css.bigText}>Voucher</h1>
                </div>
                <div className={css.imageBox}>
                    <img src={voucher} className={css.voucher}/>
                </div>
                <div className={css.buttonBox}>
                    <button className={css.orderButton}>Get Voucher Now</button>
                </div>
            </div>
        </>
    );
}

export default Fifthpage;