import Logo from '../assets/Logo.png'
import { GiHamburgerMenu } from 'react-icons/gi'

const Header1 = () => {
	return (
		<div className="header1">
			<div className="logo">
				<img src={Logo} alt="logo" />
			</div>

			<ul>
				<li>
					<div className="link">5 Credits</div>
				</li>

				<li>
					<button className="btn btn-primary">Back to overview</button>
				</li>
				<li>
					<button className="btn btn-outline">Certify and save document</button>
				</li>
			</ul>

			<div className="hamburger_menu">
				<GiHamburgerMenu className="icon" />
			</div>
		</div>
	)
}

export default Header1
