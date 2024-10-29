import { Link, useLocation } from "react-router-dom";
import { MENU_ITEMS } from "../../lib/menu-items";

import s from "./MenuList.module.scss";
import cn from "classnames";
import { FC } from "react";
import { Location } from "../Location";

type Props = {
  isOpen: boolean;
};

export const MenuList: FC<Props> = ({ isOpen }) => {
  const { pathname } = useLocation();
  const decodedPathname = decodeURI(pathname);

  return (
    <div className={cn(s.wrapper, isOpen ? s.open : "")}>
      <div className={s.menu}>
        <ul className={s.list}>
          {MENU_ITEMS.map((item) => (
            <li>
              <Link
                className={cn(
                  s.link,
                  "/" + item.title === decodedPathname ? s.active : ""
                )}
                key={item.id}
                to={item.title}
              >
                <span>{item.title}</span>
                <div className={s.selector}></div>
              </Link>
            </li>
          ))}
        </ul>
        <div className={s.location}>
          <Location />
        </div>
      </div>
    </div>
  );
};
