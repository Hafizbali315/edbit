import Header2 from './../components/Header2'
import FileUploadInput from './../components/FileUploadInput'
import FileInputIcon from '../assets/FileInputIcon.png'
import EditIcon from '../assets/EditIcon.png'
import { AiFillDribbbleCircle } from 'react-icons/ai'

const Page15 = () => {
	return (
		<div className="page_15">
			<Header2 />

			<div className="page_15_content">
				<div className="card_containers">
					<div className="upper_card">
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

					<div className="lower">
						<h5>All Documents</h5>

						<div className="lower_card">
							<div className="table-responsive">
								<table className="table table-borderless">
									<thead>
										<tr>
											<th style={{ minWidth: '200px' }}>Folder</th>
											<th>Status</th>
											<th>Created</th>
											<th>Updated</th>
										</tr>
									</thead>

									<tbody>
										<tr>
											<td>
												<AiFillDribbbleCircle className="icon" /> Web Development
											</td>
											<td>
												<span>Pending</span>
											</td>
											<td>01/01/2022</td>
											<td>01/01/2022</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Page15
