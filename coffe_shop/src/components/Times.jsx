import css from '../style/Times.module.css';

function Times() {
    return (
        <>
            <div className={css.mainContainer}>
                <h1 className={css.bigText}>We are Open</h1>
                <div className={css.splitBox}>
                    <h3 className={css.h3}>Monday - Friday</h3>
                    <p className={css.p}>10:00 am - 10:00 pm</p>
                </div>
                <div className={css.splitBox}>
                    <h3 className={css.h3}>Saturday and Sunday</h3>
                    <p className={css.p}>10:00 am - 10:10 pm</p>
                </div>
            </div>
        </>
    );
}

export default Times