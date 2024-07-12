import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => { 
        const { currency, dispatch } = useContext(AppContext); 
        const [isOpen, setIsOpen] = useState(false);

        const getCurrencyLabel = ()=> {
            switch(currency){
              case '$' :
                return '$ Dollar'
              case '£' :
                return '£ Pound'
              case '€' :
                return '€ Euro'
              case '₹' :
                return '₹ Ruppee'
              default:
                return ''
            }
          }

        const handleCurrencyChange = (currency) => {
           dispatch({
                type: 'CHG_CURRENCY',
                payload: currency
            });
            setIsOpen(!isOpen);
        }
    return (
        <div id="currency-menu" className="dropdown" style={{ cursor: 'pointer' }}>
        <button
          id="currency-menu-button"
          className="btn dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ backgroundColor: '#93e399', color: '#fff' }}
          onClick={() => setIsOpen(!isOpen)}
        >
          Currency {'('}{getCurrencyLabel()}{')'}
        </button>
        <ul className={`custom-menu dropdown-menu ${isOpen ? 'show' : ''} `}
            style={{ backgroundColor: '#93e399'}}>
          <li>
            <button
              className="dropdown-item"
              type="button"
              onClick={() => handleCurrencyChange('$')}
            >
             $ Dollar
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              type="button"
              onClick={() => handleCurrencyChange('£')}
            >
             £ Pound
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              type="button"
              onClick={() => handleCurrencyChange('€')}
            >
             € Euro
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              type="button"
              onClick={() => handleCurrencyChange('₹')}
            >
             ₹ Ruppee
            </button>
          </li>
        </ul>
      </div>
    );
}



export default Currency;