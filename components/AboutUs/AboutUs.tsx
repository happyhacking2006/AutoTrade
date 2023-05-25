import styles from 'styles/Home.module.css';
import { Container } from '@mui/material';
import { Stack } from '@mui/material';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className={styles.TopBrands}>

      <Container>
        <h1 className={styles.aboutUsHeader}>
          About us
        </h1>

        <p className={styles.aboutUsInfo}>
          AutoTrader is a site where you can buy a car at a bargain price and sell your car at a profit.
          We have been working since 2008, specializing in the purchase and sale of cars. We have the most
          famous and high-quality car brands, we wish you good luck finding your future car.
        </p>
      </Container>
    </div>
  )
}

export default AboutUs