import styled from 'styled-components'

const Quizes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  margin-top: 3rem;
  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`

Quizes.Card = styled.a`
  margin: 1rem;
  flex-basis: 45%;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border-radius: 10px;
  transition: color 0.3s ease /* border-color 0.15s ease */;
  background-color: #202125;
  
  &:hover,
  &:focus,
  &:active {
    color: #fefefe;
    background-color: #242528;
  }

  h3 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }
`

Quizes.Logo = styled.img`
  width: 50px;    
`

Quizes.Snk = styled.img `
  width: 30px;
`

export default Quizes