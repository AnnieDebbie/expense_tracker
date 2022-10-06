import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm1(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState(0);
  const [enteredDate, setEnteredDate] = useState("");
  const [isBtnClicked, setIsBtnClicked] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredAmount("");
    setEnteredTitle("");
    setEnteredDate("");
  };

  const toggleForm = () => {
    setIsBtnClicked((prevClickState) => !prevClickState);
  };

  return isBtnClicked ? (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new_expense__control">
          <label> Title</label>
          <input
            value={enteredTitle}
            type="text"
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new_expense__control">
          <label> Amount</label>
          <input
            value={enteredAmount}
            onChange={amountChangeHandler}
            type="number"
            step="0.01"
            min="0.01"
          />
        </div>

        <div className="new_expense__control">
          <label> Date</label>
          <input
            value={enteredDate}
            onChange={dateChangeHandler}
            type="date"
            min="2022-22-09"
            max="2025-12-31"
          />
        </div>
      </div>


      <div className="new-expense__actions">
       
        <button onClick={toggleForm}> Cancel </button>
        <button type="submit"> Add expense </button>
      </div>
    </form>
  ) : (
    <div className="">
      <button onClick={toggleForm} type="submit">
        {" "}
        Add expense{" "}
      </button>
    </div>
  );
}

export default ExpenseForm1;
