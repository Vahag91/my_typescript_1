import React from "react"
import Header from "../Header"
import HotNews from "../HotNews"
import NewsCard from "../NewsCard"
import styles from './App.module.css'

interface News {
    image: string;
    content: string;
    title: string;
    publishDate: string
}


const App: React.FC = () => {

    const info: News[] = [

        { image: "../", content: " barev dzez", title: "barevner", publishDate: "2023-19-20" },
        { image: "../", content: " barev dzez", title: "barevner", publishDate: "2023-19-20" },
        { image: "../", content: " barev dzez", title: "barevner", publishDate: "2023-19-20" },
        { image: "../", content: " barev dzez", title: "barevner", publishDate: "2023-19-20" }
    ]



    return (
        <div className={styles.main}>
            <Header />
            <HotNews />
            <div className={styles.cards}>
            {info.map((item: News) => {
                return (
                    <NewsCard data={item} />
                )
            })}
            </div>
         

        </div>
    )
}

export default App