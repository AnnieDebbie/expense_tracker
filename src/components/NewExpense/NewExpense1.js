import ExpenseForm1 from "./ExpenseForm1";
import "./NewExpense.css";

function NewExpense1(props) {
  const saveExpenseDataHandler = function (enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);

    props.onAddExpense(expenseData)
  };
  return (
    <div className="new-expense">
      <ExpenseForm1 onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense1;
