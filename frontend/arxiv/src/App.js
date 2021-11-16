import React, { useState, useEffect } from "react";
import Papers from './components/Papers';

const apiUrl = "http://127.0.0.1:8000/api/";

function App() {
  const [apiData, setApiData] = useState({});

  useEffect(() => {
    getBioArxivWithFetch();
  }, []);

  const getBioArxivWithFetch = async () => {
    const response = await fetch(apiUrl);
    const jsonData = await response.json();
    console.log(jsonData);
    setApiData(jsonData);
  };
  console.log(apiData);
  console.log(apiData[0])
  return (
    <div className="App">
      <h1>Latest Papers</h1>
      <Papers papers={apiData}/>
    </div>
  )
}


export default App;
