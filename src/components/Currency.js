import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {      
        const { currency } = useContext(AppContext);
        const [newCurrency, setNewCurrency] = useState(currency);
        const { dispatch } = useContext(AppContext);

        const handleCurrencyChange = (event) => {
        setNewCurrency(event.target.value);
        dispatch({
            payload: newCurrency

        });
    }
    return (
        <div className='currency-input'>
            <span>Currency: ({currency})</span>
            <input type="string" value={newCurrency} onChange={handleCurrencyChange}></input>
        </div>
    );
}

export default Currency;