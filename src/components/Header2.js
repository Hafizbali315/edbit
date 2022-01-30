import { RiArrowDropDownLine } from 'react-icons/ri'
import Logo from '../assets/Logo.png'
import { GiHamburgerMenu } from 'react-icons/gi'

const Header2 = () => {
	return (
		<div className="header2">
			<div className="logo">
				<img src={Logo} alt="logo" />
			</div>

			<ul>
				<li>5 Credits</li>
				<li>Overview</li>
				<li>Verify</li>
				<li>
					Edu Ongo <RiArrowDropDownLine className="icon" />
				</li>
			</ul>

			<div className="hamburger_menu">
				<GiHamburgerMenu className="icon" />
			</div>
		</div>
	)
}

export default Header2
