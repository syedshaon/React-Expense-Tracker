import React from "react";

function ExpenseDate(props) {
  return (
    <div className="expense-date">
      <div className="expense-date__day">
        {new Date(props.date).toLocaleString("en-US", { day: "2-digit" })}
      </div>

      <div className="expense-date__month">
        {new Date(props.date).toLocaleString("en-US", { month: "long" })}
      </div>

      <div className="expense-date__year">
        {new Date(props.date).getFullYear()}
      </div>
    </div>
  );
}

export default ExpenseDate;
