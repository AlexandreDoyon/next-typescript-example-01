import { useEffect } from "react"
import styles from "../styles/Guides.module.css";


export default function Guides() {

  useEffect(() => {
    fetch('/.netlify/functions/guides')
      .then(res => res.json())
      .then(data => console.log(data))
  },[])

  return (
    <div className={styles.guides}>
      <h2>All guides</h2>
    </div>
  )
}
