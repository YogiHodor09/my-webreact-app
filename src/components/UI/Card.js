import "./Card.css";

const Card = (props) => {
  const classes =
    "card " +
    props.className; /* card <backspace> - to identify class name passed to card must be appended. eg:- card expenseItem*/
  return <div className={classes}>{props.children}</div>;
};

export default Card;
