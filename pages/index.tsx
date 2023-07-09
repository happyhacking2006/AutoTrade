import Head from 'next/head';
import React from 'react'
import { Container } from '@mui/material';
import Main from '@/components/main/main';



const IndexPage = () => {
  return (
    <>
      <Head>
        <title>AutoTrade</title>
      </Head>
      
      <Main />

      </>
  );
}

export default IndexPage;