import { Link } from "react-router-dom";
const OrderFailure = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {`Sorry Order Can Not be Created!`}
      <Link to={"/"}>
        <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
      </Link>
    </div>
  );
};

export default OrderFailure;
