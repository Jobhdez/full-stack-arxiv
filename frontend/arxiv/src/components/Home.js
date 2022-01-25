import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import PaperCard from './ResearchPaperCard';

const apiUrl = "http://127.0.0.1:8000/api/";

function Home() {
  const [apiData, setApiData] = useState([])
  const [visible, setVisible] = useState(3);
  const [likes, setLikes] = useState(0);



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
  const incrementLikes = () => {
    const addToLikes = likes + 1;
    setLikes(addToLikes)
    }

  return (
    <div>
      <div style={{display:'flex', justifyContent:'center'}}>
      <h1>Latest Papers</h1>
      </div>
      {apiData.slice(0, visible).map((paper) => (
        <Grid key={paper.title}>
          <button onClick={incrementLikes}>Likes: {likes}</button>
          <PaperCard title={paper.title} abstract={paper.abstract}/>
        </Grid>
      ))}
      <div style={{display:'flex', justifyContent: 'center'}}>
      <Button variant="contained" onClick={loadMorePapers}>Load More</Button>
      </div>
      </div>
        
  )
      }
      


export default Home;
