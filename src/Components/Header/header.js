import React from "react";
import "./header.sass";
import { Link } from "react-scroll";
import octoLogo from "../../Images/octoLogo.svg"

const Header = ()=>{

    return(
        <div className="header">
            <div className="container-fluid">
                <div className="row wrapper">
                    <div className="header-logo col-lg-2 col-sm-4">
                        <img src={octoLogo} alt="logo"/>
                    </div>
                    <nav className="header-nav col-lg-10">
                        <ul>
                            <li className="header-nav__item P_L_bold link">
                                <Link
                                      to="textBlock"
                                      spy={true}
                                      smooth={true}
                                      offset={-30}
                                      duration={500}> Текстовые блоки
                                </Link>
                            </li>
                            <li className="header-nav__item P_L_bold link">
                                <Link
                                    to="gallery"
                                    spy={true}
                                    smooth={true}
                                    offset={-30}
                                    duration={500}>Галерея
                                </Link>

                            </li>
                            <li className="header-nav__item far-right link" id="">

                                <Link
                                    to="greetingForm"
                                    spy={true}
                                    smooth={true}
                                    offset={-30}
                                    duration={500}>
                                    {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                                    <span role="img">👋</span>Форма с приветами
                                </Link>

                            </li>
                        </ul>
                    </nav>

                </div>
            </div>
        </div>

    )
}

export default Header;