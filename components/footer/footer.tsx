import styles from 'styles/Home.module.css';
import { format } from 'date-fns';

const Footer = () => {
  return (
    <div className={styles.footer}>
        <p>© {format(new Date(), 'yyyy')} Nursultan Murabaev. All Right Reserved</p>
    </div>
  )
}

export default Footer