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
        {props.title}: <span style={{ color:[props.color]}}>₹{props.money}</span>
      </h3>
      <button type="button" onClick={props.handleClick} style={{borderRadius:"5px",
        borderStyle:"none", backgroundColor: props.btnName === "+ Add Income" ? "greenyellow" : "red", color:'white'
      }}>{props.btnName}</button>
    </div>
  );
}
