import React, { useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import PaperCard from '../components/ResearchPaperCard';

const apiUrl = "http://127.0.0.1:8000/api/search/?search=";

const getFilteredItems = async (query) => {

    let response = await fetch(apiUrl+query);
    let papers = await response.json();

    if (!query) {
        return <h1 Keep looking></h1>
    }
    return {papers};
    

}

function SearchedPapers(){

    const [query, setQuery] = useState("");

    const filteredItems = getFilteredItems(query);

    return (
        <div className='SearchedPapers'>
            <label>
                Search
            </label>
            <input type='text' onChange={(e) => setQuery(e.target.value)}>
                <ul>
                    {Object.values(filteredItems).map((paper) => (
                    <Grid key={paper.title}>
                        <PaperCard title={paper.title} abstract={paper.abstract}/>
                        </Grid>
      ))} 
                </ul>
            </input>
        </div>
    )

}

export default SearchedPapers;