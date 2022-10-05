import ExpenseItem1 from "./components/Expenses/ExpenseItem1";
import NewExpense1 from "./components/NewExpense/NewExpense1";
import Expenses1 from "./components/Expenses/Expenses1";
import { useState } from "react";

const dummy_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App1() {
  const [expenses, setExpenses] = useState(dummy_expenses);

  const addExpenseHandler = (newexpense) => {
    setExpenses((prevexpenses) => {
      return [newexpense, ...prevexpenses];
    });
    console.log("In App.js");
    console.log(expenses);
  };
  return (
    <div>
      <NewExpense1 onAddExpense={addExpenseHandler} />
      <Expenses1 items={expenses} />;
    </div>
  );
}

export default App1;
