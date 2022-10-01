import React from 'react'
import styled from 'styled-components';

const DetailLi = (props) => {
  return (
    <Container>
        <h5>{props.detail}</h5>
        <h5>{props.name}</h5>
    </Container>
  )
}

const Container=styled.div`
    display: flex;
    justify-content: space-between;
`

export default DetailLi