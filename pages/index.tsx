import type { InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Layout,Sidebar } from '../components'


export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Sidebar title={['Header', 'Sidebar']} />
    </div>
  );
}

Home.Layout = Layout