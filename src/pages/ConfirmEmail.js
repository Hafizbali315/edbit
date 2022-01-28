import Logo from '../assets/Logo.png'
import MailSent from '../assets/MailSent.png'

const ConfirmEmail = () => {
	return (
		<div className="confirm_email">
			<div className="confirm_email_container">
				<div className="confirm_email_card">
					<div className="logo">
						<img src={Logo} alt="logo" />
					</div>

					<div className="mail_sent_img">
						<img src={MailSent} alt="logo" />
					</div>

					<h4>Confirm your email address</h4>

					<p>You’re just one click away from activiting your certification account!</p>
					<div className="link blue_button">
						<button>Confirm email address</button>
					</div>
				</div>

				<div className="below_card_text">
					<div className="circle_container">
						<div className="circle"></div>
					</div>

					<div className="text">
						This email was sent to you by <span>Certification</span>. If you didn’t make this request, Please contact us by replying this
						email.
					</div>
				</div>
			</div>
		</div>
	)
}

export default ConfirmEmail
