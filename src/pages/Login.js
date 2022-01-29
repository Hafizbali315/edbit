import Logo from '../assets/Logo.png'
const Login = () => {
	return (
		<div className="login_page">
			<div className="login_card">
				<div className="logo">
					<img src={Logo} alt="logo" />
				</div>

				<h4>Welcome to Edbit</h4>
				<p>To unlock your personal e-signature, plase enter your name as displayed on your passport or ID.</p>

				<div className="login_form">
					<input class="form-control form-control-lg mb-3" type="text" placeholder="First Name" />
					<input class="form-control form-control-lg mb-3" type="text" placeholder="Middle Name" />
					<input class="form-control form-control-lg mb-3" type="text" placeholder="Last Name" />

					<select class="form-select form-select-lg mb-3" aria-label="Default select example">
						<option selected>Citizenship</option>
						<option value="1">One</option>
						<option value="2">Two</option>
						<option value="3">Three</option>
					</select>

					<button className="btn btn-primary btn-lg w-100">Continue</button>
				</div>
			</div>
		</div>
	)
}

export default Login
