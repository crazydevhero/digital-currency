import React from 'react'
import styled from "styled-components";

const Wrapper = styled.div`
    background-color: #282a35;
    min-height: 50px;
    min-width: 50px;
    padding: 20px;
    margin: 10px;
`
const More = styled.div`
    text-align: right;
`
const Description = styled.div`
    font-weight: bold;
    font-size: 18pt;
    color: white;
    text-align: left;
`
const Symbol = styled.div`
    font-weight: bold;
    font-size: 18pt;
    color: grey;
    text-align: left;
`
const Price = styled.div`
    font-size: 15pt;
    color: black;
    text-align: left;
`

export const Card = ({id}) => {
  return (
    <Wrapper>
        <More>
            <svg width="25" height="25" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 48C16 30.36 30.36 16 48 16C65.64 16 80 30.36 80 48C80 65.64 65.64 80 48 80C30.36 80 16 65.64 16 48ZM8 48C8 70.08 25.92 88 48 88C70.08 88 88 70.08 88 48C88 25.92 70.08 8 48 8C25.92 8 8 25.92 8 48ZM48 44H32V52H48V64L64 48L48 32V44Z" fill="white" />
            </svg>
        </More>
        <Description>{'Bitcoin'}</Description>
        <Symbol>{'BTC'}</Symbol>
        <Price>${'16372.828349'}</Price>
    </Wrapper>
  )
}
