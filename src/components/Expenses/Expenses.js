import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="Expenses">
      <ExpensesFilter selectedValue={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpenseItem
        title={props.details[0].title}
        amount={props.details[0].amount}
        date={props.details[0].date}
      >
        {" "}
      </ExpenseItem>
    </Card>
  );
}

export default Expenses;
