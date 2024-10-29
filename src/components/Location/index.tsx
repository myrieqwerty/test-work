import { LocationIcon } from "../../icons/location";
import s from "./Location.module.scss";

export const Location = () => (
  <div className={s.location}>
    <LocationIcon />
    Москва и область
  </div>
);
