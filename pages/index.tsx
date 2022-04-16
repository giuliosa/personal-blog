import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar/navbar'
import HomePage from '../components/home/home'

export default function Home() {
  return (
    <Layout>
      <Head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        </style>
      </Head>
      <HomePage></HomePage>
      <Navbar></Navbar>
    </Layout>
  )
}
