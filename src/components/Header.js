import React from 'react'
import "../styles/Header.css"
import { IoIosSettings, IoIosMic } from "react-icons/io";

export const Header = () => (
    <div className='wrapper'>
        <div className='left'>{new Date().getFullYear()}</div>
        <div className='center'>Stats</div>
        <div className='right'>
            <IoIosMic />
            <IoIosSettings />
        </div>
    </div>
)
