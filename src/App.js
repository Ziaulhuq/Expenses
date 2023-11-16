import { useState } from "react";
import "./App.css";
import Expenses from "./Components/Expenses";
import AddExpense from "./Components/NewExpense/AddExpense";

const Dummy_Expenses = [
  {
    id: 1,
    title: "car Insurance",
    amount: 200.8,
    date: new Date("Sep 09 2022"),
  },
  {
    id: 2,
    title: "Books",
    amount: 22.8,
    date: new Date("jan 09 2022"),
  },
  {
    id: 3,
    title: "Shopping",
    amount: 124.8,
    date: new Date("Apr 09 2021"),
  },
  {
    id: 4,
    title: "Diesel",
    amount: 223.4,
    date: new Date("Dec 09 2019"),
  },
];

function App() {
  const [expenses, setExpenses] = useState(Dummy_Expenses);
  const AppExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div className="App">
      <AddExpense onAddExpenseData={AppExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
