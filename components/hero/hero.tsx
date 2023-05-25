import styles from 'styles/Home.module.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Hero = () => {
  return (
    <div className={styles.hero}>
        <div className={styles.welcome}>
            <p>
            Buy the perfect<br />
            car for your life
                
            </p>

            <div className={styles.buttonsHero}>
                <button>Buy auto</button> 
                <button>Sell auto</button>  
            </div>
            
            <KeyboardArrowDownIcon className={styles.downIcon} sx={{ fontSize: 40 }} />
            
        </div>
    </div>
  )
}




export default Hero;