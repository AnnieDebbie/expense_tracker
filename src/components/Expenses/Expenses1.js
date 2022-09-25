import React,{useState} from "react";

import ExpenseItem1 from "./ExpenseItem1";
import Card1 from "../UI/Card1";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";

const Expenses1 = (props) => {
  const [year, setChosenYear] = useState("2022");

  function yearChangeHandler(pickedYear){
    setChosenYear(pickedYear)
    console.log(pickedYear)
  }

  return (
    <div>
      <ExpensesFilter year={year} onChangeYear={yearChangeHandler}/>

      <Card1 className="expenses">
        <ExpenseItem1
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem1
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem1
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem1
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </Card1>
    </div>
  );
};

export default Expenses1;
