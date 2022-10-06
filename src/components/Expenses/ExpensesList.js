import "./ExpensesList.css";
import ExpenseItem1 from "./ExpenseItem1";

function ExpensesList(props) {
  
  if (props.filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback"> Found no expenses </h2>;
  }

  return (
    <ul className="expenses-list">
      {props.filteredExpenses.map((expense) => (
        <ExpenseItem1
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
