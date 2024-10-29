import { FC, ReactNode } from "react";
import s from "./Container.module.scss";
import cn from "classnames";

type Props = {
  children: ReactNode;
  className?: string;
};

export const Container: FC<Props> = ({ children, className }) => {
  return <section className={cn(s.container, className)}>{children}</section>;
};
