import React from "react"

function projectList(props) {
	return (
		<div>
			<p>Project1</p>
			<p>Project2</p>
			<p>{JSON.stringify(props)}</p>
		</div>
	)
}

export default projectList
