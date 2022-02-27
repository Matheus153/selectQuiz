
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

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.25rem;
`

export default function Home() {
  return (
    <Father>

      <Main>
        <h1>Escolha seu quiz!</h1>

        <Description> todos os quizzes disponíveis abaixo.</Description>

       <Quizes>
         <Quizes.Card href={db.links.bts}>
            <h3>BTS &rarr; <Quizes.Logo src={db.icons.bts} alt="bts" width="50px"/></h3>
            <p>{db.descriptions.bts}</p>
         </Quizes.Card>

         <Quizes.Card  href={db.links.rpg}>
            <h3>RPG &rarr;  <Quizes.Logo src={db.icons.rpg} alt="rpg-icon"/></h3>
            <p>{db.descriptions.rpg}</p>
         </Quizes.Card>

         <Quizes.Card href={db.links.harry}>
            <h3>Harry Styles &rarr; <Quizes.Logo src={db.icons.harry} alt="watermelon"/></h3>
            <p>{db.descriptions.harry}</p>
         </Quizes.Card>

         <Quizes.Card href={db.links.pink}>
            <h3>Black Pink &rarr; <Quizes.Logo src={db.icons.pink} alt="pink"/></h3>
            <p>{db.descriptions.pink}</p>
         </Quizes.Card>

         <Quizes.Card href={db.links.snk}>
            <h3>Shingenki no Kyoshin &rarr; <Quizes.Snk src={db.icons.snk} alt="snk"/></h3>
            <p>{db.descriptions.snk}</p>
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
