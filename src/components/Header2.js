import { RiArrowDropDownLine } from 'react-icons/ri'
import Logo from '../assets/Logo.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import LogoE from '../assets/LogoE.png'

import { FaLanguage } from 'react-icons/fa'
import { AiFillSetting } from 'react-icons/ai'
import { HiOutlineSupport } from 'react-icons/hi'
import { RiLogoutCircleRFill } from 'react-icons/ri'

const Header2 = () => {
	return (
		<div className="header2">
			<div className="logo">
				<img src={Logo} alt="logo" />
			</div>

			<ul>
				<li className="credits_dropdown">
					<span>5 Credits</span>

					<div className="credit_dropdown_card">
						<div className="img_container">
							<img src={LogoE} alt="LogoL" />
						</div>

						<div className="text_section">
							<h5>You Currently have 5 credits left</h5>
							<p>To buy more credits, subscribe to a paid plan</p>
						</div>
					</div>
				</li>
				<li>Overview</li>
				<li>Verify</li>
				<li className="setting_menu">
					<span>
						Edu Ongo <RiArrowDropDownLine className="icon" />
					</span>

					<div className="dropdown_container">
						<div className="setting_menu_dropdown">
							<ul>
								<li className="active">
									<div className="text">
										Language <RiArrowDropDownLine className="icon" />
									</div>
									<div className="icon_container">
										<FaLanguage className="icon" />
									</div>
								</li>

								<li>
									<div className="text">Settings</div>
									<div className="icon_container">
										<AiFillSetting className="icon" />
									</div>
								</li>

								<li>
									<div className="text">Support</div>
									<div className="icon_container">
										<HiOutlineSupport className="icon" />
									</div>
								</li>

								<li>
									<div className="text">Logout</div>
									<div className="icon_container">
										<RiLogoutCircleRFill className="icon" />
									</div>
								</li>
							</ul>
						</div>
					</div>
				</li>
			</ul>

			<div className="hamburger_menu">
				<GiHamburgerMenu className="icon" />
			</div>
		</div>
	)
}

export default Header2
