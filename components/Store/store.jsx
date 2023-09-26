import styles from './Card.module.css'

export default function Card({ title, image, description }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}
