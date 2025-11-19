import { useState } from "react";

export default function Calculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (weight === "" || height === "") {
      alert("Please enter both weight and height.");
      return;
    }

    const hInMeters = height / 100;
    const calculatedBMI = (weight / (hInMeters * hInMeters)).toFixed(2);
    setBmi(calculatedBMI);

    // Step 4: Categorization
    if (calculatedBMI < 18.5) setCategory("Underweight");
    else if (calculatedBMI < 24.9) setCategory("Normal Weight");
    else if (calculatedBMI < 29.9) setCategory("Overweight");
    else setCategory("Obesity");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>BMI Calculator</h2>

      <input
        type="number"
        placeholder="Enter weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        style={{ margin: "10px", padding: "8px" }}
      />

      <input
        type="number"
        placeholder="Enter height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        style={{ margin: "10px", padding: "8px" }}
      />

      <br />
      <button onClick={calculateBMI} style={{ padding: "10px 20px", marginTop: "20px" }}>
        Calculate BMI
      </button>

      {bmi && (
        <div style={{ marginTop: "20px" }}>
          <h3>Your BMI: {bmi}</h3>
          <h4>Category: {category}</h4>
        </div>
      )}
    </div>
  );
}