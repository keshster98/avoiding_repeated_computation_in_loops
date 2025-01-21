import React, { useState } from "react";

const App = () => {
  const [numbers, setNumbers] = useState([5, 10, 15, 20, 25]);

  const processNumbers = (arr) => {
    /* Unoptimized code 
    
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
          processed.push(arr[i] * arr[j]);
        }
      }
    
    */

    // Optimized code start
    let processed = [];
    let n = arr.length;

    for (let i = 0; i < n * n; i++) {
      let j = Math.floor(i / n);
      let k = i % n;

      processed.push(numbers[j] * numbers[k]);
    }
    // Optimized code end

    return processed;
  };

  const results = processNumbers(numbers);

  const addNumber = () => {
    const newNumbers = [...numbers];
    newNumbers.push((newNumbers.length + 1) * 5);
    setNumbers(newNumbers);
  };

  let renderedResults = [];
  for (let i = 0; i < results.length; i++) {
    renderedResults.push(<p key={i}>{results[i]}</p>);
  }

  return (
    <div>
      <h1>Avoid Repeated Computation Inside Loop</h1>
      <button onClick={addNumber}>Add Number</button>
      {renderedResults}
    </div>
  );
};

export default App;
