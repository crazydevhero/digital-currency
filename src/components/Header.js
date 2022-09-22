import React from 'react'
import styled from "styled-components";
// import "../styles/Header.css"
import { IoIosSettings, IoIosMic } from "react-icons/io";

const Wrapper = styled.div`
    background-color: #1a1015;
    min-height: 50px;
    min-width: 500px;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    align-items: center;
`

const CurrentYear = styled.div`
    flex: 1;
    justify-items: flex-start;
    font-weight: bold;
    font-size: 15pt;
    text-align: left;
`

const Caption = styled.div`
    flex: 1;
    justify-items: flex-center;
    font-size: 20pt;
`

const Icons = styled.div`
    flex: 1;
    justify-items: flex-end;
    font-weight: bold;
    font-size: 18pt;
    text-align: right;
`

export const Header = () => (
    <Wrapper>
        <CurrentYear>{new Date().getFullYear()}</CurrentYear>
        <Caption>Stats</Caption>
        <Icons>
            <IoIosMic />
            <IoIosSettings />
        </Icons>
    </Wrapper>
)
