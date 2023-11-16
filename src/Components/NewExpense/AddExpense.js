import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "../NewExpense/AddExpense.css";

function AddExpense(props) {
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const ExpenseDataHAndler = (EnterExpenseData) => {
    const DataHandler = {
      ...EnterExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpenseData(DataHandler);
  };
  const buttonHandler = () => {
    setIsButtonEnabled(true);
  };
  const cancelHandler = () => {
    setIsButtonEnabled(false);
  };

  return (
    <div className="new-expense">
      {!isButtonEnabled && <button onClick={buttonHandler}>AddExpense</button>}
      {isButtonEnabled && (
        <ExpenseForm
          onAddExpense={ExpenseDataHAndler}
          onCancel={cancelHandler}
        />
      )}
    </div>
  );
}

export default AddExpense;
