import "./qualifications.css";

const Qualifications = () => {
	return (
		<div>
			<span className="quali-text">My Qualifications</span>
			<div className="qualifications-container">
				<div className="qualification">
					<div className="content html"></div>
					<h1>Html</h1>
				</div>
				<div className="qualification">
					<div className="content css"></div>
					<h1>Css</h1>
				</div>
				<div className="qualification">
					<div className="content javascript"></div>
					<h1>Javascript</h1>
				</div>
				<div className="qualification">
					<div className="content bootstrap"></div>
					<h1>Bootstrap</h1>
				</div>
				<div className="qualification">
					<div className="content react"></div>
					<h1>React</h1>
				</div>
				<div className="qualification">
					<div className="content c-plus-plus"></div>
					<h1>C++</h1>
				</div>
				<div className="qualification">
					<div className="content c-sharp"></div>
					<h1>C#</h1>
				</div>
				<div className="qualification">
					<div className="content kotlin"></div>
					<h1>kotlin</h1>
				</div>
			</div>
		</div>
	);
};

export default Qualifications;
