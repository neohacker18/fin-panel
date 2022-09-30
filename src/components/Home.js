import React from 'react'
import SearchBar from './SearchBar'
import styled from 'styled-components'
import DarkMode from './DarkMode'
import LightMode from './LightMode'
import Card from './Card'

const Home = () => {
  return (
    <Container>
      <SearchBar/>
      <ModeIcon>
        <LightMode/>
        <DarkMode/>
      </ModeIcon>
      <Card/>
    </Container>
  )
}

const Container=styled.div`
  height: 100vh;
  background-color: rgb(16,25,39);
`
const ModeIcon=styled.div`
  display: flex;
  justify-content: space-between;
  width: 80px;
  backgroundColor:white;
  position: absolute;
  top: 60px;
  right:100px;
`
export default Home