
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import db from '../db.json'

import Father from '../src/components/Father'
import Quizes from '../src/components/Quizes'
import Footer from '../src/components/Footer'

const Main = styled.div`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function Home() {
  return (
    <Father>

      <Main>
        <h1>Escolha seu quiz!</h1>

        <p className={styles.description}>
          todos os quizes disponíveis logo abaixo.
        </p>

       <Quizes>
         <Quizes.Card href={db.links.bts}>
            <h3>Quiz BTS &rarr; <img src={db.icons.bts} alt="bts" width="50px"/></h3>
            <p>{db.descriptions.bts}</p>
         </Quizes.Card>

         <Quizes.Card  href={db.links.rpg}>
            <h3>Quiz RPG &rarr;  <img src={db.icons.rpg} alt="rpg-icon"/></h3>
            <p>{db.descriptions.rpg}</p>
         </Quizes.Card>

         <Quizes.Card href={db.links.harry}>
            <h3>Quiz Harry Styles &rarr; <img src={db.icons.harry} alt="watermelon"/></h3>
            <p>{db.descriptions.harry}</p>
         </Quizes.Card>
         
       </Quizes>

      </Main>

      <Footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src={db.theme.quizlogo} alt="Novato Logo" height="20em" />
        </a>
      </Footer>
  
    </Father>
  )
}
