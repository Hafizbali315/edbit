import SignupImage from '../assets/SignupImage.png'
import Logo from '../assets/Logo.png'

import { BsFillCheckSquareFill } from 'react-icons/bs'

import MicroSoftIcon from '../assets/MicroSoftIcon.png'
import { Link } from 'react-router-dom'

const Signup = () => {
	return (
		<div className="signup_page">
			<div className="row">
				<div className="col-lg-6 col-12 order-2 order-lg-1">
					<div className="text_section">
						<div className="img_container">
							<img src={SignupImage} alt="SignupImage" />
						</div>

						<div className="points">
							<div className="point">
								<div className="icon_container">
									<BsFillCheckSquareFill className="icon" />
								</div>

								<div className="text">
									<h5>Try Certification for Free</h5>
									<p>Sign up directly with your email address or with your favourite account</p>
								</div>
							</div>
							<div className="point">
								<div className="icon_container">
									<BsFillCheckSquareFill className="icon" />
								</div>

								<div className="text">
									<h5>Get Started with Away</h5>
									<p>Use your webAoo right away or quicklt integrate us with our developer-friendly API.</p>
								</div>
							</div>
							<div className="point">
								<div className="icon_container">
									<BsFillCheckSquareFill className="icon" />
								</div>

								<div className="text">
									<h5>Stay in full control of your privacy</h5>
									<p>Trusted by organizations of all sizes who care about the confidentially of their data.</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="col-lg-6 col-12 order-1 order-lg-2">
					<div className="signup_card">
						<h1>Sign Up</h1>
						<h6>Welcome. Sign Up to Certification</h6>

						<form className="signup_form">
							<div className="input_row">
								<input class="form-control form-control-lg mb-4" type="text" placeholder="Name" />
								<input class="form-control form-control-lg mb-4" type="text" placeholder="Email" />
							</div>

							<input class="form-control form-control-lg mb-4" type="password" placeholder="Password" />

							<div className="checkbox_row">
								<input type="checkbox" />
								<label>I Agree to the Terms of Use</label>
							</div>

							<div className="button_container blue_button">
								<button>Continue</button>
							</div>

							<Link to="/login" className="link login_link_container">
								Already Have an Account? <span>Log in</span>
							</Link>

							<div className="or_section">
								<div className="hr_break_line"></div>
								<div className="or">Or</div>
								<div className="hr_break_line"></div>
							</div>

							<div className="button_container transparent_button">
								<button>
									<img src={MicroSoftIcon} alt="MicroSoftIcon" /> Continue with Microsoft Account
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>

			<div className="logo">
				<img src={Logo} alt="Logo" />
			</div>
		</div>
	)
}

export default Signup
