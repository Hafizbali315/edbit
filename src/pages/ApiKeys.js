import { BsFillPlusCircleFill } from 'react-icons/bs'
import { AiFillDelete } from 'react-icons/ai'
import Header2 from './../components/Header2'
import Sidebar from './../components/Sidebar'
const ApiKeys = () => {
	return (
		<div class="keys_page">
			<Header2 />

			<div className="row">
				<div className="col-lg-3 col d-lg-block d-none">
					<Sidebar />
				</div>

				<div className="col-lg-9 col col-12">
					<div className="page_content">
						<h2>API Keys</h2>

						<button className="btn btn-primary">
							<BsFillPlusCircleFill className="icon" />
							New
						</button>

						<div className="key_card">
							<div className="name">Kiwi LMS</div>
							<div className="date">01/01/2022</div>
							<div className="icon_container">
								<AiFillDelete className="icon" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ApiKeys
