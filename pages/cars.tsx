import cars from '@/service/carsInfo'
import { Container } from '@mui/material'
import Image from 'next/image'
import styles from 'styles/Home.module.css'

const Cars = () => {
  return (
    <Container>
        <h1 className={styles.carsPageH1}>Cars:</h1>
        <div className={styles.carsPageGrid}>
            {cars.map((item) => {
                return(
                    <div className={styles.carsPageBox}>
                        <Image className={styles.carsPageImage} src={item.carImage} height={500} width={100} alt="21312"/>
                        <div className={styles.textsCarBlog}>
                                <div className={styles.gridBoxText}>
                                <div className={styles.topSideCarBox}>
                                    <h2>{item.name}</h2>
                                    <h4>{item.price}</h4>
                                </div>

                                <div className={styles.grigBoxCarInfo}>
                                    <p>
                                        Year of issue: { item.yearOfIssue }
                                    </p>
                                    <p>
                                        Mileage: { item.mileAge}km
                                    </p>
                                    <p>
                                        Max speed: { item.maxSpeed}km per hour
                                    </p>
                                </div>
                            </div>

                            </div>
                    </div>
            )
            })}
        </div>
    </Container>
  )
}

export default Cars