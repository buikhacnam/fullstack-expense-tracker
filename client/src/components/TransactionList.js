import React, {useContext, useEffect} from 'react'
import {GlobalContext} from '../context/GlobalState'
import Transaction from './Transaction'

export default function TransactionList() {
    const {transactions, getTransactions, loading, isDeleting} = useContext(GlobalContext)

    useEffect(() => {
        getTransactions()
        // eslint-disable-next-line
    }, [])
    return (
        <div>
            <h3>History</h3>
            {isDeleting && <h3>Deleting...</h3>}
            {loading ? 
                <h3>Loading...</h3>
                :
                <ul className='list'>
                    {transactions.map(transaction => {
                        return  <Transaction transaction={transaction} key={transaction._id}/>
                    })}
                </ul>
            }
           
        </div>
    )
}
