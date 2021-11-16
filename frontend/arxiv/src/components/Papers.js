import React from 'react';
import Grid from '@mui/material/Grid';

const Papers = (props) => {
    const {papers} = props;
    if (!papers || papers.length === 0) return <p>Cannot find any papers, sorry</p>;
    return (
        <React.Fragment>
            {Object.values(papers).map((paper) => {
                return (
                    <Grid item key={paper.title} xs={12} md={4}>
                        <h2>{paper.title}</h2>
                        <p>{paper.abstract}</p>

                    </Grid>

                )
            }
            )}
         </React.Fragment>
    );
};

export default Papers;
