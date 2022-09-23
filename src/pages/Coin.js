import React from 'react'
import { useParams } from "react-router-dom";

import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import Info from '../components/Info';
import './App.css';

const Coin = () => {

    const { id } = useParams()

    return (
        <div className="App">
          <div className="App-wrapper">
            <Header />
            <Banner />
            <Info id={id} />
          </div>
        </div>
      );
}

export default Coin