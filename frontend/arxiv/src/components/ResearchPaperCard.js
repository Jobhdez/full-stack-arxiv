import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles({
  root: {
    color: 'blue'
  },
});

const ResearchPaperCard = ({title, abstract}) => {
  const colorClass = useStyles();

    return (
      <div>
      <Card sx={{display: 'flex'}}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} className={colorClass.root} component="div">
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