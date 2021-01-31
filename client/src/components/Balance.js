import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
export default function Balance() {
    const {transactions} = useContext(GlobalContext)
    const allTransaction = transactions.map(transaction => {
        return transaction.amount
    })
    const totalTransaction = allTransaction.reduce((total, each) => {
        return total + each
    },0)
 
    return (
        <div>
            <h4>Your Balance</h4>
            <h1>{totalTransaction}K</h1>
        </div>
    )
}
