import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import Form from './Form';
import IncomeItem from './IncomeItem';
import ExpenseForm from './ExpenseForm';
import { useGlobalContext } from '../context/globalContext'; // Importing the context

const Expenses = () => {
  const { totalExpenses, expenses, deleteExpense } = useGlobalContext(); // Using the context

  return (
    <ExpensesStyled>
        <InnerLayout>
                <h1>Expenses</h1>
                <h2 className="total-income">Total Expense: <span>${totalExpenses()}</span></h2>
                <div className="income-content">
                    <div className="form-container">
                        <ExpenseForm />
                    </div>
                    <div className="incomes">
                        {expenses.map((income) => {
                            const {_id, title, amount, date, category, description, type} = income;
                            return <IncomeItem
                                key={_id}
                                id={_id} 
                                title={title} 
                                description={description} 
                                amount={amount} 
                                date={date} 
                                type={type}
                                category={category} 
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteExpense}
                            />
                        })}
                    </div>
                </div>
        </InnerLayout>
    </ExpensesStyled>
  )
}

const ExpensesStyled = styled.div`
    
`

export default Expenses;
