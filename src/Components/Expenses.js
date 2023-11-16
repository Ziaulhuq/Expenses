import React, { useState } from "react";
import "../Components/Expenses.css";
import ExpenseItems from "../Components/ExpenseItems";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const [filterValue, setFilterValue] = useState("2022");
  const ExpenseFilterHandler = (selected) => {
    setFilterValue(selected);
  };

  const filteredYear = props.items.filter((year) => {
    return year.date.getFullYear().toString() === filterValue;
  });

  return (
    <div className="expenses">
      <ExpenseFilter
        onAddFilter={ExpenseFilterHandler}
        selected={filterValue}
      />
      <ExpenseChart expenses={filteredYear} />
      {filteredYear.length === 0 && <p>No Expense Found</p>}
      {filteredYear.map((expense) => (
        <ExpenseItems
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
}

export default Expenses;

/// reference
// <ExpenseItems
//         title={props.items[0].title}
//         price={props.items[0].price}
//         date={props.items[0].date}
//       />
//       <ExpenseItems
//         title={props.items[1].title}
//         price={props.items[1].price}
//         date={props.items[1].date}
//       />
//       <ExpenseItems
//         title={props.items[2].title}
//         price={props.items[2].price}
//         date={props.items[2].date}
//       />
//       <ExpenseItems
//         title={props.items[3].title}
//         price={props.items[3].price}
//         date={props.items[3].date}
//       />
