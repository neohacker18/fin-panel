import React from 'react'
import styled from 'styled-components'

const StockCard = () => {
  return (
    <Container>
        <Title>GOOG</Title>
        <PriceHead>
            <Cost>$</Cost>
            <Percentage>(%)</Percentage>
        </PriceHead>
    </Container>
  )
}

const Container=styled.div`
    width: 500px;
    height: 150px;
    position: absolute;
    right: 50px;
    top: 150px;
    color: #E7E6E7;
    font-size: 1.1rem;
    border: 1px solid #3c3c3c;
    border-radius: 2%;
    padding: 20px 25px;
`
const Title=styled.div`
    font-size: 2rem;
    color: #919191;
`
const PriceHead=styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0px;
    font-size: 2rem;
    `
    const Cost=styled.div`
`
const Percentage=styled.div`
    color: limegreen;
`

export default StockCard