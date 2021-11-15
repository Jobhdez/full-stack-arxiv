import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Copyright() {
    return (
	<Typography variant="body2" colort="textSecondary" align="center">
	    {'Copyright © 2021'}
	    {'.'}
	</Typography>
    );
}

const footers = [
    {
	title: 'Github',
	link: 'www.github.com/jobhdez',
    },
    {
	title: 'Twitter',
	link: 'www.twitter.com/sphere_in_space',
    },
];

function Footer() {
    return (
	<React.Fragment>
		<Container maxWidth="md" compoment="footer">
		    <Grid container spacing={4}>
				{footers.map((fter) => (
				<Grid item={6} sm={3} key={fter.title}>
					<ul>
						<li>
							<Link href={fter.link}>
						    {fter.title}
						    </Link>
						</li>
				    </ul>
			    </Grid>
			))}
			
		    </Grid>
		    <Box mt={5}>
				<Copyright />
		    </Box>
		</Container>
	</React.Fragment>
    );
}
			
export default Footer;
