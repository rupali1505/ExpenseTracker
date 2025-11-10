import { useState } from "react";
import {useSnackbar} from 'notistack';
import "./addBalanceForm.css";

export default function AddBalanceForm({ setIsOpen, setBalance }) {
  const [income, setIncome] = useState("");
 const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(income);

    if (income <= 0) {
      enqueueSnackbar("Income should be greater than Zero", {
        variant: "warning",
      });
      setIsOpen(false);
      return;
    }

    setBalance((prev) => prev + Number(income));
    enqueueSnackbar("Balance added successfully!", { variant: "success" });
    setIsOpen(false);
  };

  return (
    <div className="form-Container">
      <h3>Add Balance</h3>

      <form onSubmit={handleSubmit} >
        <input
          type="number"
          placeholder="Income Amount"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          required
        />
        <button type="submit" style={{backgroundColor:'orange'}}>Add Balance</button>
        <button  onClick={()=>setIsOpen(false)}>Cancel</button>
      </form>
    </div>
  );
}
