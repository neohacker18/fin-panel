import React from 'react'
import Chart from './Chart'
import Header from './Header'
import styled from 'styled-components'

const Card = () => {
  return (
    <Container>
        <Header/>
        <Chart/>
    </Container>
  )
}

const Container=styled.div`
    height: 550px;
    width: 900px;
    border: 1px solid #3c3c3c;
    border-radius: 1%;
    position: absolute;
    left: 40px;
    top: 150px;
`

export default Card