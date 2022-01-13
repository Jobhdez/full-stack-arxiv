import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ResearchPaperCard = ({title, abstract}) => {

    return (
      <div>
      <Card sx={{display: 'flex'}}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" component="div">
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