import React, { useContext } from 'react'
import styled from "styled-components";

import Chart from "../images/chart.png";
import { CurrencyContext } from '../context/CurrencyContext';

const Wrapper = styled.div`
  background-color: #1d2025;
  min-height: 50px;
  min-width: 500px;
  padding: 20px;
  align-items: center;
`

const CaptionWrapper = styled.div`
  text-align: left;
  display: flex;
  flex-direction: row;
`

const Caption = styled.div`margin-left: 20px; flex: 1`
const CaptionTitle = styled.div`font-weight: bold; font-size: 30px`
const CaptionContent = styled.div`font-size: 20px`

const SearchBox = styled.input`
  background: transparent;
  border: 0px;
  color: white;
  font-size: 15pt;
  padding: 10px;
  width: 100%;
  flex-grow: 1;
  &:focus  {
    outline: none;
  }
`

export const Banner = () => {

  const { query, setQuery } = useContext(CurrencyContext)

  return (
    <Wrapper>
      <CaptionWrapper>
        <img src={Chart} alt='Price Chart' />
        <Caption>
          <CaptionTitle>Crypto<br />Currency</CaptionTitle>
          <CaptionContent>100 coins</CaptionContent>
        </Caption>
      </CaptionWrapper>
      <SearchBox
        placeholder='Search by Crypto name (eg: BNB)'
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
    </Wrapper>
  )
}
