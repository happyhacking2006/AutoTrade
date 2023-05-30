import styles from '../../styles/Home.module.css'
import GarageIcon from '@mui/icons-material/Garage';
import Link from 'next/link';
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const Navbar = () => {

  const SideBar = [
    {
        title: "Cars",
        path: "/cars",
        id: 2
    },
    {
        title: "About",
        path: "/about",
        id: 3
    },
    {
      title: "Account",
      path: "/account",
      id: 4
    },
    {
    title: "Sign In",
    path: "/signIn",
    id: 5,
    
  },
]
  
  const [sideBar, setSideBar] = useState(false)
  const showSideBar = () => setSideBar(!sideBar)

  const [theme, setTheme] = useState(true)
  const changeTheme = () => setTheme(!theme)



  return (
    <>
        <div className={styles.navbar}>
          <h1 className={styles.logo}>Aut<GarageIcon className={styles.logoIcon}/>  Trade</h1>

          <ul className={styles.navbarNav}>
            <li className={styles.items}>Cars</li>
            <li className={styles.items}>About</li>
            <li className={styles.items} onClick={changeTheme}>{theme ? <NightsStayIcon /> : <WbSunnyIcon />}</li>
            <li className={styles.items}>Sign In</li>
            <li className={styles.items} onClick={showSideBar}><MenuIcon className={styles.menuIcon}/></li>

          </ul>

          <div className={sideBar ? 'side-menu active' : 'side-menu'}>
            <Box className="CloseIconBox">
              <CloseIcon className='closeIcon' onClick={showSideBar} />
            </Box>
            <div className="SideBarNav">
              {
                SideBar.map(
                  (item, index) => {
                    return(
                      
                        <Link key={item.id} className="hamburgerLink" href={item.path}>
                          
                            {item.title}
                          
                        </Link>
                      
                    )
                  }
                )
              }
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar