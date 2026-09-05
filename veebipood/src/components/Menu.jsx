import logo from '../assets/logo.png'
import { Drawer } from '@mui/material';
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import MenuLinks from './MenuLinks';
import { Link, } from "react-router-dom";

function Menu () {
	const [open, setOpen] = useState(false);

	const toggleDrawer = (newOpen) => () => {
		setOpen(newOpen);
	};

	return (
		<div>
			<span className="menu-mobile">
				<AiOutlineMenu onClick={toggleDrawer(true)}/>
				<Drawer open={open} onClose={toggleDrawer(false)}>
					<MenuLinks toggleDrawer={toggleDrawer} cssClass="menu-links-mobile" />
				</Drawer>
			</span>

			<Link to="/">
				<img className= "logo" src={logo} alt="Logo" />
			</Link>

			<span className="menu-desktop">
				<MenuLinks toggleDrawer={toggleDrawer} cssClass="menu-links-desktop" />
			</span>
		</div>
	)
}

export default Menu