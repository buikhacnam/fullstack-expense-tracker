import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function AddTransaction() {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)
    const {addTransaction} = useContext(GlobalContext)
    function handleSubmit(e) {
        e.preventDefault();
        addTransaction({id: Math.floor(Math.random() * 1000000000000), text, amount: +amount, })
        setText('')
        setAmount('')
    }
    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='text'>Text</label>
                    <input type='text' value={text} onChange={e => setText(e.target.value)} placeholder='Enter text...' />
                </div>
                <div className='form-control'>
                    <label htmlFor='amout'>Amount (K)</label>
                    <input type='number' value={amount} onChange={e => setAmount(e.target.value)} placeholder='Enter amount...' />
                </div>
                <button className='btn' type='submit'>Add transaction</button>
            </form>
        </div>
    )
}
