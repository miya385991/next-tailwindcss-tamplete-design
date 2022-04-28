import Head from "next/head";
import { FC,  ReactNode } from "react";
import s from "./Layout.module.css";
import Header from "../Header/index";




const Layout:FC<any> = ({children})=> {
  return (
    <div>
      <Head>
        <title>next tamplete desigin</title>
        <meta name="keywords" content="" />
        <meta name="description" content="next tamplete desigin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={s.root}> {children} </main>
    </div>
  );
}

export default Layout;

