import Logo from '../assets/Logo.png'

const SetupOrganization = () => {
	return (
		<div className="org_page">
			<div className="org_card">
				<div className="logo">
					<img src={Logo} alt="logo" />
				</div>

				<h4>Setup your organization</h4>

				<p>
					Setting up an organization unlocks enterprise features like inviting and managing members of your organization. it also unlocks
					document certification. For now, we only need the name.
				</p>

				<div className="org_form">
					<input class="form-control form-control-lg mb-4" type="text" placeholder="Name of your organization" />

					<button className="btn btn-primary btn-lg w-100 mb-4">Continue</button>

					<div className="org_buttons_row">
						<button className="btn btn-outline ">Back</button>
						<button className="btn btn-outline">Skip</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SetupOrganization
