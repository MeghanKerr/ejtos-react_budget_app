import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch } = useContext(AppContext);
    const { expenses } = useContext(AppContext);
    const maxValue = 20000;
    
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {

        if(event.target.value > 20000) {
            alert("The Budget cannot exceed "+ budget.currency + maxValue);
            return;
        }

        if (expenses) {
            const totalExpenses = expenses.reduce((total, item) => {
                return (total = total + item.cost);
            }, 0);
            if( totalExpenses > event.target.value)
            {
                alert("You cannot reduce the Budget value lower than the already spent amount of "+ budget.currency + totalExpenses);
                return;
            }
        };

        setNewBudget(event.target.value);

        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value,
        });
    }

    return (
    <div className='alert alert-secondary'>
        <span>Budget: {budget.currency}{budget} </span>
        <input type="number" step="10" min= "0" max="20000" value={newBudget} onChange={handleBudgetChange}></input>
    </div>    );

};

export default Budget;