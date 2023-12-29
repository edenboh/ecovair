import Image from 'next/image'
import styles from './page.module.css'
import Link from "next/link";

export default function Home() {
  return (

    <main className={styles.main}>
      <div className={styles.description}>

        <p>coucou vous allez bien ?</p>
          <Link href={"/blog"}>voir mon blog</Link>
          <Link href={"/products"}>voir mon produit</Link>
      </div>
    </main>
  )

}
