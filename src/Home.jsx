import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Welcome to BMI Calculator</h1>
      <Link to="/calculator">
        <button style={{ padding: "10px 20px", marginTop: "20px" }}>
          Go to Calculator
        </button>
      </Link>
    </div>
  );
}