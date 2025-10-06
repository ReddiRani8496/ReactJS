import React, { useState } from "react";
import "./styles.css";

function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState("");
  const [annualInterest, setAnnualInterest] = useState("");
  const [years, setYears] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  const parseNum = (v) => {
    if (v === null || v === undefined) return NaN;
    const s = String(v).trim();
    if (s === "") return NaN;
    return Number(s);
  };

  const calculateMonthlyPayment = (P, annualRate, yrs) => {
    const r = annualRate / 12 / 100;
    const n = Math.round(yrs * 12);

    if (n <= 0) return NaN;
    if (P < 0) return NaN;

    if (Math.abs(r) < 1e-10) {
      return P / n;
    }

    const pow = Math.pow(1 + r, n);
    const denom = pow - 1;
    if (denom === 0) return NaN;

    return P * ((r * pow) / denom);
  };

  const handleClick = () => {
    setError("");
    setResult(null);

    const P = parseNum(loanAmount);
    const rate = parseNum(annualInterest);
    const yrs = parseNum(years);

    const bad =
      !Number.isFinite(P) ||
      P < 0 ||
      !Number.isFinite(rate) ||
      rate <= 0 ||
      !Number.isFinite(yrs) ||
      yrs <= 0;

    if (bad) {
      setError("Invalid input");
      return;
    }

    const emi = calculateMonthlyPayment(P, rate, yrs);
    if (!Number.isFinite(emi) || emi <= 0) {
      setError("Invalid input");
      return;
    }

    setResult(emi);
  };

  return (
    <div>
      <h1>Mortgage Calculator</h1>

      <label htmlFor="loan-amount">Loan Amount (INR):</label>
      <input
        id="loan-amount"
        type="number"
        inputMode="decimal"
        min="0"
        step="0.01"
        value={loanAmount}
        onChange={(e) => setLoanAmount(e.target.value)}
      />
      <br />

      <label htmlFor="annual-rate">Annual Interest Rate (%):</label>
      <input
        id="annual-rate"
        type="number"
        inputMode="decimal"
        min="0.01"
        step="0.01"
        value={annualInterest}
        onChange={(e) => setAnnualInterest(e.target.value)}
      />
      <br />

      <label htmlFor="loan-term">Loan Term (Years):</label>
      <input
        id="loan-term"
        type="number"
        inputMode="numeric"
        min="1"
        step="1"
        value={years}
        onChange={(e) => setYears(e.target.value)}
      />
      <br />

      <input type="button" value="Calculate" onClick={handleClick} />

      {error && (
        <p role="alert" style={{ color: "red" }}>
          {error}
        </p>
      )}

      {result !== null && error === "" && (
        <p aria-label="result">Monthly Payment: {result.toFixed(2)}</p>
      )}
    </div>
  );
}

export default MortgageCalculator;
