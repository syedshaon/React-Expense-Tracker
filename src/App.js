import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/Expenses/ExpenseFilter";
import ExpensesChart from "./components/Expenses/ExpensesChart";

import { useState } from "react";

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 12, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [allExpense, setAllExpenses] = useState(expenses);

  function handleSubmit(newInput) {
    // console.log(newInput);
    setAllExpenses((prev) => {
      return [...prev, newInput];
    });
    setExpenseToShow((prev) => {
      return [...prev, newInput];
    });
  }

  const [selected, setSelected] = useState("");
  const [expensesToShow, setExpenseToShow] = useState(allExpense);

  function onChangeFilter(selectedYear) {
    setSelected(selectedYear);

    const filteredExpenses = allExpense.filter((e) => {
      return new Date(e.date).getFullYear().toString() === selectedYear;
    });

    setExpenseToShow(filteredExpenses);
  }

  // let expensesToShow;

  // if (selected) {
  //   expensesToShow = filteredExpenses;
  // } else {
  //   expensesToShow = allExpense;
  // }

  function itemDelete(item) {
    // console.log(item);
    // console.log(newInput);
    setAllExpenses((prev) => {
      return prev.filter((e) => {
        return e.id !== item;
      });
    });
    setExpenseToShow((prev) => {
      return prev.filter((e) => {
        return e.id !== item;
      });
    });
  }

  return (
    <div className="App">
      <NewExpense handleSubmit={handleSubmit} />
      <ExpensesChart expenses={expensesToShow} />
      <div className="expenses">
        <ExpensesFilter onChangeFilter={onChangeFilter} selected={selected} />
        {selected && expensesToShow.length === 0 && <p>No expenses found</p>}
        {expensesToShow.length > 0 &&
          expensesToShow.map((e) => {
            return (
              <ExpenseItem
                delete={itemDelete}
                expenses={e}
                year={selected}
                key={e.id}
              />
            );
          })}

        {/* {!selected &&
          allExpense.map((e) => {
            return <ExpenseItem expenses={e} year={selected} key={e.id} />;
          })} */}
      </div>
    </div>
  );
}

export default App;
