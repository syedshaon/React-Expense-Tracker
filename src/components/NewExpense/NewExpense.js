import React from "react";
import "./NewExpense.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function NewExpense(props) {
  const [inputTitle, setInputTitle] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  function handleInputTitleChange(e) {
    setInputTitle(e.target.value);
  }
  function handleInputAmountChange(e) {
    setInputAmount(Number(e.target.value));
  }
  function handleInputDateChange(e) {
    setInputDate(e.target.value);
  }

  const newInput = {
    id: uuidv4(),
    title: inputTitle,
    amount: inputAmount,
    date: new Date(inputDate),
  };

  function handleFormSubmit(e) {
    e.preventDefault();
    props.handleSubmit(newInput);
    setInputTitle("");
    setInputAmount("");
    setInputDate("");
  }

  const [formDisplay, setFormDisplay] = useState(false);
  function openForm() {
    setFormDisplay(true);
  }
  function hideForm() {
    setFormDisplay(false);
  }

  return (
    <div className="new-expense">
      <button
        className="add-expense"
        type="submit"
        onClick={openForm}
        style={{ display: formDisplay ? "None" : "block" }}
      >
        Add New Expense
      </button>
      <button
        className="add-expense cancel"
        type="submit"
        onClick={hideForm}
        style={{ display: !formDisplay ? "None" : "block" }}
      >
        Cancel!
      </button>
      <form
        onSubmit={handleFormSubmit}
        className="new-expense__controls"
        style={{ display: !formDisplay ? "None" : "flex" }}
      >
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            onChange={handleInputTitleChange}
            type="text"
            name="title"
            value={inputTitle}
            id="title"
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            onChange={handleInputAmountChange}
            type="number"
            min="0.01"
            step="0.01"
            name="amount"
            id="amount"
            value={inputAmount}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            onChange={handleInputDateChange}
            type="date"
            name="date"
            id="date"
            min="2019-01-01"
            max="2022-12-31"
            value={inputDate}
          />
        </div>
        <div className="new-expense__control new-expense__button">
          <button type="submit">Add New</button>
        </div>
      </form>
    </div>
  );
}

export default NewExpense;
