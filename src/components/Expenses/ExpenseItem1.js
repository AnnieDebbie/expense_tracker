import Card1 from "../UI/Card1";
import ExpenseDate1 from "./ExpenseDate1";
import "./ExpenseItem.css";

function ExpenseItem1(props) {
  return (
    // adding li for semantic stuff
    <li>
      <Card1 className="expense-item">
        <ExpenseDate1 date={props.date} />
        <div className="expense-item__description">
          <h2> {props.title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
      </Card1>
    </li>
  );
}

export default ExpenseItem1;
