import React from "react"
import ProjectList from "./containers/project/projectList"

function App() {
	const propsToSend = {
		color: "Red",
		projectLength: 5,
		description: "I'm a project-list"
	}
	return (
		<div className="App">
			<ProjectList {...propsToSend} />
		</div>
	)
}

export default App
