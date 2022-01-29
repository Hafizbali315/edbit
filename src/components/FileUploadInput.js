const FileUploadInput = ({ heading, text, icon, background }) => {
	return (
		<div className="file_input" style={{ background: background }}>
			<input type="file" />

			<div className="input_placeholder">
				<div className="img_container">
					<img src={icon} alt="EditIcon" />
				</div>
				<div className="text">
					<h5>{heading}</h5>
					<p>{text}</p>
				</div>
			</div>
		</div>
	)
}

export default FileUploadInput
