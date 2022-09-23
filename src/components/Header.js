import React from 'react'
import styled from "styled-components";
import { IoIosSettings, IoIosMic } from "react-icons/io";
import { useLocation, useNavigate } from 'react-router-dom'
import { BiArrowBack } from "react-icons/bi";

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
    padding-left: 10px;
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

export const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isInfo = location.pathname.includes('/coin/');

    return (
        <Wrapper>
            {isInfo && <BiArrowBack onClick={() => navigate(-1)} />}
            <CurrentYear>{new Date().getFullYear()}</CurrentYear>
            <Caption>Stats</Caption>
            <Icons>
                <IoIosMic />
                <IoIosSettings />
            </Icons>
        </Wrapper>
    )
}