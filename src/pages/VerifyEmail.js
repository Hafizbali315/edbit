import { BsCheckCircle } from 'react-icons/bs'
import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'

const VerifyEmail = () => {
	return (
		<div className="verify_email_page">
			<div className="verify_email_card">
				<div className="logo">
					<img src={Logo} alt="logo" />
				</div>

				<div className="icon_container">
					<BsCheckCircle className="icon" />
				</div>

				<p>Please Verify your email address using the link you recieved</p>

				<Link to="/signup" className="link blue_button">
					<button>Back to Sign up</button>
				</Link>
			</div>
		</div>
	)
}

export default VerifyEmail
