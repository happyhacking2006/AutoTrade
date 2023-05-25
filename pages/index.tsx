import Head from 'next/head';
import React from 'react'
import { Container } from '@mui/material';
import Hero from 'components/hero/hero';
import AboutUs from 'components/AboutUs/AboutUs';
import Cars from 'components/cars/cars';


const IndexPage = () => {
  return (
    <>
      <Head>
        <title>AutoTrade</title>
      </Head>
      
      <Hero />
      <AboutUs />
      <Cars />

      </>
  );
}

export default IndexPage;