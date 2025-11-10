import { PiPizza, PiGift } from "react-icons/pi";
import { MdOutlineModeEdit } from "react-icons/md";
import { BsSuitcase2 } from "react-icons/bs";
import { IoMdCloseCircleOutline } from "react-icons/io";
import "./TransactionCard.css";

export default function TransactionCard({ details, handleDelete, handleEdit }) {
  return (
    <div className="container">
      <div className="main">
        <div className="part1">
          <div>
            {details.category == "food" && <PiPizza />}
            {details.category == "entertainment" && <PiGift />}
            {details.category == "travel" && <BsSuitcase2 />}
          </div>
          <div>
            <h5>{details.title}</h5>
            <p>{details.date}</p>
          </div>
        </div>

        <div className="part2">
          <div>
            <p>{`₹${details.price}`}</p>
          </div>
          <div>
            <button onClick={handleDelete}>
              <IoMdCloseCircleOutline />
            </button>
          </div>
          <div>
            <button onClick={handleEdit}>
              <MdOutlineModeEdit />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
