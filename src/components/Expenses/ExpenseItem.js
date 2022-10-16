import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import React from "react";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      {/* Must have only one root element eg:- Inside parent div all other childs will come */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2 className="expense-item__title">{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
