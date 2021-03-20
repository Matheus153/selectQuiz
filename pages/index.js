
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import db from '../db.json'



export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Escolha seu quiz!
        </h1>

        <p className={styles.description}>
          todos os quizes disponíveis logo abaixo.
        </p>

        <div className={styles.grid}>
          <a href="http://quiz-srnovato.vercel.app/" className={styles.card}>
            <h3>Quiz BTS &rarr; <img src={"bts-ico.png"} alt="bts" width="50px"/></h3>
            <p>Um jogo divertido para os Army's, amantes de BTS</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Quiz RPG &rarr;  <img src={"rpg-icon.png"} alt="rpg-icon"/></h3>
            <p>Um quiz espetacular para aprender mais sobre este rico universo!</p>
          </a>

          <a
            href="https://quiz-harry-styles.vercel.app"
            className={styles.card}
          >
            <h3>Quiz Harry Styles &rarr; <img src={"favicon.png"} alt="watermelon"/></h3>
            <p>Descubra curiosidades sobre seu cantor favorito.</p>
          </a>

         
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src={db.theme.quizlogo} alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
