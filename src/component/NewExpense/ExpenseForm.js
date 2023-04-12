import React, { useState } from "react";

import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enterTitle, setEnteredTitle] = useState('')
    const [enterAmount, setEnteredAmount] = useState('')
    const [enterDate, setEnteredDate] = useState('')

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value)
    }

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value)
    }

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()

        const expenseData = {
            title: enterTitle,
            amount: enterAmount,
            date: new Date(enterDate),
        }

        props.onSaveExpenseData(expenseData);

        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enterTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min='0.01' step='0.01' value={enterAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min='2019-01-01' max='2022-01-01' value={enterDate} onChange={dateChangeHandler} />
                </div>
            </div>

            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expenses</button>
            </div>
        </form>
    )
}

export default ExpenseForm;