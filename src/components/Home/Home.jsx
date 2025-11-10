import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Home.css";
import Modal from "../Modals/Modal";
import PieChart from "../PieChart/PieChart";
import TransactionList from "../Transaction/TransactionList";
import BarChartCompo from "../BarChart/BarChart";
import ExpenseForm from "../Forms/ExpenseForm";
import AddBalanceForm from "../Forms/addBalanceForm";

export default function Home() {
  const [balance, setBalance] = useState(5000);
  const [expense, setExpense] = useState(0);
  const [expenseList, setExpenseList] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  const [isOpenExpense, setIsOpenExpense] = useState(false);
  const [isOpenBalance, setIsOpenBalance] = useState(false);

  const [categorySpends, setCatogorySpends] = useState({
    food: 0,
    entertainment: 0,
    travel: 0,
  });

  const [categoryCount, setCatogoryCount] = useState({
    food: 0,
    entertainment: 0,
    travel: 0,
  });

  

  useEffect(() => {
    const localBalance = localStorage.getItem("balance");

    if (localBalance) {
      setBalance(Number(localBalance));
    } else {
      setBalance(5000);
      localStorage.setItem("balance", 5000);
    }
    const items = JSON.parse(localStorage.getItem("expenses"));
    setExpenseList(items || []);
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (expenseList.length > 0 || isMounted) {
      localStorage.setItem("expenses", JSON.stringify(expenseList));
    }

    if (expenseList.length > 0) {
      setExpense(
        expenseList.reduce(
          (accmulator, currentValue) => accmulator + Number(currentValue.price),
          0
        )
      );
    } else {
      setExpense(0);
    }

    let foodSpends = 0,
      entertainmentSpends = 0,
      travelSpends = 0;

    let foodCount = 0,
      entertainmentCount = 0,
      travelCount = 0;

    expenseList.forEach((item) => {
      if (item.category == "food") {
        foodSpends += Number(item.price);
        foodCount++;
      } else if (item.category == "entertainment") {
        entertainmentSpends += Number(item.price);
        entertainmentCount++;
      } else if (item.category == "travel") {
        travelSpends += Number(item.price);
        travelCount++;
      }
    });

    setCatogorySpends({
      food: foodSpends,
      entertainment: entertainmentSpends,
      travel: travelSpends,
    });
    setCatogoryCount({
      food: foodCount,
      entertainment: entertainmentCount,
      travel: travelCount,
    });
  }, [expenseList]);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("balance", balance);
    }
  }, [balance]);

  return (
    <div className="main-container">
      <h1>Expense Tracker</h1>
      <div className="cards">
        <Card
          title={"Wallet Balance"}
          money={balance}
          color={'greenyellow'}
          btnName={"+ Add Income"}
          handleClick={() => setIsOpenBalance(true)}
        />
        <Card
          title={"Expenses"}
          money={expense}
          color={'orange'}
          btnName={"+ Add Expense"}
          handleClick={() => setIsOpenExpense(true)}
        />
        <PieChart
          data={[
            { name: "Food", value: categorySpends.food },
            { name: "Entertainment", value: categorySpends.entertainment },
            { name: "Travel", value: categorySpends.travel },
          ]}
        />
      </div>

      <div className="listConteiner">
        <TransactionList
          transactions={expenseList}
          editTransactions={setExpenseList}
          title="Recent Transactions"
          balance={balance}
          setBalance={setBalance}
        />
        <BarChartCompo
          data={[
            { name: "Food", value: categoryCount.food },
            { name: "Entertainment", value: categoryCount.entertainment },
            { name: "Travel", value: categoryCount.travel },
          ]}
        />
      </div>

      <Modal isOpen={isOpenExpense} setIsOpen={setIsOpenExpense}>
        <ExpenseForm
          setIsOpen={setIsOpenExpense}
          expenseList={expenseList}
          setExpenseList={setExpenseList}
          setBalance={setBalance}
          balance={balance}
        />
      </Modal>

      <Modal isOpen={isOpenBalance} setIsOpen={setIsOpenBalance}>
        <AddBalanceForm setIsOpen={setIsOpenBalance} setBalance={setBalance} />
      </Modal>
    </div>
  );
}
