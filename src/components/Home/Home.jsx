import { useState } from "react";
import Card from "../Card/Card";
import "./Home.css";

export default function Home() {
  const [balance, setBalance] = useState(5000);
  const [expense, setExpense] = useState(0);

  return (
    <div className="main-container">
      <h1>Expense Tracker</h1>
      <div className="cards">
        <Card 
        title={"Wallet Balance"} 
        money={balance}
        btnName={"+Add Income"}
        />
        <Card 
        title={"Expenses"} 
        money={expense}
        btnName={"+Add Expense"}
        />
      </div>
    </div>
  );
}
