import Header2 from '../components/Header2'
import Sidebar from '../components/Sidebar'

const Plans = () => {
	return (
		<div className="plans_page">
			<Header2 />

			<div className="row content_row">
				<div className="col col-lg-3  d-lg-block d-none">
					<Sidebar />
				</div>
				<div className="col col-lg-9">
					<div className="page_content">
						<h4>Pricing Plans</h4>
						<p>Subscribe to Certification</p>

						<div className="text_card">
							<h5>Get all features to sign and certify documents</h5>
							<p>
								Please choose a subscription to use all features of certification. A paid subscription allows you to sign and certify new
								documents
							</p>
						</div>

						<div className="plans_card">
							<div className="row gx-5">
								<div className="col-lg-8 ">
									<h4>
										<span>10 Credits </span> / Month
									</h4>

									<div className="range_input_container">
										<div className="range_input">
											<input type="range" />
										</div>

										<div className="percentage_breakpoints">
											<div className="circles">
												<div className="circle"></div>
												<div className="circle"></div>
												<div className="circle"></div>
												<div className="circle"></div>
												<div className="circle"></div>
												<div className="circle"></div>
												<div className="circle"></div>
												<div className="circle"></div>
												<div className="circle"></div>
												<div className="circle"></div>
												<div className="circle"></div>
											</div>

											<div className="texts">
												<div className="text">10</div>
												<div className="text">50</div>
												<div className="text">100</div>
												<div className="text">500</div>
												<div className="text">1k</div>
												<div className="text">5k</div>
												<div className="text">10k</div>
												<div className="text">50k</div>
												<div className="text">100k</div>
												<div className="text">500k</div>
												<div className="text">1M+</div>
											</div>
										</div>
									</div>

									<h4 className="my-3">$16.00/ Month</h4>

									<hr />

									<h4 className="my-3">$1.56nth/ Additional Credits</h4>

									<p>
										<span>1 Credit</span> per standard esignature (SES)
									</p>
									<p>
										<span>2 Credit</span> per Certification
									</p>
									<p>
										<span>2 Credit</span> per Qualified eSignature(QES)
									</p>
								</div>
								<div className="col-lg-4 mt-5 mt-lg-0">
									<div className="drop_downs">
										<h4>Payment Method</h4>
										<select class="form-select form-select-lg mb-4" aria-label="Default select example">
											<option selected>Monthly</option>
											<option value="1">One</option>
											<option value="2">Two</option>
											<option value="3">Three</option>
										</select>

										<h4>Currency</h4>
										<select class="form-select form-select-lg mb-4" aria-label="Default select example">
											<option selected>EUR</option>
											<option value="1">One</option>
											<option value="2">Two</option>
											<option value="3">Three</option>
										</select>

										<h4>Billing Country</h4>
										<select class="form-select form-select-lg mb-4" aria-label="Default select example">
											<option selected>EUR</option>
											<option value="1">One</option>
											<option value="2">Two</option>
											<option value="3">Three</option>
										</select>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Plans
