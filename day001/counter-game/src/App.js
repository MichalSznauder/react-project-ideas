import HomePage from "./components/HomePage/HomePage";

function App() {
  return <HomePage />;
}

export default App;
import React, { useCallback, useMemo } from 'react';

const HomePage = ({ data, onAction }) => {
  // Przykład użycia useMemo do zapamiętania kosztownych obliczeń
  const computedData = useMemo(() => {
    return data.map(item => item.value * 2);
  }, [data]);

  // Przykład użycia useCallback do zapamiętania funkcji
  const handleAction = useCallback(() => {
    onAction(computedData);
  }, [onAction, computedData]);

  return (
    <div>
      {computedData.map((value, index) => (
        <div key={index}>{value}</div>
      ))}
      <button onClick={handleAction}>Perform Action</button>
    </div>
  );
};

export default React.memo(HomePage);