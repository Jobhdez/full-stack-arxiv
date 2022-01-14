import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const useStyles = makeStyles({
  
  headingColor: {
    color: 'blue'
  },
});

const ResearchPaperCard = ({title, abstract}) => {
  const colorClass = useStyles();

    return (
      <div>
      <Card sx={{display: 'flex', width: 800, p: 5, m: 15}}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} className={colorClass.headingColor} component="div">
            {title}
          </Typography>
          
          <Typography variant="body2">
            {abstract}
          </Typography>
        </CardContent>
      </Card>
      </div>
    );
  }

export default ResearchPaperCard;