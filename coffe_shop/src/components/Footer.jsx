import css from '../style/Footer.module.css';
import wave5 from '../assets/waves/wave5.png';
import logo from '../assets/logo.png';
import facebook from '../assets/icons/fb.png';
import instagram from '../assets/icons/ig.png';
import twitter from '../assets/icons/twt.png';
import youtube from '../assets/icons/yt.png';


function Footer() {
    return (
        <>
            <img src={wave5} className={css.wave5}/>
            <div id='contact' className={css.mainFooterContainer}>
                <div className={css.footerContainer}>
                    <div className={css.splitBox}>
                        <img src={logo} className={css.logo}/>
                    </div>
                    <div className={css.splitBox}>
                        <h3 className={css.h3}>Information.</h3>
                        <p className={css.p}>About us</p>
                        <p className={css.p}>Branches</p>
                        <p className={css.p}>Menu</p>
                        <p className={css.p}>Contact</p>
                        <p className={css.p}>Map</p>
                    </div>
                    <div className={css.splitBox}>
                        <h3 className={css.h3}>Contact Us.</h3>
                        <p className={css.p}>Support</p>
                        <p className={css.p}>your_id@gmail.com</p>
                    </div>
                </div>
                <div className={css.footerBar}>
                    <div className={css.elementBar}>
                        <div className={css.element}><a className={css.p} href='#home'><p className={css.p}>Home</p></a></div>
                        <div className={css.element}><a className={css.p} href='#about'><p className={css.p}>About</p></a></div>
                        <div className={css.element}><a className={css.p} href='#menu'><p className={css.p}>Menu</p></a></div>
                        <div className={css.element}><a className={css.p} href='#blog'><p className={css.p}>Blog</p></a></div>
                        <div className={css.element}><a className={css.p} href='#shop'><p className={css.p}>Shop</p></a></div>
                        <div className={css.element}><a className={css.p} href='#contact'><p className={css.p}>Contact</p></a></div>
                    </div>
                    <div className={css.socialBar}>
                        <img src={facebook} className={css.icons}/>
                        <img src={instagram} className={css.icons}/>
                        <img src={twitter} className={css.icons}/>
                        <img src={youtube} className={css.icons}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer