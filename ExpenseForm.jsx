import React, { useState } from "react";

function ExpenseForm() {
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  function handleItem(event) {
    setItem(event.target.value);
  }
  function handleAmount(event) {
    setAmount(event.target.value);
  }
  function handleDate(event) {
    setDate(event.target.value);
  }
  function handleClick(event) {
    event.preventDefault();
    console.log(item);
    console.log(amount);
    console.log(date);
  }
  return (
    <form action="">
      <input onChange={handleItem} type="text" name="" id="item" />
      <input onChange={handleAmount} type="number" name="" id="amount" />
      <input onChange={handleDate} type="date" name="" id="date" />
      <button onClick={handleClick} type="submit">
        Submit
      </button>
    </form>
  );
}

export default ExpenseForm;
