import React from 'react'
import styled from 'styled-components'
import { dummyCompanyProfileData } from '../constants/dummyData'
import DetailLi from './DetailLi'

const Details = () => {
    
    const {name,country,currency,exchange,ipo,marketCapitalization,finnhubIndustry} = dummyCompanyProfileData;
  return (
    <Container>
        <DetailCard>
            <li><DetailLi name={name} detail="Name"/></li>
            <li><DetailLi name={country} detail="Country"/></li>
            <li><DetailLi name={currency} detail="Currency"/></li>
            <li><DetailLi name={exchange} detail="Exchange"/></li>
            <li><DetailLi name={ipo} detail="IPO Date"/></li>
            <li><DetailLi name={marketCapitalization} detail="Market Capitalization"/></li>
            <li style={{borderBottom: "none"}}><DetailLi name={finnhubIndustry} detail="Industry"/></li>
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