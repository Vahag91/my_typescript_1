import React from "react"
import styles from './NewsCard.module.css'

interface NewsCardProps {
data: {
    image: string;
    content: string;
    title: string;
    publishDate: string
}
}


const NewsCard: React.FC<NewsCardProps> = ({data}) => {

const {image,content,title,publishDate} = data
    return (
        <div className={styles.card}>
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{content}</p>
        <p className={styles.date}>Published on: {publishDate}</p>
        <a href='button' className={styles.read_more}>Read more</a>
      </div>
    )
}


export default NewsCard