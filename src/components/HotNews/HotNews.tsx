import React from 'react'
import styles from './HotNews.module.css'
import {FaCircleArrowLeft} from "react-icons/fa6"


const HotNews:React.FC = () =>{

    return (
        <div className={styles.hotNews}>
            <h2> CNN LIVE</h2>
            <h3> Nestor brings heavy rain,</h3>
            <h3> possible tornadoes</h3>
            <button><a href='button'><FaCircleArrowLeft/> <span>Unmute</span></a> </button>
        </div>
    )
}

export default HotNews