import logo from '../assets/logo.png'
import { Drawer } from '@mui/material';
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import MenuLinks from './MenuLinks';
import { Link, } from "react-router-dom";

function Menu ({ theme, toggleTheme }) {
	const [open, setOpen] = useState(false);

	const toggleDrawer = (newOpen) => () => {
		setOpen(newOpen);
	};

	return (
		<div className="menu">
			<span className="menu-mobile">
				<AiOutlineMenu className="menu-icon" onClick={toggleDrawer(true)}/>
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

			<button className="theme-nupp" onClick={toggleTheme}>
				{theme === "true" ? "☀️" : "🌙"}
			</button>
		</div>
	)
}

export default Menu