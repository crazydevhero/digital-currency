import { createContext, useState, useEffect } from "react";

export const CurrencyContext = createContext()

export const CurrencyProvider = ({children}) => {
    const [coins, setCoins] = useState([])
    const [query, setQuery] = useState('')

    const fetchCoins = () => {
        fetch('https://api.coincap.io/v2/assets')
        .then(res => res.json())
        .then(res => setCoins(res.data))
        .catch(error => console.log(`API call error: ${error}`))
    }
    const filterCoinsByQuery = () => {
        if ( !query )   return coins;
        return coins?.filter((value, index) => 
            value.name.toLowerCase().includes(query) || 
            value.symbol.toLowerCase().includes(query)
        )
    }
    const coinForID = (id) => {
        return coins?.filter((value, index) => value.id === id)
    }

    useEffect(() => {
      fetchCoins()
    }, [])

    return (
        <CurrencyContext.Provider value={{
            coins, filterCoinsByQuery, coinForID,
            query, setQuery
        }}>
            {children}
        </CurrencyContext.Provider>
    )
    
}