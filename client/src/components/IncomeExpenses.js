import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
export default function IncomeExpenses() {
    const {transactions} = useContext(GlobalContext)
    const money = transactions.map(transaction => transaction.amount)
    const income = money.filter(amount => amount >= 0).reduce((total, each) => total + each, 0)
    const expense = money.filter(amount => amount < 0).reduce((total, each) => total + each, 0)
    return (
        <div className='inc-exp-container'>
            <div>
                <h4>Income</h4>
                <p className='money plus'>{income}K</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className='money minus'>{expense}K</p>
            </div>
        </div>
    )
}
