import { Link, useLocation } from "react-router-dom";
import { HamburgerIcon } from "../../icons/hamburger";
import s from "./Header.module.scss";
import { BellIcon } from "../../icons/bell";
import { useEffect, useState } from "react";
import { MenuList } from "../MenuList";
import { Container } from "../Container";
import { CloseIcon } from "../../icons/close";
import { Location } from "../Location";

export const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={s.wrapper}>
      <Container className={s.header}>
        <Link to={"/"} className={s.logo}>
          <img src="/logo.svg" alt="" />
        </Link>
        <div className={s.actions}>
          <div className={s.location}>
            <Location />
          </div>
          <div className={s.notification}>
            <BellIcon />
          </div>
          <div onClick={toggleOpenMenu} className={s.menu}>
            {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </div>
        </div>
      </Container>
      <MenuList isOpen={isMenuOpen} />
    </header>
  );
};
