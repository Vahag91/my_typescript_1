import React from "react"
import { FaApple } from "react-icons/fa6"
import styles from './Header.module.css'

const Header: React.FC = () => {

    return (
        <div className={styles.menu}>

            <div className={styles.logo}>
                <a href="#">
                    <span><FaApple /></span>
                </a>
            </div>

            <div className={styles.menuList}>
                <div className={styles.input}>
                    <input type="text" placeholder="Enter text..." style={{height: "100%"}}/>
                    <button> Submit</button>
                </div>

                <nav>
                    <ul>
                        <li> <a href="#">Home</a> </li>
                        <li>  <a href="#">Contact</a></li>
                        <li> <a href="#">About Us</a></li>
                        <li>  <a href="#">Pricing</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header