import React, { useState } from "react";

type Currency = {
  label: string;
  exchangeRate: number;
  symbol: string;
};

function App() {
  const [inputUsd, setInputUsd] = useState(0);

  const currencies: Currency[] = [
    {
      label: "GBP",
      exchangeRate: 0.808591,
      symbol: "£",
    },
    {
      label: "EUR",
      exchangeRate: 0.926237,
      symbol: "€",
    },
  ];

  const [currencyIndex, setCurrencyIndex] = useState(0);
  const currentCurrency = currencies[currencyIndex];

  return (
    <div>
      <h2>Currency Converter</h2>
      $
      <input
        type="number"
        value={inputUsd}
        onChange={(e) => {
          setInputUsd(Number(e.target.value));
        }}
        placeholder="Enter amount.."
      />
      <label>USD</label>
      <p> converts to </p>
      <p>
        {currentCurrency.symbol}
        {currentCurrency.exchangeRate * inputUsd}
      </p>
      <select
        id="currencies"
        name="currencies"
        value={currencyIndex}
        onChange={(e) => {
          setCurrencyIndex(Number(e.target.value));
        }}
      >
        {currencies.map(({ label }, index) => {
          return (
            <option key={label} value={index}>
              {label}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default App;
