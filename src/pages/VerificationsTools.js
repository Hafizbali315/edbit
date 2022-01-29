import { HiBadgeCheck } from 'react-icons/hi'
import FileUploadInput from '../components/FileUploadInput'
import CopyIcon from '../assets/CopyIcon.png'
import Logo from '../assets/Logo.png'

const VerificationsTools = () => {
	return (
		<div className="verifications_tools_page">
			<div className="verifications_tools_content">
				<h1>
					<HiBadgeCheck className="icon" />
					<span>Verification Tool</span>
				</h1>

				<p>Verification trust: Check the authenticaty and integrity of your documents and protect yourself from fraud</p>

				<div className="input_container">
					<FileUploadInput heading="Verify your documents" text="Drag & Drop a document or click here to select" icon={CopyIcon} />
				</div>

				<div className="powered_button">
					<button>
						Powered by <img src={Logo} alt="loog" />
					</button>
				</div>
			</div>
		</div>
	)
}

export default VerificationsTools
