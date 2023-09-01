import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [expense, setExpense] = useState(props.amount);
  const clickhandler = () => {
    setTitle("Updated!!!");
  };
  function changeExpense() {
    setExpense(100);
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${expense}</div>
        <button onClick={clickhandler}>Change Title</button>
        <button onClick={changeExpense}>Change Expense</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
