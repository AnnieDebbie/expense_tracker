import React, { useState } from "react";

import ExpenseItem1 from "./ExpenseItem1";
import Card1 from "../UI/Card1";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

const Expenses1 = (props) => {
  const [year, setChosenYear] = useState("2022");

  function yearChangeHandler(pickedYear) {
    setChosenYear(pickedYear);
    console.log(pickedYear);
  }

  let filteredExpenses = props.items.filter((expense) => {
    let filteredYear = year === new Date(expense.date).getFullYear().toString();
    return filteredYear;
  });

  return (
    <div>
      <Card1 className="expenses">
        <ExpensesFilter year={year} onChangeYear={yearChangeHandler} />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card1>
    </div>
  );
};

export default Expenses1;
