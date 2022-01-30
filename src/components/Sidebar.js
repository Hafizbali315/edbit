import { FaUser } from 'react-icons/fa'
import { ImOffice } from 'react-icons/im'
import { BsFillKeyFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Sidebar = () => {
	return (
		<div className="sidebar">
			<ul>
				<li>
					<Link to="/profile" className="link">
						<FaUser className="icon" /> Profile
					</Link>
				</li>

				<li>
					<Link to="/organizations" className="link">
						<ImOffice className="icon" />
						Organizations
					</Link>
				</li>

				<ul className="second_ul">
					<li>
						<Link to="/plans" className="active link">
							Plans
						</Link>
					</li>
					<li>
						<Link to="/app-configuration" className="link">
							App Configurations
						</Link>
					</li>
				</ul>

				<li>
					<Link to="/api-keys" className="link">
						<BsFillKeyFill className="icon" />
						API Keys
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default Sidebar
