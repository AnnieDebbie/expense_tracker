import React, { useState } from "react";

import ExpenseItem1 from "./ExpenseItem1";
import Card1 from "../UI/Card1";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";

const Expenses1 = (props) => {
  const [year, setChosenYear] = useState("2022");

  function yearChangeHandler(pickedYear) {
    setChosenYear(pickedYear);
    console.log(pickedYear);
  }

  return (
    <div>
      <Card1 className="expenses">
        <ExpensesFilter year={year} onChangeYear={yearChangeHandler} />
        {props.items.map((expense) => (
          <ExpenseItem1
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card1>
    </div>
  );
};

export default Expenses1;
