# Ex06 BMI Calculator
## Date: 12/11/25

## AIM
To create a BMI calculator using React Router 

## ALGORITHM
### STEP 1 State Initialization
Manage the current page (Home or Calculator) using React Router.

### STEP 2 User Input
Accept weight and height inputs from the user.

### STEP 3 BMI Calculation
Calculate the BMI based on user input.

### STEP 4 Categorization
Classify the BMI result into categories (Underweight, Normal weight, Overweight, Obesity).

### STEP 5 Navigation
Navigate between pages using React Router.

## PROGRAM
### Main.jsx
```
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```
### App.jsx
```
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Calculator from "./Calculator";

export default function App() {
  return (
    <div>
      <nav style={{ padding: "10px", background: "#eee" }}>
        <Link to="/" style={{ marginRight: "20px" }}>Home</Link>
        <Link to="/calculator">BMI Calculator</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </div>
  );
}
```
### Home.jsx
```
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
```
### Calculator.jsx
```
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
```
## OUTPUT
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/ee8bd315-4a4d-4575-b2cc-6cc291555505" />

## RESULT
The program for creating BMI Calculator using React Router is executed successfully.
