import { NavLink } from "react-router-dom";

// import logo from "../../../assets/images/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import styles from "./Header.module.scss";
import { navItems } from "../../../Constants/const";
import { useState } from "react";

const Header = () => {
  const instaLogo = <FontAwesomeIcon icon={faInstagram} />;
  const fbLogo = <FontAwesomeIcon icon={faFacebook} />;
  const twitterLogo = <FontAwesomeIcon icon={faTwitter} />;
  const searchIcon = <FontAwesomeIcon icon={faSearch} />;
  const angleDown = <FontAwesomeIcon icon={faAngleDown} />;

  const [isShown, setIsShown] = useState(false);
  const [bgColor, setBgColor] = useState("bgTransparentColor");

  function handleChangeHeaderColor() {
    window.scrollY > 150 ? setBgColor('bgPrimaryColor') : setBgColor('bgTransparentColor');
  }

  window.addEventListener("scroll", handleChangeHeaderColor);

  return (
    <header className={`${styles.header} ${styles[bgColor]}`}>
      <div className={styles.logoWrapper}>
        <NavLink to='/'>
          <img
            src="https://custom-made.axiomthemes.com/wp-content/uploads/2016/10/logo.png"
            alt="logo"
          />
          {/* <span className={styles.caption}>PAN ROYAL</span> */}
        </NavLink>
      </div>
      <div className={styles.navBar}>
        <nav>
          <ul className={styles.navItems}>
            {navItems.map((i) => {
              return (
                <li
                  key={i.title}
                  onMouseEnter={() => setIsShown(i.title)}
                  onMouseLeave={() => setIsShown(null)}
                >
                  <NavLink to={i.url}>
                    {i.title}
                    {i.subTitle && angleDown}
                  </NavLink>
                  {isShown === i.title && i.subTitle && (
                    <div className={styles.dropdownItem}>
                      <ul className={styles.subDropdown}>
                        {i.subTitle.map((subItem) => {
                          return (
                            <li key={subItem.title}>
                              <NavLink>{subItem.title}</NavLink>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
          <ul className={styles.socialLinks}>
            <li>
              <NavLink>{twitterLogo}</NavLink>
            </li>
            <li>
              <NavLink>{fbLogo}</NavLink>
            </li>
            <li>
              <NavLink>{instaLogo}</NavLink>
            </li>
          </ul>
        </nav>
        <div className={styles.searchBar}>{searchIcon}</div>
      </div>
    </header>
  );
};

export default Header;
