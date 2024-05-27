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
        <div className='alert alert-secondary'>
            <span>Currency: </span>
            <select className="currency-selection" id="inputCurrencyGroupSelect01" onChange={(event) => handleCurrencyChange(event.target.value)} >
                <option defaultValue>({newCurrency})</option>
                <option value='$' name="dollar">$ Dollar</option>
                <option value='£' name="pound">£ Pound</option>
                <option value='€' name="euro">€ Euro</option>
                <option value='₹' name="rupee">₹ Rupee</option>
            </select>
        </div>
    );
}

export default Currency;