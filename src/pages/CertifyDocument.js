import CertificateLogo from '../assets/CertificateLogo.png'
import EditIcon from '../assets/EditIcon.png'
import SettingCheckIcon from '../assets/SettingCheckIcon.png'
import FileUploadInput from '../components/FileUploadInput'
import FileInputIcon from '../assets/FileInputIcon.png'

const CertifyDocument = () => {
	return (
		<div className="clerify_doc_page">
			<div className="content_container">
				<div className="upper_card">
					<div className="logo">
						<img src={CertificateLogo} alt="CertificateLogo" />
					</div>

					<p className="welcome_text">
						Welcome to <span>Certification, Edu</span>
					</p>

					<h4>Get started with your first document</h4>

					<div className="certify_row">
						<div className="img_container">
							<img src={EditIcon} alt="EditIcon" />
						</div>

						<div className="text">
							<h5>Certify a document</h5>
							<p>certify on behalf of your organization</p>
						</div>
					</div>

					<div className="input_container">
						<FileUploadInput heading="" text="Drag and Drop or upload pdf" icon={FileInputIcon} />
					</div>
				</div>

				<div className="blue_card">
					<div className="img_container">
						<img src={SettingCheckIcon} alt="SettingCheck" />
					</div>

					<div className="text">
						<h5>Verify a document</h5>
						<p>Check documents for their authenticity with our verification tool</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CertifyDocument
