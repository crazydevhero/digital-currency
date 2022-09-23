import React, { useContext } from 'react'
import styled from "styled-components";

import { Card } from './Card'
import { CurrencyContext } from '../context/CurrencyContext';

const Wrapper = styled.div`
  display: grid;
  background-color: #1d2025;
  min-height: 50px;
  max-height: 500px;
  width: 500px;
  padding: 0px 20px 20px 20px;
  grid-template-columns: repeat(2, 1fr);
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
`

export const Panel = () => {

  const { filterCoinsByQuery } = useContext(CurrencyContext)
  
  return (
    <Wrapper>
      {
        filterCoinsByQuery().map((coin, index) => (
          <Card id={coin.id} key={index} />
        ))
      }
    </Wrapper>
  )
}
