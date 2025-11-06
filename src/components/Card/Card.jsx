export default function Card(props) {
  return (
    <div
      style={{
        borderRadius: "10px",
       backgroundColor:"rgba(128, 128, 128, 0.9)",
        minHeight: "200px",
        margin: "30px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3>
        {props.title}: ₹{props.money}
      </h3>
      <button style={{borderRadius:"5px",
        borderStyle:"none"
      }}>{props.btnName}</button>
    </div>
  );
}
