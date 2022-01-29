import LogoE from '../assets/LogoE.png'

const CreditsLeftCard = () => {
	return (
		<div className="credits_left_card">
			<div className="img_container">
				<img src={LogoE} alt="LogoL" />
			</div>

			<div className="text_section">
				<h5>You Currently have 5 credits left</h5>
				<p>To buy more credits, subscribe to a paid plan</p>
			</div>
		</div>
	)
}

export default CreditsLeftCard
