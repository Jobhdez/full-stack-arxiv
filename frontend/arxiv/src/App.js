import React, { useState, useEffect } from "react";
import Papers from './components/Papers';

const apiUrl = "http://127.0.0.1:8000/api";

function App() {
  const [apiData, setApiData] = useState({});

  useEffect(() => {
    getBioArxivWithFetch();
  }, []);

  const getBioArxivWithFetch = async () => {
    const response = await fetch(apiUrl);
    const jsonData = await response.json();
    setApiData(jsonData);
  };

  return (
    <div className="App">
      <h1>Latest Papers</h1>
      <Papers papers={apiData.papers}/>
    </div>
  )
}


export default App;
