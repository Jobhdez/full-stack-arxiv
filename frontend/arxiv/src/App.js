import React, { useState, useEffect } from "react";
import Grid from '@mui/material/Grid';

const apiUrl = "http://127.0.0.1:8000/api/";

function App() {
  const [apiData, setApiData] = useState([])
  const [visible, setVisible] = useState(3);

  const loadMorePapers = () => {
    setVisible((prevValue) => prevValue + 3);
  }
  useEffect(() => {
    getBioArxivWithFetch();
  },[]);

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
      {apiData.slice(0, visible).map((paper) => (
          <Grid item key={paper.title} xs={12} md={4}>
              <h2>{paper.title}</h2>
              <p>{paper.abstract}</p>

          </Grid>
        
      ))}
      <button onClick={loadMorePapers}>Load More</button>
    
    </div>
        
  )
      }
      


export default App;
