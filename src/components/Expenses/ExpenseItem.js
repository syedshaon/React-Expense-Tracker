import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../../UI/Card";

function ExpenseItem(props) {
  function handleSubmit(e) {
    // e.preventDefault();
    props.delete(e.target.value);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expenses.date} year={props.year} />
      <div className="expense-item__description">
        <h2>{props.expenses.title}</h2>
        <div className="expense-item__price">${props.expenses.amount}</div>

        <button
          onClick={handleSubmit}
          type="submit"
          value={props.expenses.id}
          className="expense-item__delete"
          name="delete"
        >
          Delete
        </button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
