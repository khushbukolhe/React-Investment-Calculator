import React, { useState } from "react";

const MortgageCalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState<string>("");
  const [interestRate, setInterestRate] = useState<string>("");
  const [loanTerm, setLoanTerm] = useState<string>("");
  const [monthlyPayment, setMonthlyPayment] = useState<string>("");
  const [totalPayment, setTotalPayment] = useState<string>("");
  const [totalInterest, setTotalInterest] = useState<string>("");
  const [error, setError] = useState<string>("");

  const calculateMortgage = () => {
    const P = Number(loanAmount);
    const annualRate = Number(interestRate);
    const years = Number(loanTerm);

    if (isNaN(P) || isNaN(annualRate) || isNaN(years) || P <= 0 || annualRate <= 0 || years <= 0) {
      setError("Please enter valid positive numbers for all fields.");
      setMonthlyPayment("");
      setTotalPayment("");
      setTotalInterest("");
      return;
    }

    setError("");
    const i = annualRate / 100 / 12;
    const n = years * 12;
    const M = (P * i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
    const totalPay = M * n;
    const totalInt = totalPay - P;

    setMonthlyPayment(M.toFixed(2));
    setTotalPayment(totalPay.toFixed(2));
    setTotalInterest(totalInt.toFixed(2));
  };

  return (
    <div className="p-4 max-w-sm mx-auto space-y-4 border rounded shadow-lg">
      <h2 className="text-xl font-bold">Mortgage Calculator</h2>
      <div>
        <label className="block mb-1">Loan Amount ($):</label>
        <input
          type="text"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block mb-1">Annual Interest Rate (%):</label>
        <input
          type="text"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block mb-1">Loan Term (years):</label>
        <input
          type="text"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <button onClick={calculateMortgage} className="w-full p-2 bg-blue-500 text-white rounded">
        Calculate
      </button>
      {error && <p className="text-red-500">{error}</p>}
      {monthlyPayment && (
        <div className="mt-4 p-2 bg-gray-100 rounded">
          <p>Monthly Payment: ${monthlyPayment}</p>
          <p>Total Payment: ${totalPayment}</p>
          <p>Total Interest: ${totalInterest}</p>
        </div>
      )}
    </div>
  );
};

export default MortgageCalculator;
