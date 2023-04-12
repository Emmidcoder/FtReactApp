import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import './Expenses.css'
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
    const [selectedYear, setSelectYear] = useState(2020);

    const yearSelectHandler = (selectedYear) => {
        setSelectYear(selectedYear);

    }

    const filteredExpense = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === selectedYear
    })

    

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={selectedYear}
                    onYearSelect={yearSelectHandler}
                />
 
                <ExpensesList items={filteredExpense} />
            </Card>
        </div>
    )
}

export default Expenses;