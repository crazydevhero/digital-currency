import React, { useContext } from 'react'
import styled from "styled-components";

import { CurrencyContext } from "../context/CurrencyContext";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const Line = styled.div`
    display: flex;
    padding: 10px;
    border-bottom: 1px solid grey;
    font-size: 12pt;
`
const Key = styled.div`
    flex: 1;
    justify-items: flex-start;
    text-align: left;
`
const Value = styled.div`
    flex: 1;
    justify-items: flex-end;
    text-align: right;
    font-weight: bold;
`

const Bar = ({itemKey, itemValue}) => (
    <Line>
        <Key>{itemKey}</Key>
        <Value>{itemValue}</Value>
    </Line>
)

const Info = ({id}) => {
    const { coinForID } = useContext(CurrencyContext);
    const coin = coinForID(id)[0];
    
    return (
        <>
            {
                coin &&
                <Wrapper>
                    <Bar itemKey='Name' itemValue={coin.name} />
                    <Bar itemKey='Symbol' itemValue={coin.symbol} />
                    <Bar itemKey='Rank' itemValue={coin.rank} />
                    <Bar itemKey='Supply' itemValue={Number(coin.supply).toFixed(4)} />
                    <Bar itemKey='Market Capital(USD)' itemValue={Number(coin.marketCapUsd).toFixed(4)} />
                    <Bar itemKey='Volume(USD) 24Hrs' itemValue={Number(coin.volumeUsd24Hr).toFixed(4)} />
                    <Bar itemKey='Price(USD) 24Hrs' itemValue={Number(coin.priceUsd).toFixed(8)} />
                    <Bar itemKey='Change Percent(24Hr)' itemValue={Number(coin.changePercent24Hr).toFixed(8)} />
                    <Bar itemKey='VWAP(24Hr)' itemValue={Number(coin.vwap24Hr).toFixed(8)} />
                </Wrapper>      
            }
        </>
    )
}

export default Info