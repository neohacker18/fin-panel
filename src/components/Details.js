import React from 'react'
import styled from 'styled-components'

const Details = () => {
  return (
    <Container>
        <DetailCard>
            <li>Name</li>
            <li>Country</li>
            <li>Currency</li>
            <li>Exchange</li>
            <li>IPO Date</li>
            <li>Market Capitalisation</li>
            <li style={{borderBottom: "none"}}>Industry</li>
        </DetailCard>
    </Container>
  )
}

const Container=styled.div`
    width: 500px;
    height: 370px;
    position: absolute;
    right: 50px;
    top: 330px;
    color: #d7d7d9;
    font-size: 1.1rem;
    border: 1px solid #3c3c3c;
    border-radius: 2%;
    padding: 20px 10px;
`

const DetailCard=styled.ul`
    li{
        padding: 10px;
        border-bottom: 1px solid #383838;
    }
`

export default Details