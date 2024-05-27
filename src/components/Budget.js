import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);
    const { expenses } = useContext(AppContext);
    const { currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const maxValue = 20000;
    const handleBudgetChange = (event) => {

        if(event.target.value > 20000) {
            alert("The Budget cannot exceed £"+maxValue);
            return;
        }
        if (expenses) {
            const totalExpenses = expenses.reduce((total, item) => {
                return (total = total + item.cost);
            }, 0);
            if( totalExpenses > event.target.value)
            {
                alert("You cannot reduce the Budget value lower than the already spent amount of £"+totalExpenses);
                return;
            }
        };
        setNewBudget(event.target.value);
        dispatch({
            payload: newBudget

        });
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}{budget} </span>
<input type="number" step="10" min= "0" max="20000" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
