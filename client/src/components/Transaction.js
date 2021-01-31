import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function Transaction({transaction}) {
    const {deleteTransaction} = useContext(GlobalContext)
    const sign = transaction.amount < 0 ? '' : '+'
    return (
        <li className={sign ? 'plus' : 'minus'}>
            {transaction.text} <span>{sign}{transaction.amount}K</span><button onClick={() => deleteTransaction(transaction._id)} className='delete-btn'>x</button>
        </li>
    )
}
