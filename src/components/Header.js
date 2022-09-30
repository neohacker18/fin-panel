import React from 'react'
import Button from './Button'
import styled from 'styled-components'

const Header = () => {
  return (
    <Container>
        <Button text="1D"/>
        <Button text="1W"/>
        <Button text="1M"/>
        <Button text="1Y"/>
    </Container>
  )
}

const Container=styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
    display: flex;
    Button{
        margin: 0px 5px;
    }
`
export default Header