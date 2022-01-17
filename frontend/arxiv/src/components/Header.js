import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink as MuiLink } from 'react-router-dom';


function Header() {
    return (
	    <AppBar position="static">
			<Toolbar>
				<Typography>
					Papers
				</Typography>
				<div style={{display:'flex', justifyContent:'center'}}>
				<MuiLink to="/search"  activeStyle>
					Search Papers
				</MuiLink>
				</div>
			</Toolbar>
		</AppBar>
	);
	}
export default Header;	
	
