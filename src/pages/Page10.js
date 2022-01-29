import Header1 from './../components/Header1'
import { MdSecurityUpdate } from 'react-icons/md'
import FileUploadInput from './../components/FileUploadInput'
import CopyIcon from '../assets/CopyIcon.png'

const Page10 = () => {
	return (
		<div className="page_10">
			<Header1 />
			<div className="page_content">
				<h5>Name your Folder</h5>

				<p>Folder name</p>

				<div className="folder_name">
					<div className="text">12154-454-454656458485458</div>
				</div>

				<div className="document_heading">
					<h5>Documents</h5>
					<div className="document_input">
						<MdSecurityUpdate className="icon" />
						Documents stay on your device
					</div>
				</div>

				<div className="input_container">
					<FileUploadInput
						background="#56BB8908"
						heading="Add additional Documents"
						icon={CopyIcon}
						text="Drag & Drop a document or click here to select"
					/>
				</div>

				<div className="document_input">
					<img src={CopyIcon} alt="fs" />
					Documents stay on your device
				</div>
			</div>
		</div>
	)
}

export default Page10
