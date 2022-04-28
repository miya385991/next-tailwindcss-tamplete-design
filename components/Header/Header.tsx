import Link from "next/link";
import Image from "next/image";
import s from "./Header.module.css";
import { FC, ReactNode, ReactElement } from "react";

interface Props {
  title: string;
  image: string;
  nabvar:Array<string>
 }

const Header = ({title,image,nabvar}:Props) => {
  return (
    <header className={s.root}>
      <div className={s.content}>
        <Link href="/">
          <a className={s.titleLink}>
            <Image src={image} width={40} height={40} alt="logo" />
            <span className={s.span}>{title}</span>
          </a>
        </Link>
        <nav className={s.navbar}>
          {nabvar.map((item, index) => (
            <Link href={item.toLocaleLowerCase()} key={index}>
              <a className={s.about}>{item}</a>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
export default Header

Header.defaultProps = {
  title: "Markdown Blog",
  image: "/favicon.ico",
  nabvar:["Home","Create","About"]
}
