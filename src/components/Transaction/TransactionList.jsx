import { useEffect, useState } from "react";
import TransactionCard from "./TransactionCard";
import Pagination from "./Pagination";
import Modal from "react-modal";
import ExpenseForm from "../Forms/ExpenseForm";

export default function TransactionList({
  transactions,
  title,
  editTransactions,
  balance,
  setBalance,
}) {
  const [editId, setEditId] = useState(0);
  const [isDisplayEditor, setIsDisplayEditor] = useState(false);
  const [currentTransactions, setCurrentTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const maxTransactions = 3;

  const handleDelete = (id) => {
    const item = transactions.find((key) => key.id == id);
    const price = Number(item.price);
    setBalance((prev) => prev + price);

    editTransactions((prev) => prev.filter((item) => item.id != id));
  };

  const handleEdit = (id) => {
    setEditId(id);
    setIsDisplayEditor(true);
  };

  useEffect(() => {
    const startIndex = (currentPage - 1) * maxTransactions;
    const endIndex = Math.min(
      currentPage * maxTransactions,
      transactions.length
    );
    setCurrentTransactions([...transactions].slice(startIndex, endIndex));
    setTotalPages(Math.ceil(transactions.length / maxTransactions));
  }, [currentPage, transactions]);

  useEffect(() => {
    if (totalPages < currentPage && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  }, [totalPages]);

  return (
    <div >
      {title && <h2>{title}</h2>}
      {transactions.length > 0 ? (
        <div>
          <div >
            {currentTransactions.map((transaction) => (
              <TransactionCard
                details={transaction}
                key={transaction.id}
                handleDelete={() => handleDelete(transaction.id)}
                handleEdit={() => handleEdit(transaction.id)}
              />
            ))}
          </div>
          {totalPages > 1 && (
            <div>
            <Pagination
              updatePage={setCurrentPage}
              currentPage={currentPage}
              totalPages={totalPages}
            />
            </div>
          )}
        </div>
      ) : (
        <div >
          <p>No Transactions</p>
        </div>
      )}

      <Modal isOpen={isDisplayEditor} setIsOpen={setIsDisplayEditor}>
        <ExpenseForm
          editId={editId}
          expenseList={transactions}
          setExpenseList={editTransactions}
          setIsOpen={setIsDisplayEditor}
          balance={balance}
          setBalance={setBalance}
        />
      </Modal>
    </div>
  );
}
