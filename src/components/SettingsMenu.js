import { RiArrowDropDownLine } from 'react-icons/ri'
import { FaLanguage } from 'react-icons/fa'
import { AiFillSetting } from 'react-icons/ai'
import { HiOutlineSupport } from 'react-icons/hi'
import { RiLogoutCircleRFill } from 'react-icons/ri'

const SettingsMenu = () => {
	return (
		<div className="settings_menu">
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
	)
}

export default SettingsMenu
