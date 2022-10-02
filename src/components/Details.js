import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import { fetchAssetDetails } from '../api/asset-api'
import { dummyCompanyProfileData } from '../constants/dummyData'
import DetailLi from './DetailLi'

const Details = (props) => {
    const {symbol}=props;
    const [cardDetails,setCardDetails] = useState([])
    useEffect(() => {
        const updateStockCard=async()=>{
            try {
                const result=await fetchAssetDetails(symbol);
                setCardDetails(result);
            } catch (error) {
                setCardDetails([]);
                console.log(error);
            }
            return () => {
            }
        }
        updateStockCard();
    }, [symbol])
  return (
    <Container>
        <DetailCard>
            <li><DetailLi name={cardDetails.name} detail="Name"/></li>
            <li><DetailLi name={cardDetails.country} detail="Country"/></li>
            <li><DetailLi name={cardDetails.currency} detail="Currency"/></li>
            <li><DetailLi name={cardDetails.exchange} detail="Exchange"/></li>
            <li><DetailLi name={cardDetails.ipo} detail="IPO Date"/></li>
            <li><DetailLi name={cardDetails.marketCapitalization} detail="Market Capitalization"/></li>
            <li style={{borderBottom: "none"}}><DetailLi name={cardDetails.finnhubIndustry} detail="Industry"/></li>
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