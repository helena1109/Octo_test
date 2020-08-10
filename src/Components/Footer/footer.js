import React from "react";
import "./footer.sass";
import {Link} from "react-scroll";

const Footer = ()=>{
    return(
            <div className="footer  container-fluid wrapper">
                <div className="row">
                    <div className="footer-address col-lg-4">
                        <h4 className="footer-address__city H4">
                            Санкт-Петербург
                        </h4>
                        <div className="footer-address__street P_L ">
                            Большой Проспект П. С., 18, офис 22
                        </div>
                    </div>
                    <div className="footer-contacts col-lg-6">
                        <h4 className="footer-contacts__email H4 col-lg-6">mail@octoberweb.ru</h4>
                        <div className="footer-contacts__phone P_L col-lg-8">
                            +7 (981) 131-64-98
                        </div>
                    </div>

                    <button onClick={()=>window.scrollTo({top:0, behavior:"smooth"})} className="footer-button col-lg-2 btn_primary P ">Написать нам</button>

                    <div className="footer-end col-lg-12 ">
                        <nav className="footer-nav col-lg-9 col-sm-6">
                            <ul>
                                <li className="footer-nav__item P_L_bold link">
                                    <Link className="active"
                                        to="textBlock"
                                        spy={true}
                                        smooth={true}
                                        offset={-30}
                                        duration={500}> Текстовые блоки
                                    </Link>
                                </li>
                                <li className="footer-nav__item P_L_bold link">
                                    <Link
                                        to="gallery"
                                        spy={true}
                                        smooth={true}
                                        offset={-30}
                                        duration={500}>Галерея
                                    </Link>
                                </li>
                                <li className="footer-nav__item P_L_bold link">
                                    <Link
                                        to="greetingForm"
                                        spy={true}
                                        smooth={true}
                                        offset={-30}
                                        duration={500}> Форма
                                    </Link>

                                </li>
                            </ul>

                        </nav>
                        <div className="footer-years P_S col-lg-3 col-sm-2">
                            © 2009-2020 OctoberWeb
                        </div>
                    </div>
                    <div className="footer-line col-lg-12 col-sm-12"/>

                </div>
            </div>

    )
}

export default Footer;