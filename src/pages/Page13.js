import Header1 from './../components/Header1'
import { MdSecurityUpdate } from 'react-icons/md'
import FileUploadInput from './../components/FileUploadInput'
import CopyIcon from '../assets/CopyIcon.png'

const Page13 = () => {
	return (
		<div className="background_overlay">
			<div className="add_singer_card">
				<h4>Additional Signer</h4>

				<p>Please add the information for the additional signer</p>

				<input class="form-control form-control-lg mb-4" type="text" placeholder="Name" />
				<input class="form-control form-control-lg mb-4" type="text" placeholder="Email" />

				<div className="buttons_row">
					<button className="btn btn-outline">Cancel</button>
					<button className="btn btn-primary">Add</button>
				</div>
			</div>
		</div>
	)
}

export default Page13
