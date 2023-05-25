import styles from 'styles/Home.module.css'
import cars from 'service/carsInfo'
import { Container } from '@mui/material';
import Image from 'next/image';
import { Input } from '@mui/material';
import { useState } from 'react';


const Cars = () => {

    console.log(cars);
    const [search, setSearch] = useState('')
    const [amount, setAmount] : any = useState(5)
    console.log(search);
    
  return (
    <div className={styles.carsPage}>   
        <Container>

        <div className={styles.searchPanel}>
            <h1 className={styles.headerCarsPage}>
                For sale:
            </h1>

            <Input className={styles.InputSearchPanel}  
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search...'
                sx={{color: 'white',}} 
            />
            
        </div>  
      

            {cars.filter((item)=> {
                return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search)
            }).map((item) => {
                return(
                    <div key={item.id} className={styles.cars_gridBox}>
                        <div className={styles.carBlog}>

                            <div className={styles.gridBoxImage} >
                                <Image className={styles.carsImage} src={item.carImage} height={100} width={100} alt="21312"/>
                            </div>

                            
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
                        

                    </div>
                )
            }).slice(0, amount)
            }

            <div className={styles.changePanels}>
                <button onClick={()=>{setAmount(amount + 5)}}>More</button>

            </div>
        </Container>

        </div>
    )
}

export default Cars