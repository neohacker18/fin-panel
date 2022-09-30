import React from 'react'
import styled from 'styled-components';

const Button = (props) => {
    const {text}=props;
  return (
    <ButtonClass>
        <button className="font-semibold py-1.5 px-5 border border-blue-400 rounded shadow">
        {text}    
        </button>
    </ButtonClass>
  )
}

const ButtonClass=styled.div`
    button{
        color: white;
        background-color: rgb(16,25,39);
    }
`

export default Button